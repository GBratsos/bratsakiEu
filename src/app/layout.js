import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '../components/footer'
import Rallydiaries from '../components/rallydiaries'
import BorderColor from '../components/borderColor'
import CookieYesLoader from '../components/cookieYes'
import GTM from '../components/GTM'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })

export const metadata = {
  title: 'George Bratsos - Simracer & Rally Driver',
  description: 'Greek simracer and rally driver promoting motorsport through online content and racing activities.',
  openGraph: {
    title: 'George Bratsos | Simracer - Content Creator - Motorsports Driver (in the making)',
    description:
      'George Bratsos is a Greek simracer & rally driver. He promotes motorsport in Greece, through his online content and motorsport activities. From simracing to real rallies.',
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
  metadataBase: new URL('https://bratsaki.eu'),
  twitter: {
    card: 'summary_large_image',
    title: 'George Bratsos | Simracer - Content Creator - Motorsports Driver (in the making)',
    description:
      'George Bratsos is a Greek simracer & rally driver. He promotes motorsport in Greece, through his online content and motorsport activities. From simracing to real rallies.',
    images: ['https://bratsaki.eu/bratsakifb.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='facebook-domain-verification' content='3rxkbhtgwmm0w4pmcatgkd13kvzt19' />
        <link rel='preconnect' href='https://rallydiaries.eu' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://rallydiaries.eu' />
        <link rel='preconnect' href='https://www.googletagmanager.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
        <link rel='preconnect' href='https://cdn-cookieyes.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://cdn-cookieyes.com' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://bratsaki.eu',
                },
              ],
            }),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'George Bratsos',
              alternateName: 'Bratsaki',
              description: 'Greek simracer and rally driver, content creator promoting motorsport in Greece',
              url: 'https://bratsaki.eu',
              image: 'https://bratsaki.eu/bratsaki.webp',
              sameAs: [
                'https://www.instagram.com/bratsaki/',
                'https://www.youtube.com/rallydiaries',
                'https://www.tiktok.com/@geobratsos',
                'https://twitch.tv/bratsaki',
              ],
              knowsAbout: ['Simracing', 'Rally Driving', 'Motorsport', 'Content Creation'],
              jobTitle: 'Simracer and Rally Driver',
              nationality: 'Greek',
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-PWTGGFQ'
            height='0'
            width='0'
            className='invisible'
          ></iframe>
        </noscript>
        <main>
          <BorderColor />
          {children}
          <Rallydiaries />
        </main>
        <Footer />
        <BorderColor />
        <CookieYesLoader />
        <GTM />
      </body>
    </html>
  )
}
