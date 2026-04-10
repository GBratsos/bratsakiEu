import PodcastContent from '../../components/podcastContent'
import podcastData from '../podcastData'

// Helper function to convert DD/MM/YYYY to ISO date
function convertToISODate(dateStr) {
  const [day, month, year] = dateStr.split('/')
  return `${year}-${month}-${day}`
}

export const metadata = {
  alternates: {
    canonical: 'https://bratsaki.eu/podcast',
  },
  title: 'Pedal to the Metal Podcast - George Bratsos',
  description:
    'Exclusive podcast by simracer George Bratsos. Talks about motorsport, simracing, and racing experiences.',
  openGraph: {
    title: 'Pedal to the Metal Podcast - George Bratsos',
    description:
      'Exclusive podcast by simracer George Bratsos. Talks about motorsport, simracing, and racing experiences.',
    url: 'https://bratsaki.eu/podcast',
    siteName: 'George Bratsos - Simracer & Rally Driver',
    images: [
      {
        url: 'https://bratsaki.eu/bratsakifb.jpg',
        alt: 'Pedal to the Metal podcast',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedal to the Metal Podcast - George Bratsos',
    description:
      'Exclusive podcast by simracer George Bratsos. Talks about motorsport, simracing, and racing experiences.',
    images: ['https://bratsaki.eu/bratsakifb.jpg'],
  },
}

export default function Podcast() {
  // Create structured data for all podcast episodes
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'PodcastSeries',
      name: 'Pedal to the Metal Without Tomorrow',
      description: 'Exclusive podcast by simracer George Bratsos. Talks about motorsport, simracing, and racing experiences.',
      url: 'https://bratsaki.eu/podcast',
      image: 'https://bratsaki.eu/pedal-to-the-metal-without-tomorrow.webp',
      genre: ['Sports', 'Motorsport', 'Racing'],
      creator: {
        '@type': 'Person',
        name: 'George Bratsos',
        sameAs: [
          'https://www.instagram.com/bratsaki/',
          'https://www.youtube.com/@bratsaki',
          'https://www.tiktok.com/@bratsaki',
          'https://twitter.com/bratsaki',
        ],
      },
      publisher: {
        '@type': 'Person',
        name: 'George Bratsos',
      },
    },
    ...podcastData.map((episode) => ({
      '@context': 'https://schema.org',
      '@type': 'PodcastEpisode',
      name: episode.title,
      description: episode.description,
      url: episode.spotifyUrl,
      image: `https://bratsaki.eu${episode.image}`,
      datePublished: convertToISODate(episode.date),
      potentialAction: {
        '@type': 'ListenAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: episode.spotifyUrl,
          actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
        },
      },
      partOfSeries: {
        '@type': 'PodcastSeries',
        name: 'Pedal to the Metal Without Tomorrow',
      },
    })),
  ]

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <PodcastContent />
    </>
  )
}
