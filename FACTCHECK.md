# Fact-check log — Vibe Ranked

**Last verified:** 2026-10-19 (spot-check: Cursor + Claude Code pricing refreshed; full pass was 2026-10-17).

Method: every tool URL was requested (redirects/dead links fixed), then the official site or pricing page was fetched (or, when the page blocks bots / renders prices with JavaScript, the vendor's own docs or a dated Oct 2026 search result). Each tool now has a `pricingNote` (free tier / starting price) and a `verifiedSource` field. Where a price couldn't be confirmed, the note is kept general.

Pricing badge rule: `free` = free/open source; `freemium` = ongoing free tier + paid plans; `paid` = no ongoing free tier (trials/one-time credits don't count).

## Substantive changes

| Tool | What changed | Source |
|---|---|---|
| Claude Code | URL updated (anthropic.com/claude-code redirects to claude.com/product/claude-code); url: "https://www.anthropic.com/claude-code" → "https://claude.com/product/claude-code" | https://claude.com/pricing |
| OpenAI Codex | Pricing free→freemium tier: Codex is now available on ChatGPT Free and Go ($8/mo); description adds desktop app; pricing: "paid" → "freemium" | https://learn.chatgpt.com/docs/pricing |
| Devin Desktop (formerly Windsurf) | Renamed: Windsurf became Devin Desktop (Cognition, June 2, 2026); windsurf.com redirects to devin.ai/desktop. Cascade was replaced by Devin Local, so description rewritten; name: "Windsurf" → "Devin Desktop (formerly Windsurf)"; url: "https://windsurf.com" → "https://devin.ai/desktop" | https://devin.ai/pricing |
| Firebase Studio | REMOVED: Google is sunsetting Firebase Studio (new workspaces/signups disabled since Jun 22, 2026; shutdown Mar 22, 2027). | https://firebase.google.com/docs/studio/migrating-project |
| Google AI Studio | ADDED in Firebase Studio's slot (#6 App Builders): Google's official migration path; Build mode generates full-stack apps. | https://ai.google.dev/gemini-api/docs/aistudio-build-mode |
| Anything (formerly Create) | Renamed: Create (create.xyz) is now Anything; URL moved to anything.com. Description updated (web + mobile apps with built-in backend); name: "Create" → "Anything (formerly Create)"; url: "https://www.create.xyz" → "https://www.anything.com" | https://www.anything.com/pricing |
| Google Veo (Flow) | Pricing paid→freemium (Flow now gives eligible accounts 50 free daily credits); URL updated (labs.google/flow redirects to flow.google.com); pricing: "paid" → "freemium"; url: "https://labs.google/flow" → "https://flow.google.com" | https://support.google.com/flow/answer/16526234 |
| Sora | REMOVED: OpenAI discontinued the Sora web/mobile apps on Apr 26, 2026 and the Sora API on Sep 24, 2026. Video ranks below re-numbered. | https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation |
| Runway | URL updated (runwayml.com redirects to runway.com); url: "https://runwayml.com" → "https://runway.com" | https://runway.com/pricing |
| Kling AI | URL updated (klingai.com redirects to kling.ai); exact paid prices not shown on the JS-rendered page, so kept general; url: "https://klingai.com" → "https://kling.ai" | https://kling.ai |
| Luma Dream Machine | Pricing freemium→paid (pricing page lists only paid plans: Plus/Pro/Ultra); pricing: "freemium" → "paid" | https://lumalabs.ai/pricing |
| Hailuo AI | Pricing freemium→paid (no recurring free credits, only a one-time trial grant per third-party Oct 2026 checks); price kept general; pricing: "freemium" → "paid" | https://hailuoai.video/subscribe |
| OpenAI Realtime API | URL updated (platform.openai.com docs redirect to developers.openai.com); url: "https://platform.openai.com/docs/guides/realtime" → "https://developers.openai.com/api/docs/guides/realtime" | https://developers.openai.com/api/docs/pricing |
| Cartesia | URL normalized to www.cartesia.ai (cartesia.ai redirects); url: "https://cartesia.ai" → "https://www.cartesia.ai" | https://www.cartesia.ai/pricing |
| Hume AI | Could not verify current prices: Hume removed its public pricing page (hume.ai/pricing now goes to the homepage); kept general | https://www.hume.ai |
| Anthropic API | URL updated (anthropic.com/api redirects to claude.com/platform/api); url: "https://www.anthropic.com/api" → "https://claude.com/platform/api" | https://claude.com/platform/api |
| Claude Agent SDK | URL updated (docs.claude.com redirects to code.claude.com/docs); url: "https://docs.claude.com/en/api/agent-sdk/overview" → "https://code.claude.com/docs/en/agent-sdk/overview" | https://code.claude.com/docs/en/agent-sdk/overview |
| CrewAI | URL normalized to crewai.com (www redirects); url: "https://www.crewai.com" → "https://crewai.com" | https://crewai.com/pricing |
| Pydantic AI | URL updated (ai.pydantic.dev redirects to pydantic.dev/docs/ai); url: "https://ai.pydantic.dev" → "https://pydantic.dev/docs/ai/overview/" | https://pydantic.dev/docs/ai/overview/ |
| Railway | Pricing paid→freemium (pricing page now lists a $0 Free plan after a 30-day trial); pricing: "paid" → "freemium" | https://railway.com/pricing |
| Cursor | Pricing note updated for X Subscription ladder (Plus $8 Grok-only; Premium $30 / Super $100 / Ultra $200; Teams from $30/user; 3P models API-priced on Premium+) | https://cursor.com/pricing |
| Claude Code | Max pricing note adds bundled $100–$200/mo API credits | https://claude.com/pricing |

## Could not fully verify

- **Hume AI** — public pricing page removed (hume.ai/pricing redirects to the homepage); note kept as "Free tier + paid plans".
- **Kling AI** — pricing page renders client-side; free Basic plan confirmed, paid prices kept general.
- **Hailuo AI** — subscription page renders client-side; "no recurring free tier" is from dated third-party checks (Oct 2026); price kept general.
- **OpenAI pages (openai.com/codex, chatgpt.com, platform.openai.com)** and **Midjourney / Ideogram / Leonardo** return 403 to automated fetches; verified via official docs/help pages and search snapshots instead. These URLs work in a browser.
- **Google Gemini API (ai.google.dev)** bounces automated clients through a Google sign-in check; URL is correct in a browser.

## All tools — pricing as verified

| Category | # | Tool | Badge | Pricing note | Source |
|---|---|---|---|---|---|
| AI Coding Editors & Agents | 1 | [Cursor](https://cursor.com) | freemium | Free; Plus $8 (Grok only); Premium $30; Super $100; Ultra $200; Teams from $30/user; 3P models API-priced on Premium+ | https://cursor.com/pricing |
| AI Coding Editors & Agents | 2 | [Claude Code](https://claude.com/product/claude-code) | paid | Included with Claude Pro ($20/mo, $17/mo billed annually) and Max (from $100/mo, includes $100–$200/mo API credits); or pay via API | https://claude.com/pricing |
| AI Coding Editors & Agents | 3 | [OpenAI Codex](https://openai.com/codex/) | freemium | Included in ChatGPT plans, including a limited Free tier; Plus $20/mo, Pro from $100/mo; or API key | https://learn.chatgpt.com/docs/pricing |
| AI Coding Editors & Agents | 4 | [GitHub Copilot](https://github.com/features/copilot) | freemium | Free plan; Pro $10/mo, Pro+ $39/mo, Max $100/mo | https://github.com/features/copilot/plans |
| AI Coding Editors & Agents | 5 | [Devin Desktop (formerly Windsurf)](https://devin.ai/desktop) | freemium | Free plan; Pro $20/mo, Max $200/mo, Teams $80/mo + $40/seat | https://devin.ai/pricing |
| AI Coding Editors & Agents | 6 | [Google Antigravity](https://antigravity.google) | freemium | Free individual plan; higher limits with Google AI Pro/Ultra | https://antigravity.google/pricing |
| AI Coding Editors & Agents | 7 | [Cline](https://cline.bot) | free | Free and open source; pay only for model inference (or bring your own key) | https://cline.bot/pricing |
| AI Coding Editors & Agents | 8 | [Aider](https://aider.chat) | free | Free and open source; bring your own model API keys | https://aider.chat |
| AI Coding Editors & Agents | 9 | [Zed](https://zed.dev) | freemium | Free editor (BYO keys/agents); Pro $10/mo with hosted AI | https://zed.dev/pricing |
| App Builders (Vibe Coding Platforms) | 1 | [Lovable](https://lovable.dev) | freemium | Free plan (5 daily credits); Pro from $25/mo | https://docs.lovable.dev/introduction/subscription-plans |
| App Builders (Vibe Coding Platforms) | 2 | [Bolt.new](https://bolt.new) | freemium | Free plan (1M tokens/mo); Pro $25/mo | https://bolt.new/pricing |
| App Builders (Vibe Coding Platforms) | 3 | [v0](https://v0.app) | freemium | Free plan; Plus $30/user/mo | https://v0.app/pricing |
| App Builders (Vibe Coding Platforms) | 4 | [Replit](https://replit.com) | freemium | Free Starter plan; Core $20/mo ($18/mo billed annually) | https://replit.com/pricing |
| App Builders (Vibe Coding Platforms) | 5 | [Base44](https://base44.com) | freemium | Free plan; paid from $16/mo billed annually | https://base44.com/pricing |
| App Builders (Vibe Coding Platforms) | 6 | [Google AI Studio](https://aistudio.google.com) | freemium | Free to use in AI Studio; paid Gemini API/Cloud usage for higher limits and deployment | https://ai.google.dev/gemini-api/docs/aistudio-build-mode |
| App Builders (Vibe Coding Platforms) | 7 | [Anything (formerly Create)](https://www.anything.com) | freemium | Free plan; Pro from $19/mo | https://www.anything.com/pricing |
| Image Generation | 1 | [Midjourney](https://www.midjourney.com) | paid | No free plan; Basic $10/mo ($8/mo billed annually) | https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans |
| Image Generation | 2 | [GPT Image (ChatGPT)](https://chatgpt.com) | freemium | Limited free image creation in ChatGPT; Go $8/mo, Plus $20/mo; API billed per use | https://chatgpt.com/pricing/ |
| Image Generation | 3 | [Nano Banana (Gemini)](https://gemini.google.com) | freemium | Free in the Gemini app; Google AI Plus $4.99/mo, AI Pro $19.99/mo for higher limits | https://gemini.google/subscriptions/ |
| Image Generation | 4 | [Ideogram](https://ideogram.ai) | freemium | Free plan (30 credits/week); Plus $20/mo ($15/mo billed annually) | https://docs.ideogram.ai/plans-and-billing/available-plans |
| Image Generation | 5 | [Black Forest Labs FLUX](https://bfl.ai) | freemium | Pay-per-image API (no subscription); open-weight models available to self-host (license varies) | https://bfl.ai/pricing |
| Image Generation | 6 | [Recraft](https://www.recraft.ai) | freemium | Free plan (daily credits, public, non-commercial); Basic $12/mo ($10/mo billed annually) | https://www.recraft.ai/docs/plans-and-billing/paid-plans |
| Image Generation | 7 | [Leonardo.Ai](https://leonardo.ai) | freemium | Free plan (150 tokens/day); Essential $12/mo ($10/mo billed annually) | https://www.leonardo.ai/pricing |
| Video Generation | 1 | [Google Veo (Flow)](https://flow.google.com) | freemium | Free daily credits (50/day); more with Google AI Pro $19.99/mo or Ultra | https://support.google.com/flow/answer/16526234 |
| Video Generation | 2 | [Runway](https://runway.com) | freemium | Free plan (125 one-time credits); Standard $15/mo ($12/mo billed annually) | https://runway.com/pricing |
| Video Generation | 3 | [Kling AI](https://kling.ai) | freemium | Free basic plan + paid plans | https://kling.ai |
| Video Generation | 4 | [Luma Dream Machine](https://lumalabs.ai) | paid | No ongoing free plan; Plus $30/mo ($25/mo billed annually) | https://lumalabs.ai/pricing |
| Video Generation | 5 | [Pika](https://pika.art) | freemium | Free plan; Starter $10/mo | https://pika.art/pricing |
| Video Generation | 6 | [Hailuo AI](https://hailuoai.video) | paid | Paid plans; one-time free trial credits for new users | https://hailuoai.video/subscribe |
| Voice & Audio | 1 | [ElevenLabs](https://elevenlabs.io) | freemium | Free plan (10k credits/mo); Starter $6/mo | https://elevenlabs.io/pricing |
| Voice & Audio | 2 | [OpenAI Realtime API](https://developers.openai.com/api/docs/guides/realtime) | paid | Usage-based API pricing (per audio token) | https://developers.openai.com/api/docs/pricing |
| Voice & Audio | 3 | [Vapi](https://vapi.ai) | paid | Pay-as-you-go per minute; $5 free credits to start; Core $29/mo | https://vapi.ai/pricing |
| Voice & Audio | 4 | [Cartesia](https://www.cartesia.ai) | freemium | Free plan (20K credits/mo); Pro $5/mo | https://www.cartesia.ai/pricing |
| Voice & Audio | 5 | [Deepgram](https://deepgram.com) | freemium | $200 free credit, then pay-as-you-go | https://deepgram.com/pricing |
| Voice & Audio | 6 | [Suno](https://suno.com) | freemium | Free plan (50 credits/day); Pro from $8/mo billed annually | https://suno.com/pricing |
| Voice & Audio | 7 | [Hume AI](https://www.hume.ai) | freemium | Free tier + paid plans | https://www.hume.ai |
| LLM APIs | 1 | [Anthropic API](https://claude.com/platform/api) | paid | Pay-as-you-go per token (e.g. Sonnet 5.5 $2/$10 per MTok in/out) | https://claude.com/platform/api |
| LLM APIs | 2 | [OpenAI API](https://platform.openai.com) | paid | Pay-as-you-go per token | https://developers.openai.com/api/docs/pricing |
| LLM APIs | 3 | [Google Gemini API](https://ai.google.dev) | freemium | Free tier with rate limits in AI Studio; pay-as-you-go for higher limits | https://ai.google.dev/gemini-api/docs/pricing |
| LLM APIs | 4 | [OpenRouter](https://openrouter.ai) | freemium | Free models (rate-limited) + pay-as-you-go credits | https://openrouter.ai/pricing |
| LLM APIs | 5 | [xAI API](https://x.ai/api) | paid | Usage-based; from $2 per 1M input tokens | https://x.ai/api |
| LLM APIs | 6 | [Groq](https://groq.com) | freemium | Free tier (rate-limited); pay-as-you-go Developer tier | https://console.groq.com/docs/billing-faqs |
| LLM APIs | 7 | [Mistral AI](https://mistral.ai) | freemium | Free plan (Le Chat/Vibe); Pro and pay-as-you-go API | https://mistral.ai/pricing |
| LLM APIs | 8 | [Together AI](https://www.together.ai) | paid | Pay-as-you-go per token | https://www.together.ai/pricing |
| Agent Frameworks | 1 | [Vercel AI SDK](https://ai-sdk.dev) | free | Free, open source | https://ai-sdk.dev |
| Agent Frameworks | 2 | [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) | free | Free, open source (pay for model usage) | https://openai.github.io/openai-agents-python/ |
| Agent Frameworks | 3 | [Claude Agent SDK](https://code.claude.com/docs/en/agent-sdk/overview) | free | Free SDK (pay for Claude API usage) | https://code.claude.com/docs/en/agent-sdk/overview |
| Agent Frameworks | 4 | [LangGraph](https://www.langchain.com/langgraph) | free | Free, open source (MIT); LangSmith platform is paid | https://www.langchain.com/langgraph |
| Agent Frameworks | 5 | [Mastra](https://mastra.ai) | free | Free, open source (Apache 2.0); enterprise features separately licensed | https://mastra.ai |
| Agent Frameworks | 6 | [CrewAI](https://crewai.com) | freemium | Open-source framework; hosted platform free tier (50 executions/mo) + enterprise | https://crewai.com/pricing |
| Agent Frameworks | 7 | [Pydantic AI](https://pydantic.dev/docs/ai/overview/) | free | Free, open source | https://pydantic.dev/docs/ai/overview/ |
| Agent Frameworks | 8 | [LlamaIndex](https://www.llamaindex.ai) | freemium | Open-source framework; LlamaCloud free plan (10K credits), Starter $50/mo | https://www.llamaindex.ai/pricing |
| Deployment & Backend | 1 | [Vercel](https://vercel.com) | freemium | Free Hobby plan; Pro $20/mo | https://vercel.com/pricing |
| Deployment & Backend | 2 | [Supabase](https://supabase.com) | freemium | Free plan (2 projects); Pro from $25/mo | https://supabase.com/pricing |
| Deployment & Backend | 3 | [Cloudflare](https://www.cloudflare.com/developer-platform/) | freemium | Generous free plan; Workers Paid from $5/mo | https://developers.cloudflare.com/workers/platform/pricing/ |
| Deployment & Backend | 4 | [Netlify](https://www.netlify.com) | freemium | Free plan; Personal $9/mo, Pro $20/mo | https://www.netlify.com/pricing/ |
| Deployment & Backend | 5 | [Convex](https://www.convex.dev) | freemium | Free plan; Professional $25/developer/mo | https://www.convex.dev/pricing |
| Deployment & Backend | 6 | [Railway](https://railway.com) | freemium | Free trial ($5 credits) and limited free plan; Hobby $5/mo minimum usage | https://railway.com/pricing |
| Deployment & Backend | 7 | [Clerk](https://clerk.com) | freemium | Free Hobby plan (50K monthly retained users); Pro $20/mo billed annually | https://clerk.com/pricing |
| Deployment & Backend | 8 | [Neon](https://neon.com) | freemium | Free plan; usage-based paid plans | https://neon.com/pricing |
