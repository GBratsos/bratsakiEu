// app/robots.ts (ή robots.js αν θες JS)
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        userAgent: '*',
        allow: '/llms.txt',
      },
      { userAgent: 'GPTBot', allow: '/', disallow: ['/private/'] },
      { userAgent: 'CCBot', allow: '/', disallow: ['/private/', '/images/'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/private/'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/private/'] },
    ],
    sitemap: 'https://bratsaki.eu/sitemap.xml',
  }
}
