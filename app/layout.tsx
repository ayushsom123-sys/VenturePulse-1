import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'VenturePulse - VC Analytics Dashboard',
  description: 'Dark fintech SaaS for VC analysts - Portfolio management and deal flow tracking',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body
        className="font-sans antialiased min-h-full"
        style={{
          background: "#0E0B13 url('/images/background.png') center center no-repeat fixed",
          backgroundSize: "cover",
        }}
      >
        <div id="venture-pulse-root" className="min-h-full" style={{ background: "transparent" }}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
