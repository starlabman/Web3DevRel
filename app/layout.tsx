import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AccessibilityProvider } from "@/components/ui/accessibility-provider"
import { SkipLink } from "@/components/ui/skip-link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AGBETSIASSI KODJO LABORE - DevRel & Ecosystem Builder",
    template: "%s | AGBETSIASSI KODJO LABORE"
  },
  description: "Expert en Web3, DevRel et construction d'écosystèmes blockchain en Afrique. Fondateur de la Communauté Blockchain Afrique et Gouverneur ETHAfrique.",
  keywords: [
    "Web3",
    "Blockchain",
    "DevRel",
    "Afrique",
    "Ethereum",
    "Développement",
    "Communauté",
    "Mentorat"
  ],
  authors: [{ name: "AGBETSIASSI KODJO LABORE" }],
  creator: "AGBETSIASSI KODJO LABORE",
  publisher: "AGBETSIASSI KODJO LABORE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://starlabman.netlify.app"),
  alternates: {
    canonical: "/",
    languages: {
      "fr": "/fr",
      "en": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://starlabman.netlify.app",
    title: "AGBETSIASSI KODJO LABORE - DevRel & Ecosystem Builder",
    description: "Expert en Web3, DevRel et construction d'écosystèmes blockchain en Afrique.",
    siteName: "AGBETSIASSI KODJO LABORE Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AGBETSIASSI KODJO LABORE - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGBETSIASSI KODJO LABORE - DevRel & Ecosystem Builder",
    description: "Expert en Web3, DevRel et construction d'écosystèmes blockchain en Afrique.",
    creator: "@0xWeb3DevRel",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AccessibilityProvider>
            <main id="main-content">
              {children}
            </main>
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
