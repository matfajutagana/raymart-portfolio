import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Providers from './providers'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Raymart Fajutagana | Full-Stack Developer',
  description:
    'Full-Stack Developer with 4+ years of experience building scalable SaaS platforms and enterprise web applications. Based in Greater Toronto Area, ON. Canadian Permanent Resident.',
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'TypeScript',
    'React',
    'Node.js',
    'Greater Toronto Area',
    'Canada',
  ],
  authors: [{ name: 'Raymart Fajutagana' }],
  openGraph: {
    title: 'Raymart Fajutagana | Full-Stack Developer',
    description:
      'Full-Stack Developer with 4+ years of experience building scalable SaaS platforms and enterprise web applications.',
    url: 'https://raymartfajutagana.com',
    siteName: 'Raymart Fajutagana Portfolio',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
