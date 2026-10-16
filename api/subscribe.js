// Vercel serverless function: adds a newsletter subscriber to the Resend segment.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  let raw = typeof req.body === 'string' ? req.body : '';
  if (!raw) { for await (const c of req) raw += c; }
  const type = req.headers['content-type'] || '';
  if (type.includes('application/json')) { try { return JSON.parse(raw || '{}'); } catch { return {}; } }
  return Object.fromEntries(new URLSearchParams(raw));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return send(res, 405, { ok: false, error: 'Method not allowed' }); }
  const body = await readBody(req);
  // Honeypot: real users never fill the hidden "company" field. Pretend success for bots.
  if (body.company) return send(res, 200, { ok: true });
  const email = String(body.email || '').trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) return send(res, 400, { ok: false, error: 'Please enter a valid email address.' });

  const key = process.env.RESEND_API_KEY, segment = process.env.RESEND_SEGMENT_ID;
  if (!key || !segment) return send(res, 500, { ok: false, error: 'Newsletter is not configured.' });

  try {
    const r = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, unsubscribed: false, segments: [{ id: segment }] }),
    });
    if (r.ok) return send(res, 200, { ok: true });
    const data = await r.json().catch(() => ({}));
    const msg = String(data.message || '');
    if (r.status === 409 || /already exists/i.test(msg)) {
      // Existing contact: make sure they're in the segment.
      await fetch(`https://api.resend.com/contacts/${encodeURIComponent(email)}/segments/${segment}`, {
        method: 'POST', headers: { Authorization: `Bearer ${key}` },
      }).catch(() => {});
      return send(res, 200, { ok: true });
    }
    console.error('Resend error', r.status, msg);
    return send(res, 502, { ok: false, error: 'Could not subscribe right now. Please try again.' });
  } catch (e) {
    console.error('Subscribe failed', e);
    return send(res, 502, { ok: false, error: 'Could not subscribe right now. Please try again.' });
  }
};
