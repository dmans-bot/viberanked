# Vibe Ranked health log

Daily automated health check of viberanked.com. Newest entries at the bottom.

## 2026-10-18 15:05 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 70 URLs in sitemap-0.xml: 200
- 114 outbound tool links: all 200 or 403 (bot-blocking), none broken
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-74dq8n5it, 14h old): Ready
- Housekeeping: local main had a duplicate of the already-pushed Railway affiliate commit and was 3 behind origin; rebased onto origin/main (duplicate dropped, no content lost). Now at efd46d0, in sync.

## 2026-10-19 15:12 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 70 URLs in sitemap-0.xml: 200
- 113 outbound tool links: all 200 or 403 (bot-blocking), none broken
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-3q68remsb, 51m old, from 188caa2 release scan): Ready
- Local main in sync with origin/main; no fixes needed.

## 2026-10-20 15:03 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 117 outbound tool links: all 200 or 403 (bot-blocking). One quirk: the Meta Muse Glimmer 30B research page returns 400 to a browser-style user agent but 200 to a plain client (Meta bot filtering); the page is live, so no change made.
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-3bpv3oa8j, 44m old, from 74d7078 release scan): Ready
- Local main in sync with origin/main; no fixes needed.

## 2026-10-21 15:02 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 122 outbound links: all 200 or 403 (bot-blocking), except the known Meta Muse Glimmer 30B page quirk (400 to browser UA, 200 to plain client; page is live, no change)
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-3l6a1lsmx, 38m old, from 5ca924d release scan): Ready
- Local main in sync with origin/main; no fixes needed.

## 2026-10-22 15:07 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 125 outbound links: all 200 or 403 (bot-blocking), except the known Meta Muse Glimmer 30B page quirk (400 to browser UA, 200 to plain client; page is live, no change)
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-bnkwd456r, ~50m old, from 6a7dea2 release scan): Ready (GitHub deployment status success; Vercel CLI not installed on box, checked via GitHub deployments API)
- Local main in sync with origin/main; no fixes needed.

## 2026-10-23 15:10 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 130 outbound links: all 200 or 403 (bot-blocking), none broken (Meta Muse Glimmer quirk did not reproduce today)
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-57i11119n, ~48m old, from 24b2c8c release scan): Ready (GitHub deployment status success)
- Local main in sync with origin/main; no fixes needed.

## 2026-10-24 15:05 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 130 outbound links: all 200 or 403 (bot-blocking), none broken
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-57i11119n, from 24b2c8c release scan, ~25h old; no new commits since): Ready (GitHub deployment status success)
- Local main in sync with origin/main; no fixes needed.

## 2026-10-25 15:05 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 132 outbound links: all 200 or 403 (bot-blocking); Meta Muse Glimmer page returned 400 with the Chrome UA (known UA quirk) but 200 on recheck with Safari and default UA
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (from 24b2c8c, ~49h old; no new commits since): Ready (GitHub deployment status success)
- Local main in sync with origin/main; no fixes needed.

## 2026-10-26 15:05 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 134 outbound links: all 200 or 403 (bot-blocking); Meta Muse Glimmer page returned 400 with the Chrome UA (known UA quirk) but 200 on recheck with default UA
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (viberanked-ql7c7wtim, from b724785 release scan, ~40m old): Ready (GitHub deployment status success)
- Local main in sync with origin/main; no fixes needed.

## 2026-10-27 15:05 UTC — All healthy
- Home, /robots.txt, /llms.txt, /sitemap-index.xml: 200
- All 75 URLs in sitemap-0.xml: 200
- 139 outbound links: all 200 or 403 (bot-blocking) after recheck; transient first-pass failures: zed.dev 503, hailuoai.video and /subscribe timed out, Meta Muse Glimmer 400 (known Chrome UA quirk). All returned 200 on recheck (hailuoai.video is intermittently slow/timing out; watch it).
- POST /api/subscribe with invalid email: 400 (as expected)
- Latest Vercel production deploy (from f46cea3 release scan, ~40m old): Ready (GitHub deployment status success)
- Local main in sync with origin/main; no fixes needed.
