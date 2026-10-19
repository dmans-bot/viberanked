import data from '../data/tools.json';
import { SITE, clip } from './site.js';

// Head-to-head pairs. Slugs must match tools.json. A pair is skipped when either tool is missing.
// Optional `slug` overrides the URL segment; the default is `${a}-vs-${b}`.
const REQUESTED_PAIRS = [
  { a: 'lovable', b: 'bolt-new' },
  { a: 'lovable', b: 'v0' },
  { a: 'bolt-new', b: 'v0' },
  { a: 'cursor', b: 'claude-code' },
  { a: 'cursor', b: 'windsurf', slug: 'cursor-vs-devin-desktop' },
];

function locate(slug) {
  for (const category of data.categories) {
    const tool = category.tools.find((t) => t.slug === slug);
    if (tool) return { tool, category };
  }
  return null;
}

function faqs(a, b, categoryA, categoryB) {
  const same = categoryA.slug === categoryB.slug;
  const rankAnswer = same
    ? `In ${categoryA.name}, Vibe Ranked ranks ${a.name} #${a.rank} and ${b.name} #${b.rank}.`
    : `Vibe Ranked ranks ${a.name} #${a.rank} in ${categoryA.name} and ${b.name} #${b.rank} in ${categoryB.name}. Those are separate leaderboards.`;
  return [
    { q: `How does Vibe Ranked rank ${a.name} vs ${b.name}?`, a: rankAnswer },
    { q: `What is the pricing for ${a.name}?`, a: `${a.name} is listed as ${a.pricing}. ${a.pricingNote}` },
    { q: `What is the pricing for ${b.name}?`, a: `${b.name} is listed as ${b.pricing}. ${b.pricingNote}` },
    { q: `What is ${a.name}?`, a: a.description },
    { q: `What is ${b.name}?`, a: b.description },
    {
      q: `Where did Vibe Ranked verify pricing for ${a.name} and ${b.name}?`,
      a: `${a.name}: ${a.verifiedSource}. ${b.name}: ${b.verifiedSource}.`,
    },
  ];
}

let cached;

export function getComparisons() {
  if (cached) return cached;
  const list = [];
  const skipped = [];
  for (const pair of REQUESTED_PAIRS) {
    const A = locate(pair.a);
    const B = locate(pair.b);
    if (!A || !B) {
      skipped.push(`${pair.a} vs ${pair.b}`);
      continue;
    }
    const a = A.tool;
    const b = B.tool;
    const slug = pair.slug || `${pair.a}-vs-${pair.b}`;
    const path = `/compare/${slug}/`;
    const url = `${SITE}${path}`;
    const sameCategory = A.category.slug === B.category.slug;
    const title = `${a.name} vs ${b.name}: Rankings & Pricing | Vibe Ranked`;
    const description = clip(
      sameCategory
        ? `${a.name} is ranked #${a.rank} (${a.pricing}) and ${b.name} is ranked #${b.rank} (${b.pricing}) in ${A.category.name} on Vibe Ranked. ${a.name}: ${a.pricingNote}. ${b.name}: ${b.pricingNote}.`
        : `${a.name} is ranked #${a.rank} in ${A.category.name} (${a.pricing}) and ${b.name} is ranked #${b.rank} in ${B.category.name} (${b.pricing}) on Vibe Ranked. ${a.name}: ${a.pricingNote}. ${b.name}: ${b.pricingNote}.`
    );
    list.push({
      slug,
      path,
      url,
      title,
      description,
      a,
      b,
      categoryA: A.category,
      categoryB: B.category,
      sameCategory,
      faqs: faqs(a, b, A.category, B.category),
    });
  }
  if (skipped.length) console.warn(`Skipped comparison pairs missing from tools.json: ${skipped.join('; ')}`);
  cached = list;
  return list;
}

export function comparisonsForCategory(categorySlug) {
  return getComparisons().filter((c) => c.categoryA.slug === categorySlug || c.categoryB.slug === categorySlug);
}

export function comparisonsForTool(toolSlug) {
  return getComparisons().filter((c) => c.a.slug === toolSlug || c.b.slug === toolSlug);
}
