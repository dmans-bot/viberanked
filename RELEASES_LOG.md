# Vibe Ranked releases log

Running log of feed additions and listing fixes for the weekly CEO report. Newest first.

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
