# IndexNow

IndexNow tells Bing, Yandex, and the other participating engines about new and updated URLs. One POST to `https://api.indexnow.org/indexnow` is shared across that network. No account is required.

The API key lives at the site root, which is what IndexNow checks before it accepts a submission:

- File: `public/bbe4cc044e2a4b16ae6106d6c595b7e5.txt`
- Live URL (after deploy): `https://viberanked.com/bbe4cc044e2a4b16ae6106d6c595b7e5.txt`

The file's contents are the key itself. `npm run indexnow` discovers it by finding the single `public/*.txt` file whose name matches its contents.

## Submit URLs

This is not part of CI or the production build. Run it when you want to notify IndexNow, after the key file is deployed (otherwise the engines respond 403 because they cannot fetch the key):

```bash
npm run build
npm run indexnow
```

The script reads `dist/sitemap-index.xml`, follows each child sitemap, and submits every page URL. A successful response is HTTP 200, or 202 the first time while the key is still being checked.

Preview the URL list without sending anything:

```bash
npm run build
npm run indexnow -- --dry-run
```

To rotate the key, replace the file in `public/` with a new 8–128 character key (letters, numbers, hyphens only), deploy, then run the script again. Keep exactly one key file so the script knows which key to send.
