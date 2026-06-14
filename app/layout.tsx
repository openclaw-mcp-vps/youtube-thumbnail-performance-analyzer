import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ThumbnailIQ — A/B Test YouTube Thumbnails Before Publishing',
  description: 'Upload multiple thumbnail options, get predicted click-through rates using eye-tracking simulation, and A/B test with small audience samples. Built for YouTube creators with 1K+ subscribers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9426fad5-4ea7-4396-a73c-97b3e8fb7ea2"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
