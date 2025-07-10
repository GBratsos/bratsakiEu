import Script from 'next/script'

export default function CookieYesLoader() {
  return (
    <Script
      id='cookieyes'
      strategy='afterInteractive'
      src='https://cdn-cookieyes.com/client_data/763724a18fa288293ea1f9a8/script.js'
    />
  )
}
