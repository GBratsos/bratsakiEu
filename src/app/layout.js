import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Rallydiaries from './components/rallydiaries'
import BorderColor from './components/borderColor'
import CookieYesLoader from './components/cookieYes'
import GTM from './components/GTM'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })

export const metadata = {
  alternates: {
    canonical: 'https://bratsaki.eu',
  },
  title: 'George Bratsos | Simracer - Content Creator - Motorsports Driver (in the making)',
  description:
    'George Bratsos is a Greek simracer & rally driver. He promotes motorsport in Greece, through his online content and motorsport activities. From simracing to real rallies.',
  keywords: [
    'George Bratsos',
    'Simracing Greece',
    'Simracer',
    'Greek motorsport',
    'Rally driver Greece',
    'Content Creator motorsports',
    'Bratsaki',
    'Sim to real',
    'Motorsport Greece',
    'simracing',
    'peugeot 205',
    'rally driver',
  ],
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
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-96x96.png',
    apple: '/favicons/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicons//apple-icon-precomposed.png',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <meta charSet='utf-8' />
      <meta name='facebook-domain-verification' content='3rxkbhtgwmm0w4pmcatgkd13kvzt19' />
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
