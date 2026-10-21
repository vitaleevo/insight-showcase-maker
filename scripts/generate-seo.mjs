import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

function pageHtml(template, page, siteUrl) {
  const url = `${siteUrl}${page.path}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const metadata = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${page.indexable ? "index, follow" : "noindex, follow"}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    ...(page.indexable ? [`<link rel="canonical" href="${escapeHtml(url)}" />`] : []),
  ].join("\n    ");

  return template
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<link\b[^>]*rel="canonical"[^>]*>/gi, "")
    .replace(/<meta\b[^>]*(?:name="(?:description|robots|twitter:title|twitter:description)"|property="(?:og:title|og:description|og:url)")[^>]*>/gi, "")
    .replace("</head>", `    ${metadata}\n  </head>`);
}

const server = await createServer({
  root,
  mode: "production",
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  // Vite resolves TypeScript, aliases and image imports using the app's own config.
  const { indexablePages, getPageMetadata, SITE_URL } = await server.ssrLoadModule("/src/lib/seo.ts");
  const template = await readFile(path.join(output, "index.html"), "utf8");
  const paths = indexablePages.map((page) => page.path);
  if (new Set(paths).size !== paths.length) throw new Error("Duplicate SEO page paths");

  for (const page of indexablePages) {
    if (!/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?$/.test(page.path)) {
      throw new Error(`Invalid SEO page path: ${page.path}`);
    }
    const target = path.join(output, page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, pageHtml(template, page, SITE_URL));
  }

  await writeFile(path.join(output, "404.html"), pageHtml(template, getPageMetadata("/404"), SITE_URL));
  const urls = paths.map((pagePath) => `  <url><loc>${escapeHtml(`${SITE_URL}${pagePath}`)}</loc></url>`).join("\n");
  await writeFile(path.join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  console.log(`Generated metadata and sitemap for ${paths.length} public pages.`);
} finally {
  await server.close();
}
