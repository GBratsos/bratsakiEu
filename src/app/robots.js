// app/robots.ts (ή robots.js αν θες JS)
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      // { userAgent: 'GPTBot', disallow: '/' },
      // { userAgent: 'CCBot', disallow: '/' },
      // { userAgent: 'ClaudeBot', disallow: '/' },
      // { userAgent: 'PerplexityBot', disallow: '/' },
    ],
    sitemap: 'https://bratsaki.eu/sitemap.xml',
  }
}
