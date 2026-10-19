#!/usr/bin/env node
// Submit every URL in the built sitemap to IndexNow (Bing, Yandex, and other
// participating engines via https://api.indexnow.org/indexnow).
// Not wired into CI. Run locally after `npm run build`, and only once the key
// file is deployed at the site root.

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const ROOT = process.cwd();
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const KEY_RE = /^[A-Za-z0-9-]{8,128}$/;
const CHUNK = 10000;
const dryRun = process.argv.includes('--dry-run');

function findKey() {
  const dir = join(ROOT, 'public');
  const hits = [];
  for (const name of readdirSync(dir)) {
    if (!name.endsWith('.txt')) continue;
    const key = name.slice(0, -4);
    if (!KEY_RE.test(key)) continue;
    const body = readFileSync(join(dir, name), 'utf8').trim();
    if (body === key) hits.push(key);
  }
  if (hits.length !== 1) {
    throw new Error(`Expected exactly one IndexNow key file in public/ (name equals contents, 8–128 letters, numbers, or hyphens). Found ${hits.length}.`);
  }
  return hits[0];
}

function locs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function readSitemapUrls() {
  const indexPath = join(ROOT, 'dist', 'sitemap-index.xml');
  if (!existsSync(indexPath)) {
    throw new Error('dist/sitemap-index.xml not found. Run `npm run build` first.');
  }
  const indexXml = readFileSync(indexPath, 'utf8');
  const indexLocs = locs(indexXml);
  const pageUrls = [];
  if (indexXml.includes('<sitemapindex')) {
    for (const loc of indexLocs) {
      const file = join(ROOT, 'dist', basename(new URL(loc).pathname));
      if (!existsSync(file)) throw new Error(`Sitemap file missing: ${file} (from ${loc})`);
      const child = readFileSync(file, 'utf8');
      pageUrls.push(...locs(child).filter((u) => !u.endsWith('.xml')));
    }
  } else {
    pageUrls.push(...indexLocs.filter((u) => !u.endsWith('.xml')));
  }
  return [...new Set(pageUrls)];
}

async function submit(host, key, urlList) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList,
    }),
  });
  const text = await res.text();
  if (res.status !== 200 && res.status !== 202) {
    throw new Error(`IndexNow responded ${res.status}${text ? `: ${text}` : ''}`);
  }
  console.log(`Submitted ${urlList.length} URL${urlList.length === 1 ? '' : 's'} (${res.status}).`);
}

try {
  const key = findKey();
  const urls = readSitemapUrls();
  if (!urls.length) throw new Error('Sitemap contained no page URLs.');
  const hosts = new Set(urls.map((u) => new URL(u).host));
  if (hosts.size !== 1) throw new Error(`Expected one host in the sitemap, found ${[...hosts].join(', ')}.`);
  const host = [...hosts][0];
  const distKey = join(ROOT, 'dist', `${key}.txt`);
  if (!existsSync(distKey)) {
    console.warn(`Warning: dist/${key}.txt is missing. The live site must serve https://${host}/${key}.txt or IndexNow will reject the key.`);
  }

  console.log(`Host: ${host}`);
  console.log(`Key file: https://${host}/${key}.txt`);
  console.log(`URLs: ${urls.length}`);

  if (dryRun) {
    for (const url of urls) console.log(url);
    console.log('Dry run: nothing submitted.');
  } else {
    for (let i = 0; i < urls.length; i += CHUNK) {
      await submit(host, key, urls.slice(i, i + CHUNK));
    }
  }
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}
