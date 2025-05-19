import { blogPosts } from "../data/blogPosts.js";

const generateSitemap = () => {
  const baseUrl = "https://angia.com.au";
  const today = new Date().toISOString().split("T")[0];

  // Static routes
  const staticRoutes = [
    {
      loc: "/",
      lastmod: today,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      loc: "/about",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: "/services",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: "/contact",
      lastmod: today,
      changefreq: "monthly",
      priority: "0.7",
    },
    {
      loc: "/products/birabook",
      lastmod: today,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: "/products/lotsapark",
      lastmod: today,
      changefreq: "weekly",
      priority: "0.9",
    },
    {
      loc: "/blog",
      lastmod: today,
      changefreq: "daily",
      priority: "0.8",
    },
  ];

  // Generate blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: "monthly",
    priority: "0.7",
    news: {
      publication: {
        name: "Angia Technologies Blog",
        language: "en",
      },
      publication_date: `${post.date}T00:00:00+00:00`,
      title: post.title,
      keywords: post.content.sections[0].items.join(", "),
    },
  }));

  // Combine all routes
  const allRoutes = [...staticRoutes, ...blogRoutes];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${
      route.news
        ? `<news:news>
      <news:publication>
        <news:name>${route.news.publication.name}</news:name>
        <news:language>${route.news.publication.language}</news:language>
      </news:publication>
      <news:publication_date>${route.news.publication_date}</news:publication_date>
      <news:title>${route.news.title}</news:title>
      <news:keywords>${route.news.keywords}</news:keywords>
    </news:news>`
        : ""
    }
  </url>`
  )
  .join("\n")}
</urlset>`;

  return xml;
};

export default generateSitemap;
