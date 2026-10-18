# Affiliate and partner programs: Vibe Ranked

**Researched:** 2026-10-17 · **Scope:** all 60 tools in `src/data/tools.json` · **Status:** research only. Nothing was signed up for, no forms were submitted, no one was emailed, and no site code was changed.

**How this was checked:** I fetched each program's official page with WebFetch (or curl when the page is rendered with JavaScript). Quotes come from the vendor's own page or terms. Where the official page doesn't publish a number, the table says so. If a figure appears only on third-party directories, it is labelled **unverified**. Terms change often, so read the current terms again before applying or publishing any claim.

Legend for "signup URL verified": ✅ the page loaded and shows the program · ⚠️ the URL resolves but is a login or JavaScript app (Impact, PartnerStack, Tolt), so its contents couldn't be read.

---

## 1. Top 10 by expected value for Vibe Ranked

How I scored it: **ease of approval** (self-serve beats a manual review, which beats creator-only or invite-only) × **payout per conversion** (recurring beats one-time; cash beats credits) × **how prominently we rank the tool** (a #1–3 slot in a high-intent category like app builders or voice gets the most clicks).

| # | Tool (our rank) | Program / network | Commission (official wording) | Cookie | Approval | Why it ranks here |
|---|---|---|---|---|---|---|
| 1 | **Lovable** (#1 App Builders) | Lovable Affiliate Program · **Impact** | "Earn up to $100 for each first-time subscriber you refer." | Not stated on the official page | Application, then manual approval | Our #1 app builder, which is the most "vibe coder" category. Pays a flat, high one-time bounty. |
| 2 | **ElevenLabs** (#1 Voice) | Creator Affiliate Program · **PartnerStack** | "22% for the first 12 months … from our Starter, Creator, Pro, and Scale Plans, and 11% from our new Business Plan." | Not stated | **Self-serve** through PartnerStack onboarding (needs an ElevenLabs account) | Recurring for 12 months, easy to join, and it's our #1 voice tool. Strict disclosure rules (see §4). |
| 3 | **v0** (#3 App Builders) | v0 Affiliate Program · **Dub Partners** | Not published on the official Dub page. Vercel's Jul 2025 Ambassador post said "Earn $10 for every Premium referral and $30 for every Team referral". Third parties report "$5/lead + 30% for 6 months" (**unverified**). | Not stated | Application ("Acceptance … at the sole discretion of Vercel"). Requires a Vercel account in good standing. | High-ranked, high-traffic tool, and Dub is easy to use. Rate unknown until approved. |
| 4 | **Anything** (#7 App Builders) | Anything Affiliate Program · **Dub Partners** (an older Rewardful portal still loads) | "Earn 30% per sale for 1 year". New users get "20% off for their first purchase". | Not stated officially (third parties say 60 days, **unverified**) | Registration on Dub; looks self-serve | Best recurring rate among the app builders, and the referred user gets a discount. Hurt by our low #7 rank. |
| 5 | **Railway** (#6 Deploy/Backend) | Railway Affiliate Program · **direct** (in-dashboard; payouts through Stripe Connect) | "15% commission on every invoice your referrals pay, for the first 12 months … No dollar cap." Referrals get "$20 in credits". | Not stated (attributed by link signup) | **No approval needed.** Any Railway account gets a link. | Instant, recurring, paid in cash ("$100–$10,000 increments via Stripe Connect"). A natural fit for builders shipping apps. |
| 6 | **Netlify** (#4 Deploy/Backend) | Netlify Partners: Ecosystem Partner · **PartnerStack** | "20% revenue share for up to 12 months on eligible self-serve new business" | Not stated | "Applications are reviewed and approved by the Netlify Partner Team". Publishers are explicitly in scope. | Recurring 20%. Netlify names "creators, publishers, educators" as eligible. |
| 7 | **Bolt.new** (#2 App Builders) | Refer a friend · **Cello** (payout via PayPal/Venmo) | "you earn 15% of what they pay Bolt, up to $50 per referral". The friend gets "a 20% discount". | Not stated | **Self-serve** from any personal Bolt account ("Earn $50" in the sidebar) | Our #2 app builder, with no approval needed. Capped at $50 and framed as refer-a-friend, so check that the Bolt/Cello terms allow publisher placement before relying on it. |
| 8 | **Runway** (#2 Video) | Runway Affiliate Program · **direct** (Stripe payouts) | "Earn $15 for every new subscriber you refer, with a unique code that gives your audience 25% off any Runway plan." | n/a (**code-based**, not cookie-based) | Manual review, "Every partnership starts with a 3-month pilot". Aimed at creators with "an active channel on Instagram, TikTok, YouTube, X or a similar platform". | Strong brand, and our #2 video tool. Partners get a free Max plan. A website may or may not count as a channel. |
| 9 | **Hailuo AI** (#6 Video) | Hailuo AI Affiliate Program · **Impact** | "Get from 10% up to 30% commission on every paid referral." "$10 minimum payout · no earnings cap" | "Reasonable cookie period" (no number given) | Application ("Fast application approval") | Decent rate and easy entry, but low rank and a tiered rate that starts at 10%. |
| 10 | **Base44** (#5 App Builders) | Base44 Affiliate Program · **Impact** | "We offer a fixed $100 commission for each successful referral." | "We offer a 30 day cookie window." | Application. Terms allow rejection of "sites that do not generate sufficient volume of visitors". Review takes "approximately sixty (60) business days". | **Caution:** terms §5 require earning at least **$300/month** (3+ conversions), or Base44 may terminate you, and fees can be voided after 3 months under the threshold. Payment is against an invoice you issue. Risky for a new site. |

**Honorable mentions (lower EV or unverified):** Kling AI (#3 Video), whose official pages confirm a program exists but show no terms (third parties report "25% recurring, 42-day cookie, Impact", **unverified**). Deepgram (#5 Voice), FlexOffers: "The payout is 16% of sale." Ideogram (#4 Image), Creators Club: "Get financially rewarded through our affiliate program". The rate isn't published, and it's for social-content creators.

---

## 2. Full list: all 60 tools

### Programs open to publishers (or plausibly open)

| Tool (cat · rank) | Program · network | Signup URL | Verified | Commission (quoted) | Cookie | Approval / requirements |
|---|---|---|---|---|---|---|
| Lovable (app · 1) | Affiliate · Impact | Info: https://lovable.dev/partners/affiliates · Apply: https://app.impact.com/campaign-campaign-info-v2/Lovable-Labs.brand | ✅ / ⚠️ | "Earn up to $100 for each first-time subscriber you refer." Also mentions "tiered bonuses and increased commission rates as you hit milestones" and "Monthly payouts with low minimum threshold". Separately, the Partner Program (Sep 2026) offers Experts "a 10% commission on Business plan accounts they refer" (for agencies/builders, not publishers). | Not stated | "Apply & get approved". Note: affiliate-referrals.lovable.app is an **independent, non-official** page, so don't cite it. |
| Bolt.new (app · 2) | Refer a friend · Cello | https://support.bolt.new/account/referral-program | ✅ | "earn 15% of what they pay Bolt, up to $50 per referral". The reward is held 30 days. Payout via "PayPal or Venmo". | Not stated | Self-serve, personal account only. No self-referrals. |
| v0 (app · 3) | Affiliate · Dub Partners | https://partners.dub.co/v0/register (the bare `/v0` page renders but WebFetch got a 404) | ✅ | Not published. Terms: https://vercel.com/legal/affiliate-marketing-terms ("Fees … set forth in the applicable Program Guidelines"; "All Fees earned shall be one-time payments unless expressly stated otherwise"). | Not stated | Discretionary acceptance. Must be of age and keep a Vercel and v0 account in good standing. **No paid ads with the affiliate link; no coupon sites.** Must remove a link within 24 hours on request. |
| Replit (app · 4) | Referral · direct | https://replit.com/refer | ✅ | "For every new paying customer you refer, you both get $20 in Replit credits". **Credits only, no cash.** (The solution-partner program at replit.com/partners is for resellers and integrators.) | Not stated | Self-serve |
| Base44 (app · 5) | Affiliate · Impact | Info: https://base44.com/affiliates · Apply: Impact link on that page · Terms: https://base44.com/affiliate-terms | ✅ / ⚠️ | "fixed $100 commission for each successful referral"; "The minimum payout threshold is $300." Terms §9.5: first purchase only, no renewals. | 30 days | Manual review. $300/mo minimum transaction requirement (§5). Invoices required. Israeli law. Prohibits brand-keyword PPC. |
| Anything (app · 7) | Affiliate · Dub Partners | https://partners.dub.co/anything (register: /anything/register). Legacy: https://create-xyz.getrewardful.com/signup | ✅ | "Earn 30% per sale for 1 year"; "New users get 20% off for their first purchase" | Not stated | Self-serve registration on Dub |
| Runway (video · 2) | Affiliate · direct | https://runway.com/affiliate-program | ✅ | "Earn $15 for every new subscriber who purchases a paid Runway plan with your code. There is no cap" | n/a (code) | Free Runway account, full channel URLs, manual review, 3-month pilot. "Payouts go out on the first of every month via Stripe." |
| Kling AI (video · 3) | Affiliate · reportedly Impact | https://kling.ai/explore/kling_affiliate_program (also https://kling.ai/app/affiliate) | ⚠️ (SEO page / JS app, no terms visible) | Not visible on official pages. Third parties report 25% recurring (**unverified**). | 42 days (**unverified**) | Unknown |
| Hailuo AI (video · 6) | Affiliate · Impact | Info: https://hailuoai.video/affiliate · Apply: https://app.impact.com/campaign-campaign-info-v2/HailuoAI.brand | ✅ / ⚠️ | "Our affiliates earn from 10% up to 30% commissions on every sale". "Transactions are locked 27 days after … and are paid 30 days after the month they get locked in." Refunds claw back. | "Reasonable" (no number) | Application. Paid ads allowed, but not on the brand name or keywords. |
| ElevenLabs (voice · 1) | Creator Affiliate · PartnerStack | https://elevenlabs.io/affiliate · Terms: https://elevenlabs.io/affiliates-terms · Directory: https://market.partnerstack.com/program/elevenlabsinc | ✅ | Terms: "Referrals for Business Plan: 11% Referrals for Starter, Creator, Pro, or Scale Plans: 22%" during "the first 12 months". "Commissions are paid after the license has been active for more than 90 days". "The minimum payout threshold is $5." No enterprise commissions. | Not stated | Self-serve. 18+. "Only natural persons are permitted to register". KYC/KYB on request. **Disclosure must sit next to the link, and footer-only is not enough.** Required attribution statement (see §4). No brand-keyword paid media, and no ElevenLabs marks in meta tags, alt text, or schema "intended … to influence the ranking". |
| Vapi (voice · 3) | Affiliate · Tolt / Creators program | https://affiliates.vapi.ai/ (Tolt login) · https://vapi.ai/creators | ⚠️ / ✅ | Creators page: "15% referral revenue". The Creators page says **"APPLICATIONS ON HOLD"**. | Not stated | Tolt portal accepts email signup. Creator track on hold. |
| Deepgram (voice · 5) | Affiliate · FlexOffers | https://www.flexoffers.com/affiliate-programs/deepgram-affiliate-program/ | ✅ (network page, not Deepgram's own site) | "The payout is 16% of sale." | Not stated | FlexOffers publisher account plus program approval |
| Suno (voice · 6) | Affiliate · Impact (reported) | Search "Suno" in the Impact marketplace | ✗ not verified on an official page | Third parties report $10 per sale, 60-day cookie (**unverified**). The Spark ambassador program (about.suno.com/spark-terms) is a separate, creator-content deal with exclusivity. | — | Unknown |
| Ideogram (image · 4) | Creators Club affiliate · direct | https://ideogram.ai/features/creators-club/ (Google Form application) | ✅ | "Get financially rewarded through our affiliate program". Rate not published. | Not stated | Creators who "Produce high-quality social media content on platforms like YouTube, X, Instagram, and TikTok". A website-only applicant may not fit. |
| Netlify (deploy · 4) | Netlify Partners (Ecosystem) · PartnerStack | Info: https://www.netlify.com/partners/ · Apply: https://dash.partnerstack.com/application?company=netlify&group=ecosystempartners | ✅ / ⚠️ | "20% revenue share for up to 12 months on eligible self-serve new business". Certified tier: 24 months (needs 3+ Pro referrals a year plus training). | Not stated | Reviewed by the Netlify Partner Team. No customer account required for the Ecosystem tier. |
| Railway (deploy · 6) | Affiliate · direct (Stripe Connect) | https://railway.com/affiliate-program | ✅ | "15% commission on every invoice your referrals pay, for the first 12 months after they sign up"; "Cash withdrawals: $100–$10,000 increments via Stripe Connect, paid out monthly." | Not stated | "Valid Railway account (free to sign up)." No application. |
| Neon (deploy · 8) | Referral pilot · direct | https://neon.com/docs/changelog/2026-06-19 (link lives in the Neon console) | ✅ | "when they sign up for Neon and spend $5, you get $5 in credits." Credits only, "early pilot". | — | Self-serve |
| Convex (deploy · 5) | Referral · direct | https://www.convex.dev/referral | ✅ | "both of your teams get free Convex resources on top of the free plan limits". No cash. | — | Self-serve |
| Devin Desktop / Windsurf (agents · 5) | Referral · direct | https://windsurf.com/refer | ✅ | "get $10 in extra usage when they subscribe to Pro". Usage credit only. | — | Paid-user referral |
| Claude Code / Anthropic (agents · 2, llm · 1) | Guest passes | (in-product `/passes`) | Not officially verified | Third-party reports: Max subscribers get "$10 in extra usage credit, up to $30". Not a publisher program. | — | — |

### No public publisher program found (as of 2026-10-17)

- **Cursor** (agents · 1): the referral program closed in July 2026 (per a forum thread and third parties). The Ambassadors program (https://cursor.com/ambassadors) gives credits, swag, and meetup funding. No commission.
- **OpenAI Codex, OpenAI API, OpenAI Realtime API, OpenAI Agents SDK, GPT Image (ChatGPT)**: none found.
- **GitHub Copilot**: none (GitHub's partner program is for technology partners).
- **Google Antigravity, Google AI Studio, Nano Banana (Gemini), Google Veo/Flow, Gemini API**: none found.
- **Anthropic API, Claude Agent SDK**: none (only the guest passes above).
- **xAI API, Groq, Mistral, Together AI, OpenRouter**: none verified. OpenRouter offers a startup credits program only. Third-party listings for Mistral, Groq, and Together are unconfirmed.
- **Cline, Aider, Zed**: none (open source or no program).
- **Midjourney**: none.
- **Black Forest Labs FLUX**: Creator Program (https://bfl.ai/creator-program) gives credits and early access. No commission.
- **Recraft**: none. Third-party and FAQ sources say the referral program is disabled and the creator program pays no commission.
- **Leonardo.Ai**: **closed.** The official page says: "We'll be winding down the affiliate program on April 7, 2026 and no new applications are being accepted."
- **Luma Dream Machine**: Creative Partner Program gives credits and perks. It requires "a minimum 5,000+ engaged followers". No stated commission.
- **Pika**: no public program. Reports describe it as invite-only (**unverified**).
- **Cartesia, Hume AI**: none confirmed. A previously reported Hume PartnerStack page is gone.
- **Vercel** (platform, deploy · 1): the only affiliate program is v0's (above). **Vercel AI SDK**: none.
- **Supabase**: none for publishers. The partner program covers integrations and agencies; SupaSquad is unpaid.
- **Cloudflare**: none for publishers (PowerUP is for resellers and MSPs).
- **Clerk**: no affiliate program. A creator program (https://clerk.com/creators) pays per video, not per referral.
- **LangGraph, Mastra, CrewAI, Pydantic AI, LlamaIndex**: none verified.

---

## 3. Notes on ranking integrity

- Several programs pay for tools we rank low (Anything is #7, Hailuo #6, Railway #6). **Don't let affiliate status move rankings.** Say so on the site: "Rankings are editorial and are not affected by affiliate relationships."
- Some vendors ban specific practices: v0/Vercel bans paid ads with the link and coupon sites; ElevenLabs, Base44, and Hailuo ban brand-keyword ads; ElevenLabs bans putting its marks in schema or alt text to influence ranking. Our JSON-LD should keep the **plain official URL**. Never put tracked links in schema.org markup or `llms.txt`.

---

## 4. FTC disclosure we'd need

Legal basis: the FTC Act §5 and the FTC's **Guides Concerning the Use of Endorsements and Testimonials in Advertising (16 CFR Part 255, revised 2023)**. A disclosure has to be **clear and conspicuous**: unavoidable, in plain language, and **close to the link or recommendation**, before the user clicks. A footer-only or "About"-page-only disclosure does not meet that bar. ElevenLabs' terms say so explicitly ("Disclosures placed solely in a footer … are not sufficient"). Separately, don't publish fake or incentivized reviews (FTC Consumer Reviews and Testimonials Rule, 16 CFR Part 465).

**Proposed copy:**

- **Site-wide, near the top of every category and tool page** (above the first "Visit" button):
  > *Some links on Vibe Ranked are affiliate links. If you sign up or buy through them, we may earn a commission at no extra cost to you. Rankings are editorial and are not influenced by affiliate relationships.* [How we make money →]
- **Per-link label** next to any affiliate "Visit" button: a small "Affiliate link" or "(affiliate)" tag. A tooltip alone isn't enough, so the text should be visible.
- **A `/disclosure` page** listing which tools we have affiliate relationships with and how rankings are made (supplementary only, never a substitute for the on-page notices).
- **ElevenLabs-specific attribution** (required by its terms, footer or legal page is fine):
  > "ElevenLabs and the ElevenLabs logo are registered trademarks or trademarks of ElevenLabs, Inc. Used with permission. Vibe Ranked is not sponsored by, endorsed by, or affiliated with ElevenLabs except as an independent participant in the ElevenLabs Creator Affiliate Program."
- Base44 terms §4.8 also require "a disclosure conveying that Affiliate participates in Affiliation programs … in a prominent and easily accessible place". The site-wide notice covers this.
- If we send newsletters or social posts with affiliate links, add "#ad" or "(affiliate link)" in the post itself.

---

## 5. Proposal: affiliate links in `tools.json` (not implemented yet)

**Data:** add one optional field per tool and keep `url` as the canonical official URL.

```jsonc
{
  "rank": 1,
  "slug": "lovable",
  "name": "Lovable",
  "url": "https://lovable.dev",                 // canonical; used in JSON-LD, llms.txt, display text
  "affiliateUrl": "https://lovable.dev/?via=…", // optional; only set once approved
  "affiliate": {                                 // optional metadata for us, not rendered
    "program": "Lovable Affiliate Program",
    "network": "impact",
    "terms": "Up to $100 per first-time subscriber",
    "verified": "2026-10-17"
  }
}
```

(A minimal version with just `affiliateUrl` works too. The `affiliate` object makes the yearly re-verification in FACTCHECK.md easier.)

**Rendering** (in `src/pages/category/[slug].astro` line ~32 and `src/pages/tool/[slug].astro` line ~25):

```astro
---
const href = t.affiliateUrl ?? t.url;
const rel = t.affiliateUrl ? 'sponsored nofollow noopener' : 'noopener';
---
<a class="btn" href={href} target="_blank" rel={rel}>Visit {t.name} ↗</a>
{t.affiliateUrl && <span class="mut aff">Affiliate link</span>}
<span class="mut">{t.url}</span>   <!-- keep showing the clean URL -->
```

- `rel="sponsored nofollow noopener"`: `sponsored` is Google's attribute for paid or affiliate links, and `nofollow` is a fallback for other crawlers.
- **Don't** change the JSON-LD `url:t.url` fields or `src/lib/llms.js` output. They should stay canonical.
- Render the disclosure banner conditionally, or always on category and tool pages (simpler, and future-proof).
- Optional: a build-time check that fails if `affiliateUrl` exists without a matching disclosure component on the page, and a `/disclosure` page generated from all tools that have `affiliateUrl`.
- Optional: route through `/go/<slug>` (a Vercel redirect in `vercel.json`) for click analytics and one-place link swaps. The `rel` attributes and disclosure still apply.

---

## 6. What the signups will ask for

Collect this once before applying anywhere:

| Item | Needed by |
|---|---|
| **Legal name** (individual, or business entity name) plus a contact email | All. ElevenLabs: "full legal name and a valid email address". Only natural persons can register there. |
| **Mailing address and country of residence** (country of the bank account for Runway) | All networks; Runway asks "Where your bank account is held" |
| **Tax form**: US person → **W-9** (SSN or EIN); non-US → **W-8BEN** (individual) / **W-8BEN-E** (entity) | Impact, PartnerStack, Dub, FlexOffers, Tolt, and Stripe Connect all collect tax info before payout. ElevenLabs: "completed any and all required tax documents". Vercel: "completed any and all required tax documentation". |
| **Payout method**: bank account (ACH/wire) and/or **PayPal**; **Venmo** for Bolt; **Stripe Connect** for Railway and Runway | Bolt/Cello: PayPal or Venmo. Railway: Stripe Connect. Runway: Stripe. Base44: bank/wire **plus invoices you issue**. PartnerStack/Impact/Dub: bank or PayPal (varies by country). |
| **Website URL plus description, audience, monthly traffic, and promotion methods** | Impact (Lovable, Base44, Hailuo), PartnerStack (Netlify), Dub (v0, Anything), FlexOffers. Base44 can reject low-traffic sites. |
| **Social or channel links** (full URLs) | Runway (required), Ideogram (social creators), v0 Ambassador. Having an X/YouTube/newsletter presence for Vibe Ranked helps. |
| **A product account in good standing** with the same email | ElevenLabs, Vercel/v0, Runway, Railway, Bolt, Replit, Neon, Convex |
| **Identity or business verification (KYC/KYB)** on request | ElevenLabs (explicit); Stripe Connect and payment networks in general |
| **Proof of site ownership** on request | ElevenLabs ("produce verification of your ownership of any content channel or website") |
| **Age 18+** and **no sanctions** | ElevenLabs, Vercel, Base44, Cursor Ambassadors |
| **Agreement to terms**: arbitration (Vercel: JAMS, San Francisco), governing law (Base44: Israel), no brand-keyword ads | Read before accepting |

**Suggested order** (fastest wins first): (1) Railway and ElevenLabs, both self-serve the same day. (2) Anything (Dub) and Bolt (in-app). (3) Lovable and Hailuo (Impact), Netlify (PartnerStack), v0 (Dub), which all need review. (4) Runway, which needs a channel. (5) Base44 only once traffic can reliably clear $300/month.
