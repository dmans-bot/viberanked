import data from '../data/tools.json';
import { SITE, clip } from './site.js';
import { comparisonsForTool } from './comparisons.js';

// "<Tool> alternatives" pages. Slugs must match tools.json. Each page lists the
// other tools in that tool's category, in the existing rank order. Copy is the
// tool fields plus one opinion line (people switch when the best-for line is
// not the job). A page is refused when the tool is missing or the category has
// fewer than four other tools.
//
// Chosen as the highest-intent "alternatives" queries that already exist here:
// the eight named in the brief, plus GitHub Copilot, OpenAI Codex, Runway, and
// Vercel. Bolt.new keeps its tools.json slug (bolt-new).
const REQUESTED_SLUGS = [
  'cursor',
  'lovable',
  'bolt-new',
  'claude-code',
  'v0',
  'replit',
  'elevenlabs',
  'midjourney',
  'github-copilot',
  'openai-codex',
  'runway',
  'vercel',
];

const MIN_ALTERNATIVES = 4;

function article(name) {
  return /^[aeiou]/i.test(name) ? 'an' : 'a';
}

function locate(slug) {
  for (const category of data.categories) {
    const tool = category.tools.find((t) => t.slug === slug);
    if (tool) return { tool, category };
  }
  return null;
}

function introFor(tool, category) {
  return `People switch when "${tool.bestFor}" is not the job. ${tool.name} is ranked #${tool.rank} of ${category.tools.length} in ${category.name} and is listed as ${tool.pricing}. Pricing: ${tool.pricingNote}. The alternatives below are the other tools in that category, in the same rank order. This page does not use a separate score.`;
}

function descriptionFor(headline, tool, category, alternatives) {
  const lead = alternatives.slice(0, 3).map((t) => `${t.name} (#${t.rank})`).join(', ');
  return clip(`${headline}: ${lead} and the rest of ${category.name}. ${tool.name} is #${tool.rank}, listed as ${tool.pricing}. ${tool.pricingNote}.`);
}

function faqsFor(tool, category, alternatives, year) {
  const ranked = alternatives
    .map((t) => `#${t.rank} ${t.name} (${t.pricing}; pick this if: ${t.bestFor})`)
    .join('; ');
  const prices = alternatives
    .map((t) => `${t.name} is listed as ${t.pricing}. ${t.pricingNote}`)
    .join(' ');
  return [
    {
      q: `What are the best ${tool.name} alternatives in ${year}?`,
      a: `On the ${category.name} leaderboard, the other tools are ${ranked}. ${tool.name} stays #${tool.rank}. There is no separate alternatives score.`,
    },
    {
      q: `Why look for ${article(tool.name)} ${tool.name} alternative?`,
      a: `People switch when "${tool.bestFor}" is not the job. That is an opinion about fit. ${tool.name} is ranked #${tool.rank} of ${category.tools.length} in ${category.name} and is listed as ${tool.pricing}. Pricing: ${tool.pricingNote}.`,
    },
    {
      q: `What is the pricing for ${tool.name}?`,
      a: `${tool.name} is listed as ${tool.pricing}. ${tool.pricingNote}`,
    },
    {
      q: `What do the ${tool.name} alternatives cost?`,
      a: prices,
    },
    {
      q: `Where did Vibe Ranked verify pricing for ${tool.name} and these alternatives?`,
      a: `${tool.name}: ${tool.verifiedSource}. ${alternatives.map((t) => `${t.name}: ${t.verifiedSource}.`).join(' ')} Last verified ${data.lastVerified}.`,
    },
  ];
}

let cached;

export function getAlternatives() {
  if (cached) return cached;
  const seen = new Set();
  const list = [];
  const year = data.lastVerified.slice(0, 4);
  for (const slug of REQUESTED_SLUGS) {
    if (seen.has(slug)) throw new Error(`Duplicate alternatives slug: ${slug}`);
    seen.add(slug);
    const found = locate(slug);
    if (!found) throw new Error(`Alternatives page tool not in tools.json: ${slug}`);
    const { tool, category } = found;
    const comparisons = comparisonsForTool(tool.slug);
    const alternatives = category.tools
      .filter((t) => t.slug !== tool.slug)
      .sort((a, b) => a.rank - b.rank)
      .map((alt) => ({
        ...alt,
        comparison: comparisons.find((c) => c.a.slug === alt.slug || c.b.slug === alt.slug) || null,
      }));
    if (alternatives.length < MIN_ALTERNATIVES) {
      throw new Error(`Alternatives page ${slug} has ${alternatives.length} same-category tools; need at least ${MIN_ALTERNATIVES}`);
    }
    const path = `/alternatives/${slug}/`;
    const headline = `Best ${tool.name} alternatives in ${year}`;
    list.push({
      slug,
      path,
      url: `${SITE}${path}`,
      year,
      headline,
      title: `${headline} | Vibe Ranked`,
      description: descriptionFor(headline, tool, category, alternatives),
      intro: introFor(tool, category),
      tool,
      category,
      alternatives,
      faqs: faqsFor(tool, category, alternatives, year),
    });
  }
  cached = list;
  return list;
}

export function alternativesForTool(toolSlug) {
  return getAlternatives().find((page) => page.tool.slug === toolSlug) || null;
}

export function alternativesForCategory(categorySlug) {
  return getAlternatives().filter((page) => page.category.slug === categorySlug);
}
