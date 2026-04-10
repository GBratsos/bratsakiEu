import BiographyContent from '../../components/biographyContent'

export const metadata = {
  alternates: {
    canonical: 'https://bratsaki.eu/biography',
  },
  title: 'George Bratsos Biography - From Simracing to Rally Driving',
  description:
    'Discover George Bratsos\' journey from simracing champion to professional rally driver. His story from RallyeSim to real racing.',
  openGraph: {
    title: 'George Bratsos Biography - From Simracing to Rally Driving',
    description:
      'Discover George Bratsos\' journey from simracing champion to professional rally driver. His story from RallyeSim to real racing.',
    url: 'https://bratsaki.eu/biography',
    siteName: 'George Bratsos - Simracer & Rally Driver',
    images: [
      {
        url: 'https://bratsaki.eu/bratsakifb.jpg',
        alt: 'George Bratsos biography',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Bratsos Biography - From Simracing to Rally Driving',
    description:
      'Discover George Bratsos\' journey from simracing champion to professional rally driver. His story from RallyeSim to real racing.',
    images: ['https://bratsaki.eu/bratsakifb.jpg'],
  },
}

export default function Biography() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'George Bratsos Biography - From Simracing to Rally Driving',
            description: 'Discover George Bratsos\' journey from simracing champion to professional rally driver. His story from RallyeSim to real racing.',
            image: 'https://bratsaki.eu/bratsakifb.jpg',
            datePublished: '2024-01-01',
            dateModified: '2024-12-01',
            author: {
              '@type': 'Person',
              name: 'George Bratsos',
              url: 'https://bratsaki.eu',
            },
            publisher: {
              '@type': 'Person',
              name: 'George Bratsos',
              logo: {
                '@type': 'ImageObject',
                url: 'https://bratsaki.eu/bratsaki.webp',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://bratsaki.eu/biography',
            },
            about: {
              '@type': 'Person',
              name: 'George Bratsos',
              description: 'Greek simracer and rally driver',
              sameAs: [
                'https://www.instagram.com/bratsaki/',
                'https://www.youtube.com/rallydiaries',
                'https://www.tiktok.com/@geobratsos',
                'https://twitch.tv/bratsaki',
              ],
            },
          }),
        }}
      />
      <BiographyContent />
    </>
  )
}
