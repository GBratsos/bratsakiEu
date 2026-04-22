import Gallery from '../components/gallery'
import HomeContent from '../components/homeContent'
import LatestNews from '../components/latestNews'
import Podcast from '../components/podcast'
import Simracing from '../components/simracing'

async function getData() {
  const res = await fetch('https://rallydiaries.eu/en/rest/articles/bratsaki')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const metadata = {
  alternates: {
    canonical: 'https://bratsaki.eu',
  },
  title: 'George Bratsos - Simracer & Rally Driver',
  description: 'Greek simracer and rally driver promoting motorsport through online content and racing activities.',
  openGraph: {
    title: 'George Bratsos - Simracer & Rally Driver',
    description: 'Greek simracer and rally driver promoting motorsport through online content and racing activities.',
    url: 'https://bratsaki.eu',
    siteName: 'George Bratsos | Simracer - Content Creator - Motorsports Driver (in the making)',
    images: [
      {
        url: 'https://bratsaki.eu/bratsakifb.jpg',
        alt: 'George Bratsos | Simracer - Content Creator - Motorsports Driver (in the making)',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Bratsos | Simracer - Content Creator - Motorsports Driver (in the making)',
    description:
      'George Bratsos is a Greek simracer & rally driver. He promotes motorsport in Greece, through his online content and motorsport activities. From simracing to real rallies.',
    images: ['https://bratsaki.eu/bratsakifb.jpg'],
  },
}

function parsePublishedDate(dateString) {
  if (!dateString) return null

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
    const [day, month, year] = dateString.split('/')
    return `${year}-${month}-${day}`
  }

  const parsed = new Date(dateString)
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().split('T')[0]
  }

  return null
}

function normalizeUrl(url) {
  if (!url) return null
  if (url.startsWith('//')) return `https:${url}`
  if (url.startsWith('http://')) return url.replace(/^http:/, 'https:')
  if (url.startsWith('https://')) return url
  return `https://rallydiaries.eu${url}`
}

function stripHtml(text) {
  if (!text) return ''
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncate(text, max) {
  if (!text) return text
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).trimEnd()}…`
}

function buildArticleSchema(posts) {
  return posts
    .map((post) => {
      const url = normalizeUrl(post.view_node)
      const image = normalizeUrl(post.field_media_image)
      const description = truncate(stripHtml(post.body) || post.title, 250)
      const publishedDate =
        parsePublishedDate(post.date) ||
        parsePublishedDate(post.publishedDate) ||
        parsePublishedDate(post.published_date) ||
        parsePublishedDate(post.created) ||
        parsePublishedDate(post.changed) ||
        parsePublishedDate(post.published_at)
      const modifiedDate = parsePublishedDate(post.changed) || parsePublishedDate(post.updated)

      if (!url) return null

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
        headline: truncate(post.title, 110),
        description,
        author: {
          '@type': 'Person',
          name: 'George Bratsos',
          url: 'https://bratsaki.eu',
        },
        publisher: {
          '@type': 'Organization',
          name: 'George Bratsos',
          logo: {
            '@type': 'ImageObject',
            url: 'https://bratsaki.eu/favicons/android-icon-192x192.png',
          },
        },
        inLanguage: 'en-US',
        url,
      }

      if (image) {
        schema.image = image
      }
      if (publishedDate) {
        schema.datePublished = publishedDate
      }
      if (modifiedDate) {
        schema.dateModified = modifiedDate
      }

      return schema
    })
    .filter(Boolean)
}

export default async function Home() {
  const data = await getData()
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'George Bratsos - Simracer & Rally Driver',
      description: 'Greek simracer and rally driver promoting motorsport through online content and racing activities.',
      url: 'https://bratsaki.eu',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://bratsaki.eu/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    ...buildArticleSchema(data),
  ]

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HomeContent />
      <Simracing />
      <Podcast />
      <Gallery />
      <LatestNews data={data} />
    </>
  )
}
