'use client'

import { useEffect } from 'react'

export default function CookieYesLoader() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn-cookieyes.com/client_data/763724a18fa288293ea1f9a8/script.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return null
}
