import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Providers from './providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700', '800'],
})
export const metadata: Metadata = {
  metadataBase: new URL('https://raymartf.com'),
  title: 'Raymart Fajutagana | Full-Stack Developer',
  description:
    'Full-Stack Developer with 4+ years of experience building scalable SaaS platforms and enterprise web applications. Based in Greater Toronto Area, Canada.',
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'Greater Toronto Area',
    'Canada',
    'Raymart Fajutagana',
  ],
  authors: [{ name: 'Raymart Fajutagana', url: 'https://raymartf.com' }],
  creator: 'Raymart Fajutagana',
  openGraph: {
    title: 'Raymart Fajutagana | Full-Stack Developer',
    description:
      'Full-Stack Developer with 4+ years of experience building scalable SaaS platforms and enterprise web applications.',
    url: 'https://raymartf.com',
    siteName: 'Raymart Fajutagana',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Raymart Fajutagana - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymart Fajutagana | Full-Stack Developer',
    description:
      'Full-Stack Developer with 4+ years of experience building scalable SaaS platforms and enterprise web applications.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://raymartf.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  verification: {
    google: 'G0nRNtpVJhmv_i5GOclwNxO8pUqwswAZcShQ8Kw0g-0',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white font-[family-name:var(--font-inter)] text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
