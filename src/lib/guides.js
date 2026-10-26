import data from '../data/tools.json';
import { SITE, clip } from './site.js';

// "Best X for Y" pages. Each quote must be an exact substring of that category's
// intro, description, or headline, or of a picked tool's bestFor, description,
// or pricingNote. getGuides() throws otherwise, so a page cannot ship a claim
// that is no longer in tools.json. Picks must belong to `category`.
const REQUESTED_GUIDES = [
  {
    slug: 'ai-app-builder-for-beginners',
    headline: 'Best AI App Builder for Beginners',
    question: 'What is the best AI app builder for beginners?',
    category: 'app-builders',
    picks: ['lovable'],
    quotes: ['The best AI app builder for most people is Lovable'],
  },
  {
    slug: 'coding-agent-for-large-refactors',
    headline: 'Best AI Coding Agent for Large Refactors',
    question: 'What is the best AI coding agent for large refactors?',
    category: 'ai-coding-agents',
    picks: ['claude-code'],
    quotes: [
      'Pick Claude Code for large refactors and long-running terminal tasks',
      'The best AI coding tool for most builders in 2026 is Cursor',
    ],
  },
  {
    slug: 'coding-agent-for-github-teams',
    headline: 'Best AI Coding Agent for GitHub Teams',
    question: 'What is the best AI coding agent for teams that live in GitHub?',
    category: 'ai-coding-agents',
    picks: ['github-copilot'],
    quotes: [
      'Pick Claude Code for large refactors and long-running terminal tasks, OpenAI Codex if you already pay for ChatGPT and want to hand tasks off to the cloud, and GitHub Copilot if your team lives in GitHub.',
      'The best AI coding tool for most builders in 2026 is Cursor',
    ],
  },
  {
    slug: 'open-source-coding-agent',
    headline: 'Best Open-Source AI Coding Agents',
    question: 'What is the best open-source AI coding agent?',
    category: 'ai-coding-agents',
    picks: ['cline', 'aider'],
    quotes: ['Want free and open source? Use Cline or Aider with your own API key.'],
  },
  {
    slug: 'ai-text-to-speech-for-products',
    headline: 'Best AI Text-to-Speech for Products',
    question: 'What is the best AI text-to-speech tool for products?',
    category: 'voice',
    picks: ['elevenlabs'],
    quotes: ['The best AI voice and text-to-speech tool for most products is ElevenLabs'],
  },
  {
    slug: 'hosting-for-nextjs',
    headline: 'Best Hosting for Next.js',
    question: 'What is the best hosting for a Next.js app?',
    category: 'deployment-backend',
    picks: ['vercel'],
    quotes: ['The best hosting for a vibe-coded web app is Vercel (free Hobby plan, ideal for Next.js)'],
  },
];

function categoryBySlug(slug) {
  return data.categories.find((c) => c.slug === slug) || null;
}

function quoted(q) {
  return /[.!?]$/.test(q) ? `"${q}"` : `"${q}".`;
}

function sourced(category, quotes) {
  return `From the ${category.name} ranking: ${quotes.map(quoted).join(' ')}`;
}

function answerFor(category, picks, quotes) {
  const who = picks
    .map((p) => `${p.name} is ranked #${p.rank} of ${category.tools.length} in ${category.name}. Listed as ${p.pricing}. Best for: ${p.bestFor}. Pricing: ${p.pricingNote}.`)
    .join(' ');
  return `${who} ${sourced(category, quotes)} This uses the ${category.name} leaderboard, not a separate score.`;
}

function descriptionFor(headline, category, picks) {
  if (picks.length === 1) {
    const p = picks[0];
    return clip(`${headline}: ${p.name} is #${p.rank} in ${category.name}. Best for: ${p.bestFor}. ${p.pricingNote}.`);
  }
  const who = picks.map((p) => `${p.name} (#${p.rank}, ${p.pricing})`).join(' and ');
  return clip(`${headline}: ${who} in ${category.name}. Best for: ${picks.map((p) => `${p.name}: ${p.bestFor}`).join('; ')}.`);
}

let cached;

export function getGuides() {
  if (cached) return cached;
  const seen = new Set();
  const list = [];
  for (const guide of REQUESTED_GUIDES) {
    if (seen.has(guide.slug)) throw new Error(`Duplicate guide slug: ${guide.slug}`);
    seen.add(guide.slug);
    const category = categoryBySlug(guide.category);
    if (!category) throw new Error(`Guide ${guide.slug} category not in tools.json: ${guide.category}`);
    const picks = [];
    for (const slug of guide.picks) {
      const tool = category.tools.find((t) => t.slug === slug);
      if (!tool) throw new Error(`Guide ${guide.slug} pick not in ${category.slug}: ${slug}`);
      picks.push(tool);
    }
    picks.sort((a, b) => a.rank - b.rank);
    const haystack = [
      category.intro,
      category.description,
      category.headline,
      ...picks.flatMap((p) => [p.bestFor, p.description, p.pricingNote]),
    ];
    for (const quote of guide.quotes) {
      if (!haystack.some((s) => s.includes(quote))) {
        throw new Error(`Guide ${guide.slug} quote not found in tools.json: ${quote}`);
      }
    }
    const year = data.lastVerified.slice(0, 4);
    const path = `/best/${guide.slug}/`;
    const answer = answerFor(category, picks, guide.quotes);
    const faqs = [
      { q: guide.question, a: answer },
      ...picks.map((p) => ({
        q: `What is the pricing for ${p.name}?`,
        a: `${p.name} is listed as ${p.pricing}. ${p.pricingNote}`,
      })),
      {
        q: `What else is ranked in ${category.name}?`,
        a: `${category.tools.map((t) => `#${t.rank} ${t.name} (${t.pricing}; best for: ${t.bestFor})`).join('; ')}.`,
      },
      {
        q: `Where did Vibe Ranked verify pricing for ${picks.map((p) => p.name).join(' and ')}?`,
        a: `${picks.map((p) => `${p.name}: ${p.verifiedSource}.`).join(' ')} Last verified ${data.lastVerified}.`,
      },
    ];
    list.push({
      slug: guide.slug,
      path,
      url: `${SITE}${path}`,
      title: `${guide.headline} (${year}) | Vibe Ranked`,
      description: descriptionFor(guide.headline, category, picks),
      headline: guide.headline,
      question: guide.question,
      category,
      picks,
      tools: category.tools,
      quotes: guide.quotes,
      answer,
      faqs,
    });
  }
  cached = list;
  return list;
}

export function guidesForCategory(categorySlug) {
  return getGuides().filter((g) => g.category.slug === categorySlug);
}

export function guidesFeaturing(toolSlug) {
  return getGuides().filter((g) => g.picks.some((p) => p.slug === toolSlug));
}
