/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.VERCEL_URL || 'https://example.com',
  generateRobotsTxt: true
};
