# Vibe Ranked releases log

Running log of feed additions and listing fixes for the weekly CEO report. Newest first.

## 2026-10-22 (daily release scan)

### Releases feed
- **Added:** Google Cloud Agent Compute Engine (2026-10-22) — purpose-built, hardware-isolated microVM runtime for AI agents (fast boot, pause/resume, per-agent identity) announced at AGNTCon + MCPCon; preview "in the coming months", plus expanded agent governance. Official: [Google Cloud blog](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance).
- **Added:** Anthropic Claude Duet research preview (2026-10-21) — standalone proactive agent app (iOS, Android, claude.ai) running on Claude Opus 5.5 with its own cloud VM/browser; waitlist for US Pro and Max, uses plan limits. Official: [Claude](https://claude.com/resources/articles/claude-duet), [help center](https://support.claude.com/en/articles/17631495-get-started-with-claude-duet); date confirmed by CNBC (Wed Oct 21).
- **Added:** Recursive Flint (2026-10-21) — 40B-total / 2.5B-active MoE local coding model, Apache 2.0 weights on Hugging Face, 125+ tok/s on M4 Pro MacBook Pro, up to 512k context; works with llama.cpp, Ollama, LM Studio, vLLM, SGLang. Official: [Recursive](https://recursive.com/updates/introducing-recursive-flint), [HF](https://huggingface.co/RecursiveSI/flint); date confirmed by TechCrunch (Oct 21).

### Ranking slots
- No new ranking tools. Claude Duet is a personal-agent app (not a builder tool category); Flint is a model, not a directory product.

### Listing fixes
- **Replit:** Pricing note updated: [replit.com/pricing](https://replit.com/pricing) now lists only Core ($20/mo, $18/mo annual), Pro ($100/mo, $90/mo annual) and Enterprise; the free Starter tier is gone from the pricing page, though [Replit docs](https://docs.replit.com/help/pricing-and-plans) still describe Starter as free. Kept `freemium`, note reflects both.

### Scanned but not added (out of window, already listed, misdated, or niche)
- Qwen3.6-27B (LLM Gateway lists Oct 21, but official HF card/blog date it April 2026)
- Meta Muse Code "launch" (GMT Eight Oct 22 item is stale; Muse Code launched Aug 5 and left beta Aug 31, 2026)
- Mistral Large 4 (already in feed, Oct 6 preview); Muse Spark Open (already in feed)
- DeepSeek DeepInfer inference framework (Oct 20; infra niche)
- NVIDIA Nemotron 3.5 retriever/Kumo/Cosmos 3.5 (Oct 21; enterprise/infra), Vercel Labs fx open-source coverage (announced Aug), Perplexity local Computer agent on Mac, Bria Fibo 2.0, Base Labs Mammoth-1/Elephant-1, Gradium Phonon TTS, Breken, HF Carbon-X
- Rumored Kimi K3.1 ("Kibitz") / Qwen 4 ("Kalmia") on Arena: unconfirmed, watch for official launches

### Shutdown / rename watch
- No shutdowns or renames among listed tools. Cross-checked a third-party price-change log against our notes: Bolt (Pro $25, Lite closed to new sign-ups Oct 14, not listed), Cursor, Copilot, v0, Devin Desktop, ElevenLabs Starter $6 all still accurate. Antigravity free tier loses Claude 4.6/GPT-OSS models Nov 2 (prices unchanged; note still accurate).

## 2026-10-21 (daily release scan)

### Releases feed
- **Added:** OpenAI models + Codex on Google Cloud (2026-10-21) — GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna rolling out in private preview to select enterprise customers in Google Cloud Model Garden, purchasable via Google Cloud Marketplace; Codex CLI/Desktop can connect to Google Cloud for inference. Official: [OpenAI](https://openai.com/index/openai-models-google-cloud), confirmed by [Google Cloud blog](https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers).
- **Added:** Mistral Voxtral 3 (2026-10-20) — Mini/Small Transcribe 3 (50+ languages, diarization, context biasing), Mini Transcribe Realtime 3, Voxtral TTS 3, plus a voice agent SDK; Mini transcription $0.0035/min, Small $0.004/min (public preview). Official: [Mistral](https://mistral.ai/news/voxtral-3/), dates confirmed on [Mistral docs](https://docs.mistral.ai/models/voxtral-small-transcribe-3-0).
- **Added:** OpenAI API 12-hour prompt caching (2026-10-20) — Responses API option to keep shared instructions/tools/context cached for 12h; 12h cache writes cost 2.5x input. Official: [OpenAI API changelog](https://developers.openai.com/api/docs/changelog).
- **Added:** Vercel `durable-harness` (2026-10-19 blog; announced on X Oct 20) — open-source adapters that make Pi, OpenCode, Codex and Claude Code agent sessions survive crashes/timeouts on Vercel, Postgres or local. Official: [Vercel blog](https://vercel.com/blog/making-every-harness-durable).
- **Added (catch-up):** Kling 4.0 (2026-10-15) — up to 30s single-pass video, Omni Reference with up to 15 assets and 10 keyframes, Kling MCP/CLI; API for enterprises/devs "soon". Missed by earlier scans; added because Kling is a ranked tool. Official: [Kuaishou IR release](https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-officially-launches-next-generation-kling-40-raising/).

### Ranking slots
- No new ranking tools. Video category still full (Veo, Runway, Kling, Luma, Pika, Hailuo).

### Listing fixes
- **Kling AI:** Description now mentions Kling 4.0's 30-second single-pass clips (per Kuaishou release). Pricing note unchanged.

### Scanned but not added (unverifiable date, niche, or not builder tooling)
- Ornith-1.5-122B open coding model (MIT) — HF repo created Oct 16, X coverage says Oct 20; no official dated announcement, skipped
- vLLM TorchTPU / SGLang on TPU (Oct 20; infra niche)
- AWS Polly Generative upgrade (Oct 20; niche)
- Anthropic Claude Platform notes (inference hooks GA for Enterprise, user profiles; Oct 20) and attack-surface research post
- GitHub Copilot CLI 1.0.101 (patch); Copilot model deprecations Oct 19
- Vercel WebSockets GA (Oct 20), FastH3 Omni open video (Hao AI Lab), Beacon (Asymptote Labs), Humans& Ampersand, Runway on Claude Marketplace, Lovable referral credits
- Earlier Oct 15 drops not added: FLUX 3 Image Klein, Krea 3, ElevenLabs Instant Soundtracks

### Shutdown / rename watch
- No shutdowns or renames among listed tools. Spot-checked GitHub Copilot plans (Free / Pro $10 / Pro+ $39 / Max $100, unchanged) and Bolt (Free 1M tokens/mo; Pro $25/mo, $18/mo billed annually, still accurate).

## 2026-10-20 (daily release scan)

### Releases feed
- **Added:** MiniMax M3.1 Flash GA (2026-10-19) — agentic/coding/computer-use model, ~3x faster inference, 70% lower agentic task cost vs M3; $0.15 in / $0.60 out / $0.015 cached per 1M tokens; on MiniMax API, M Plan, MiniMax Code (weights later). Official: [MiniMax blog](https://www.minimax.io/blog/minimax-m31f), pricing confirmed on [platform docs](https://platform.minimax.io/docs/pricing/overview).
- **Added:** Inception Mercury 3 (2026-10-19) — diffusion LLM, 1,068 tok/s, 1M context; $0.20/$0.70 per 1M (50% off at launch); on Inception API, OpenRouter, Baseten, Vercel. Official: [Inception blog](https://www.inceptionlabs.ai/blog/introducing-mercury-3).
- **Added:** OpenAI low-resource languages post (2026-10-19) — GPT-6 Astra 87.4% avg on new open-sourced MultiLangBench (20 languages), GPT-6.1 Sol up to 97.9% on COBOL migration (OpenAI-reported). Official: [OpenAI](https://openai.com/index/low-resource-programming-languages).
- **Added:** Meta Muse Glimmer 30B (2026-10-19) — open-source (Apache 2.0) on-device agentic model, ~4-bit, single-GPU. Official: [Meta AI research](https://ai.meta.com/research/publications/muse-glimmer-30b-an-on-device-agentic-model/).

### Ranking slots
- No new ranking tools. Considered Meta Muse Code (terminal coding agent, $5–$200/mo plans) but it launched Aug 2026, not new; a candidate for a future Coding Agents review rather than a release-scan add.

### Listing fixes
- **Lovable:** Free plan note now reflects the 30/month cap on daily build credits per [Lovable docs](https://docs.lovable.dev/introduction/subscription-plans) (Pro still from $25/mo).

### Scanned but not added (out of window, incremental, or already accurate)
- NVIDIA Nemotron 3.5 Super VL + Bolt (official date Oct 15; out of window)
- Vercel Shop GA (Shopify storefront template; niche)
- Mistral Timestral time-series models, CERN partnership (not builder-tooling)
- Mintlify Autopilot docs agent beta (niche)
- v0 Plus / Replit Starter+Core / Runway Standard notes still accurate (Runway Unlimited ending Nov 30 does not affect listed price)

### Shutdown / rename watch
- No shutdowns or renames among listed tools in this window.

## 2026-10-19 (daily release scan)

### Releases feed
- **Added:** DeepSeek V4.1-Flash-1017 open weights (2026-10-17) — MIT-licensed MoE update with stronger coding/agentic scores; live on DeepSeek API as `deepseek-flash`. Official: [Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), confirmed via DeepSeek `@deepseek_ai` announcement and [API docs](https://api-docs.deepseek.com/updates).

### Ranking slots
- No new ranking tools. Video category already filled after prior Sora removal (Veo → Hailuo). DeepSeek remains a model/API update, not a new directory product.

### Listing fixes
- **Cursor:** Pricing note updated for The X Subscription ladder on [cursor.com/pricing](https://cursor.com/pricing) — Free; Plus $8 (Grok only); Premium $30; Super $100; Ultra $200; Teams from $30/user; third-party models at API list price on Premium+.
- **Claude Code:** Max note now mentions bundled $100–$200/mo API credits per [claude.com/pricing](https://claude.com/pricing).

### Scanned but not added (out of window, incremental, or already listed)
- Gemini 4 Argon (already in feed, GA Oct 13)
- Meta Muse Spark Open (already in feed, Oct 15)
- OpenAI GPT-Live prompt-to-voice (Oct 16 release notes; feature update)
- Cursor Cloud Agent Canvases (changelog; feature update)
- Claude Code / Agent SDK patch bumps (reliability only)
- Pika $25 credit pack restore (packaging; Starter $10 free-tier note still accurate)

### Shutdown / rename watch
- No new shutdowns or renames among listed tools in this window (Sora / Windsurf→Devin Desktop / Create→Anything already handled earlier).

## 2026-10-23 (daily release scan)

### Releases feed
- **Added:** Ideogram Vector 1.0 (2026-10-22) — editable SVGs from text or images, app + API ($0.10–$0.32 per SVG). Official: [Ideogram Vector](https://ideogram.ai/models/vector/), announced by @ideogram_ai.
- **Added:** Canva Craft (2026-10-22) — Canva's first in-house image model, 2K, 30+ aspect ratios, all users + public API. Official: [Canva Newsroom](https://www.canva.com/newsroom/news/canva-craft/).
- **Added:** OpenAI Decisions API GA (2026-10-22) — GPT-6 Luna, $0.10/1M input, no output charges, 400 questions/request. Official: [OpenAI](https://openai.com/index/decisions-api/) and API changelog.
- **Added:** Agent Skills donated to the Agentic AI Foundation (2026-10-22). Official: [Anthropic](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation).
- **Added:** Microsoft Copilot Code rollout (2026-10-21, Frontier preview) — prompt-to-app builder inside Microsoft Copilot. Official: [Microsoft Copilot blog](https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/copilot-code-make-the-power-of-coding-accessible-to-everyone/4562358).

### Ranking slots
- No new ranking tools. Copilot Code is enterprise-only (M365 Copilot license + Frontier), so not a fit for the App Builders ranking yet; revisit at GA. Video category already full.

### Listing fixes
- **Ideogram:** description now mentions editable SVG vector output.

### Scanned but not added (out of window, incremental, or not builder tooling)
- Claude Code Review GA (official date Oct 15; out of window)
- HeyGen Video 1 (launched Sep 30; out of window)
- MiniMax M3.1 Flash open weights (already in feed as Oct 19 GA)
- Gemini API CLI preview (Google post dated Oct 19; experimental, unsupported)
- Claude apps auto mode default next week, Ling 3.1 Flash 1019 (no weights/API), Kimi K3.1 teaser (unconfirmed), Carbon-X DNA model, You.com Inference Router (contact sales)
- Antigravity free tier loses Claude 4.6/GPT-OSS on Nov 2 (prices unchanged; listing note still accurate)

### Shutdown / rename watch
- Arc browser shutting down Dec 22 and Zeabur winding down — neither is listed. No listed tool shut down or renamed.

## 2026-10-26 (daily release scan, covering Oct 23–26)

### Releases feed
- **Added:** Nanbeige4.3-33B (2026-10-24) — Apache 2.0 open weights, 33B agentic coding model, 512K context; self-reported 80.9 Terminal-Bench 2.1. Official: [Hugging Face](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) (created 2026-10-24 02:49 UTC).
- **Added:** Kimi K3.1 Pro (2026-10-23) — 3T-class, 1M context, $2/$10 per 1M tokens (Highspeed $4/$20), open weights due by Nov 4. Official: [Kimi API docs](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart), Moonshot forum announcement.
- **Added:** Replit Monitoring Agent (2026-10-23) — autonomous production triage + validated fixes, optional auto-republish. Official: [Replit changelog](https://docs.replit.com/updates/2026/10/23/changelog).
- **Added:** OpenAI Agents API scheduled automations (2026-10-23, beta) — cron/one-time schedules, agents can manage their own. Official: [OpenAI docs](https://developers.openai.com/api/docs/guides/agents-api/sessions/automations) and OpenAI community announcement.

### Ranking slots
- No new ranking tools. Video category is full; Seedance 2.5 4K is enterprise-only with no API yet, LTX-2.5 has no stated release date.

### Listing fixes
- **Bolt.new:** pricing note now includes Pro $18/mo billed yearly (verified on [bolt.new/pricing](https://bolt.new/pricing)); Free 1M tokens/mo still accurate.

### Scanned but not added (incremental, out of window, or not verifiable)
- Claude Code 2.1.310 (fixes), Claude desktop redesign, Vercel CLI budgets/feedback, Vercel Kimi K3.1 on AI Gateway, NVIDIA Nemotron 3.5 Bolt (date unclear), GPT-6.1 Terra (leak only), Theo's tstack (community skills), Sume API, Seedance 2.5 4K (enterprise-only).

### Shutdown / rename watch
- Google shut down the Veo 3.1 preview endpoints in the Gemini API on Oct 22; our Veo listing is Flow-based (50 free credits/day still accurate), so no change. Replit pricing page still omits the free Starter tier (note accurate). No listed tool shut down or renamed.

## 2026-10-27 (daily release scan, covering Oct 25–27)

### Releases feed
- **Added:** OpenAI GPT-6.1 Terra (2026-10-26) — fast computer-use/visual-reasoning model, 50.3% Terminal-Bench 4.0 at max effort, $1 in / $0.05 cached / $5 out per 1M tokens; in ChatGPT Work + Codex (Plus/Pro/Enterprise/Edu) and API as `gpt-6.1-terra`. Official: [OpenAI](https://openai.com/index/introducing-gpt-6-1-terra), date confirmed on the [OpenAI API changelog](https://developers.openai.com/api/docs/changelog) (Oct 26).
- **Added:** Runway App Studio (2026-10-26) — prompt-to-app builder for creative tools on Runway's image/video/audio models; included in all paid plans, uses existing credits. Official: [Runway](https://runway.com/news/company-news/introducing-runway-app-studio).
- **Added:** Entire agent-first Git forge (2026-10-26) — Trails (agent-scored evals instead of PRs), Continuous Memory, Buildkite/Depot CI; available to every developer. Official: [Entire](https://entire.com/news/entire-launches-an-independent-git-forge-for-agent-human-collaboration).
- **Backfilled (missed earlier):** Cursor Agent SDK GA (2026-10-20; SDK changelog lists 0.3.0 GA on Oct 23). Official: [Cursor blog](https://cursor.com/blog/agent-sdk).
- **Backfilled (missed earlier):** ElevenLabs Eleven Realtime v1 Mini/Max (2026-10-20) — speech-to-speech agent models, 90+ languages, OpenAI Realtime API-compatible. Official: [ElevenLabs](https://elevenlabs.io/blog/realtime).

### Ranking slots
- No new ranking tools. Video candidates checked: FLUX 3 Max by fal (Oct 19, API-only, promo pricing), LTX-2.5 (Aug 11, open weights), Kling 4.0 (already listed); none clearly beats the current six on verified consumer access/pricing. Fern 0.1 (Mirendil, Oct 26) has no public access or pricing yet.

### Listing fixes
- None needed. Runway Standard $15/mo and App Studio-in-paid-plans consistent; Cursor, ElevenLabs, OpenAI notes still accurate.

### Scanned but not added (incremental, out of window, or not verifiable)
- Mirendil Fern 0.1 (10M context, "coming soon" access), Bito Governor model router, Google EGM plugin, Microsoft Scope benchmark, Copilot assisted permissions GA (Oct 26) + Copilot CLI v1.0.104, Vercel custom monitors / Agent alert validation (Oct 26), Krea 3 and Kling 4.0 (Oct 15), FLUX 3 Max (Oct 19), Eleven v4 (Sep 28), Ling-3.1-flash-1019, Riverside Agents, Pomerado, Claude Enterprise unified Chat+Cowork.

### Shutdown / rename watch
- Gemini API (Oct 26): new paid-tier projects using generateContent now store requests by default (`store=true`); opt out per request or in Logs settings. No listing change. No listed tool shut down or renamed.

## 2026-10-28 (daily release scan, covering Oct 26–28)

### Releases feed
- **Added:** DiffuSpace Clover-35B-A3B-Preview (2026-10-28) — Apache 2.0 open-weight diffusion LLM (35B MoE, ~3B active, 128K context), derived from Qwen3.6-35B-A3B; self-reported 73.6 SWE-bench Verified, 51.7 Terminal-Bench 2.1, 680 tok/s on one GB300. Only a Transformers path (~69 GB GPU) works today. Official: [Hugging Face](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview), [DiffuSpace blog](https://diffuspace.ai/blog/clover-35b/).
- **Added:** Replit Cloud Agents for existing repos (2026-10-27) — plain-language changes to GitHub/GitLab repos with live preview, tested PR/MR plus video; Pro & Enterprise; Slack integration for all. Official: [Replit blog](https://replit.com/blog/anyone-can-bring-ideas-to-company-codebase).
- **Added:** Liquid AI LFM3 (2026-10-27) — six open-weight ~2B models (text, VL with video, audio, omni, d1 decision) on LFM3-1.7B-Base; single-GPU fine-tuning, on-device. Official: [Hugging Face blog](https://huggingface.co/blog/LiquidAI/lfm3).

### Ranking slots
- No new ranking tools. MAI Image 2.7 (Oct 27) is an editing preview only on Arena/Artificial Analysis/MAI Playground; Genie 4 (Oct 27) is trusted-tester research preview only.

### Listing fixes
- None needed. Replit listing (Core $20/mo, Pro $100/mo) consistent; Cloud Agents sit in Pro/Enterprise.

### Scanned but not added (incremental, out of window, or not verifiable)
- Google Genie 4 (research preview), Gemini Robotics ER 2 (enterprise robotics preview), MAI Image 2.7 (editing preview), Gemini 4 Argon in Antigravity (Oct 13, already listed), Judgment Labs GA, Neywa Labs Nativ, GLM-5.5-Flash (unconfirmed listing), Claude Code 2.1.312, Codex CLI 0.165.0, Copilot CLI 1.0.105, Gemini CLI 0.66.0, Amp Android app, OpenCode 2.2.0, MiniMax M3.1 Flash GGUFs, Ling-3.1-flash-1019 (already skipped).

### Shutdown / rename watch
- No listed tool shut down, renamed, or changed pricing in this window.

## 2026-10-29 (daily release scan, covering Oct 27–29)

### Releases feed
- **Added:** Google DeepMind Gemini 4 Carbon (2026-10-28) — new frontier model, #1 on Artificial Analysis Intelligence Index v5 (59); coding, long-horizon agentic and cybersecurity gains (SEC-bench Pro 88.2%). Initially limited to cyber defenders via the Fairwind Program; developer/consumer access "soon" at intro $2/$10 per 1M tokens (later $4/$20). Official: [Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/).
- **Added:** GitHub Copilot Fusion GA (2026-10-28) — Standard/High/Max effort model routing and orchestration (single, cascade, critique); all Copilot plans; billed per model used, 30% discount for a limited time. Official: [GitHub changelog](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/).
- **Added:** GitHub Copilot app Projects, public preview (2026-10-28) — multi-repo parallel agent work with shared context; computer use public preview. Official: [GitHub changelog](https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases/).
- **Added:** Vercel CI beta (2026-10-28) — Turborepo-driven affected-task CI on per-task compute, all plans. Official: [Vercel blog](https://vercel.com/blog/introducing-vercel-ci).
- **Added:** Particle-1 (2026-10-28) — SWE model post-trained on DeepSeek V4.1 Flash, 28–52% fewer output tokens at comparable accuracy; Particle API ($0.30/$1.20 per 1M per blog footnote, not put in the feed text). Official: [Particle blog](https://particle.ai/blog/introducing-particle-1).
- **Added:** NVIDIA Nemotron 3.5 Transcribe (2026-10-28) — open-weight 30B-A4B promptable ASR (40 languages, diarization, translation, audio Q&A). Official: [Hugging Face blog](https://huggingface.co/blog/nvidia/nemotron-transcribe-granary).
- **Added:** AssemblyAI-TTS-1 GA (2026-10-27) — voice-agent TTS, ~90 ms to first audio, $15 per 1M characters, unlimited concurrency. Official: [AssemblyAI blog](https://www.assemblyai.com/blog/text-to-speech-api).

### Ranking slots
- No new ranking tools; video slot stays empty. No new consumer video model with verified public access/pricing in the window (Seedance 2.5 Oct 23 is a staged regional rollout/enterprise trial; FLUX 3 Max by fal Oct 19 API-only; Hy-Nomas Oct 21–23 research open weights).

### Listing fixes
- None needed. GitHub Copilot: Fusion replaces the Auto option, plan prices unchanged per changelog. Cursor's new plan lineup already reflected. Affiliate links untouched.

### Scanned but not added (incremental, out of window, preview-only, or not verifiable)
- Rime Prism speech-to-speech (Oct 28; no public access/pricing details), GitLab Orbit GA (Oct 29; enterprise Premium/Ultimate add-on), Copilot image gen in chat (Oct 28 preview), Copilot JetBrains local sandboxes/NES GA, Codex CLI 0.165.0 Vertex provider, Claude Code 2.1.312, Mistral Timestral (forecasting), SenseNova 6.8 Code2Video, Articul8 Bivia, Giotto Alto/Solo, Tavus Griffin, Vercel fx in T3 Code, SuperPlane 1.0, Qwen4 (teased for next week, not released), DeepSeek V4.1 Flash Cyber (gateway listing only, no official source found), OpenAI–ServiceNow partnership.

### Shutdown / rename watch
- No listed tool shut down, renamed, or changed pricing in this window. Noted: Google stopped selling Gemini Code Assist Standard/Enterprise (Oct 9) and Firebase Studio is sunsetting; neither is listed.

## 2026-10-30 (daily release scan, covering Oct 28–30)

### Releases feed
- **Added:** Mistral Large 4 (Le Chonk) open weights (2026-10-29) — improved 1T-param multimodal MoE, "best open-weight model for coding", cyber-defense gains; modified-MIT license (MaaS providers need a commercial license); API $0.70 in / $0.07 cached / $2.10 out per 1M. Official: [Mistral](https://mistral.ai/news/mistral-large-4-oss/).
- **Added:** Factory Droid 1.0 (2026-10-29) — programmatic tool calling by default (sandboxed JS Script tool), self-reported Terminal-Bench 4 wins over Codex/Claude Code/Cursor at lower cost; desktop (macOS/Windows), terminal, TypeScript SDK. Official: [Factory](https://factory.com/news/frontier-harness).
- **Added:** Pika H3 Flex (2026-10-29) — open-weight post-trained MiniMax H3 video model (480p/768p with audio locally; 1080p–4K upscaling, stems hosted); in the Pika app Nov 2. Official: [Pika blog](https://pika.art/blog/pika-h3-flex).
- **Added:** Canva Brush (2026-10-29, date inferred from "a week after" Craft on Oct 22) — design-editing VLM in Canva AI for Pro subscribers. Official: [Canva newsroom](https://www.canva.com/newsroom/news/canva-brush/).

### Ranking slots
- No new ranking tools; video slot stays empty. Pika H3 Flex is a model from an already-listed tool (Pika); Mischief 1 (Biological Computing Co., fal/OpenRouter API) not verified from an official page and API-only.

### Listing fixes
- None needed. Mistral listing is generic (free plan, Pro, pay-as-you-go API) and still accurate; Pika listing unchanged (Flex app pricing not announced).

### Scanned but not added (incremental, out of window, or not verifiable)
- Cursor Agent SDK GA (Oct 20/23, out of window), OpenAI Model Spec update (policy, not a tool), Vercel Firewall AI Bots rules (incremental), Anthropic Usage and Cost Analytics API beta (incremental), Local Code for Mac (Draw Things team), Tencent Marvis Coding Manager (China-only), Kakao Kanana-2-embedding, Simulon Reality-Aware Rendering, HeyClicky overlays, GitHub Copilot code review Max tier (part of Universe), Qwen4 (still teased for next week), Mischief 1.

### Shutdown / rename watch
- No listed tool shut down, renamed, or changed pricing in this window.
