import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Rallydiaries from './components/rallydiaries'
import BorderColor from './components/borderColor'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })

export const metadata = {
  alternates: {
    canonical: 'https://bratsaki.eu',
  },
  title: 'George Bratsos | Simracer - Content Creator - Motorsports Driver (in the making)',
  description:
    'George Bratsos is a Greek simracer & rally driver. He promotes motorsport in Greece, through his online content and motorsport activities. From simracing to real rallies.',

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
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <Script
        id='google-analytics'
        strategy='lazyOnload'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PWTGGFQ');
          `,
        }}
      />
      <meta name='facebook-domain-verification' content='3rxkbhtgwmm0w4pmcatgkd13kvzt19' />
      <body className={`${inter.variable} font-sans`}>
        <main>
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-PWTGGFQ'
              height='0'
              width='0'
              className='invisible'
            ></iframe>
          </noscript>
          <BorderColor />
          {children}
          <Rallydiaries />
        </main>
        <Footer />
        <BorderColor />
      </body>
    </html>
  )
}
