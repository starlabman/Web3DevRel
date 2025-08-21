import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | AGBETSIASSI KODJO LABORE',
    default: 'AGBETSIASSI KODJO LABORE - DevRel & Ecosystem Builder',
  },
  description: 'Expert en Web3, DevRel et construction d\'écosystèmes blockchain en Afrique.',
  keywords: ['Web3', 'Blockchain', 'DevRel', 'Afrique', 'Ethereum'],
  authors: [{ name: 'AGBETSIASSI KODJO LABORE' }],
  creator: 'AGBETSIASSI KODJO LABORE',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://starlabman.netlify.app',
    title: 'AGBETSIASSI KODJO LABORE - DevRel & Ecosystem Builder',
    description: 'Expert en Web3, DevRel et construction d\'écosystèmes blockchain en Afrique.',
    siteName: 'AGBETSIASSI KODJO LABORE Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGBETSIASSI KODJO LABORE - DevRel & Ecosystem Builder',
    description: 'Expert en Web3, DevRel et construction d\'écosystèmes blockchain en Afrique.',
    creator: '@0xWeb3DevRel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
