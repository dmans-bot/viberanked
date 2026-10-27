import data from '../data/tools.json';
import { SITE, fmtDate } from './site.js';
import { getComparisons } from './comparisons.js';
import { getGuides } from './guides.js';

function comparisonLine(c) {
  const where = c.sameCategory ? ` in ${c.categoryA.name}` : '';
  return `- [${c.a.name} vs ${c.b.name}](${c.url}): #${c.a.rank} ${c.a.name} (${c.a.pricing}) vs #${c.b.rank} ${c.b.name} (${c.b.pricing})${where}.`;
}

const total = data.categories.reduce((n, c) => n + c.tools.length, 0);
const header = () => [
  '# Vibe Ranked',
  '',
  `> Opinionated, independent rankings of ${total} AI tools for vibe coders and indie builders, organized by use case. No paid placements. Last verified ${fmtDate(data.lastVerified)} (${data.lastVerified}); prices and links were checked against official sites on that date.`,
  '',
  `Site: ${SITE}/`,
  'Rank #1 is our top pick for most builders in each use case. Pricing badges: free = free/open source; freemium = ongoing free tier + paid plans; paid = no ongoing free tier.',
  '',
];

export function llmsTxt() {
  const out = header();
  out.push('## Best AI tool by use case', '');
  for (const c of data.categories) {
    const [a, b, d] = c.tools;
    out.push(`- [${c.headline}](${SITE}/category/${c.slug}/): #1 ${a.name}, #2 ${b.name}, #3 ${d.name}. ${c.intro.split(/(?<=\.)\s/)[0]}`);
  }
  const comparisons = getComparisons();
  if (comparisons.length) {
    out.push('', '## Head-to-head comparisons', '');
    for (const c of comparisons) out.push(comparisonLine(c));
  }
  const guides = getGuides();
  if (guides.length) {
    out.push('', '## Best for a specific job', '');
    for (const g of guides) {
      const who = g.picks.map((p) => `#${p.rank} ${p.name} (${p.pricing}; best for: ${p.bestFor})`).join(', ');
      out.push(`- [${g.headline}](${g.url}): ${who} in ${g.category.name}.`);
    }
  }
  out.push('', '## Optional', '', `- [Full rankings with pricing for every tool](${SITE}/llms-full.txt)`, `- [Sitemap](${SITE}/sitemap-index.xml)`, '');
  return out.join('\n');
}

export function llmsFullTxt() {
  const out = header();
  for (const c of data.categories) {
    out.push(`## ${c.headline}`, '', `URL: ${SITE}/category/${c.slug}/`, '', c.intro, '');
    for (const t of c.tools) {
      out.push(`${t.rank}. **${t.name}** (${t.pricing}) — ${t.description} Best for: ${t.bestFor}. Pricing: ${t.pricingNote}. Official site: ${t.url} · Details: ${SITE}/tool/${t.slug}/`);
    }
    out.push('');
  }
  const comparisons = getComparisons();
  if (comparisons.length) {
    out.push('## Head-to-head comparisons', '');
    for (const c of comparisons) {
      out.push(`${comparisonLine(c)} ${c.a.name}: ${c.a.description} Pricing: ${c.a.pricingNote}. ${c.b.name}: ${c.b.description} Pricing: ${c.b.pricingNote}.`);
    }
    out.push('');
  }
  const guides = getGuides();
  if (guides.length) {
    out.push('## Best for a specific job', '');
    for (const g of guides) {
      const sites = g.picks.map((p) => `${p.name} official site: ${p.url}. Details: ${SITE}/tool/${p.slug}/`).join(' ');
      out.push(`- [${g.headline}](${g.url}): ${g.answer} ${sites}`);
    }
    out.push('');
  }
  out.push('## Recent releases', '');
  for (const r of data.releases) out.push(`- ${r.date}: [${r.title}](${r.url}) (${r.tag})`);
  out.push('');
  return out.join('\n');
}
