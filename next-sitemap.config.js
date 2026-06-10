/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://warmtepomp.ai",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  exclude: ["/logo-test"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
