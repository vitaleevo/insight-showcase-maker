import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
const canonicalOrigin = "https://www.almafrans.ao";

test("every sitemap URL has its own deployable HTML and matching canonical metadata", async () => {
  const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(urls.includes(`${canonicalOrigin}/`));
  assert.ok(urls.includes(`${canonicalOrigin}/product/colete-salva-vidas`));
  assert.ok(urls.includes(`${canonicalOrigin}/service/balsa-salva-vidas`));
  assert.ok(urls.includes(`${canonicalOrigin}/sector/maritimo`));
  assert.ok(urls.includes(`${canonicalOrigin}/calcado-seguranca`));
  assert.equal(new Set(urls).size, urls.length);
  const titles = new Set();

  for (const url of urls) {
    const parsed = new URL(url);
    assert.equal(parsed.origin, canonicalOrigin);
    assert.equal(parsed.hash, "");
    assert.equal(parsed.search, "");
    const file = parsed.pathname === "/" ? "index.html" : `${parsed.pathname.slice(1)}.html`;
    const html = await readFile(path.join(dist, file), "utf8");
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1, url);
    assert.ok(html.includes(`<link rel="canonical" href="${url}" />`), url);
    assert.ok(html.includes(`<meta property="og:url" content="${url}" />`), url);
    assert.equal((html.match(/<title>/g) ?? []).length, 1, url);
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title?.includes("ALMAFRANS"), url);
    assert.ok(!titles.has(title), `Duplicate title: ${title}`);
    titles.add(title);
    assert.equal((html.match(/name="description"/g) ?? []).length, 1, url);
    assert.match(html, /name="description" content="[^"]+"/);
    assert.ok(!html.includes("noindex"), url);
    assert.ok(!html.includes('href="https://almafrans.com/"'), url);
    for (const asset of html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)) {
      await access(path.join(dist, asset[1]));
    }
  }
});

test("robots advertises the sitemap and error pages stay out of the index", async () => {
  const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
  assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
  assert.ok(!robots.includes("Disallow: /"));
  const errorHtml = await readFile(path.join(dist, "404.html"), "utf8");
  assert.match(errorHtml, /name="robots" content="noindex, follow"/);
  assert.ok(!errorHtml.includes('rel="canonical"'));
  const config = JSON.parse(await readFile(path.join(root, "vercel.json"), "utf8"));
  assert.equal(config.cleanUrls, true);
  assert.equal(config.trailingSlash, false);
  assert.ok(!config.rewrites, "Unknown URLs must preserve HTTP 404 rather than rewrite to the homepage");
});
