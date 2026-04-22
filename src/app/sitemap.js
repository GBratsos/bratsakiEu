export const dynamic = 'force-static'

export default function sitemap() {
  const lastModified = new Date()

  return [
    { url: 'https://bratsaki.eu', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://bratsaki.eu/biography', lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://bratsaki.eu/podcast', lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
