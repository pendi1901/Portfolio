import { projects } from "../data/site";

const SITE = "https://www.pendi.works";

export async function get() {
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    { loc: `${SITE}/`, priority: "1.0", changefreq: "monthly" },
    ...projects.map((p) => ({
      loc: `${SITE}/projects/${p.slug}`,
      priority: p.featured ? "0.9" : "0.7",
      changefreq: "yearly",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
