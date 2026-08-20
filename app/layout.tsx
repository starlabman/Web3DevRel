import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://web3devrel.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "AGBETSIASSI KODJO LABORE — Web3 DevRel & Ecosystem Builder",
    template: "%s | AGBETSIASSI KODJO LABORE",
  },
  description:
    "Web3 DevRel & Ecosystem Builder. Founder of Africa Blockchain Community, Governor of ETHAfrique, former Lead Web3.js Ambassador. Building developer communities and blockchain ecosystems across Africa.",
  keywords: [
    "Kodjo Labore",
    "Agbetsiassi Kodjo Labore",
    "Web3 DevRel",
    "Developer Relations Africa",
    "Web3 Ecosystem Builder",
    "Blockchain Developer Africa",
    "Web3 Community Builder Africa",
    "Ethereum Africa",
    "DevRel",
    "Developer Advocate",
  ],
  authors: [{ name: "AGBETSIASSI KODJO LABORE" }],
  creator: "AGBETSIASSI KODJO LABORE",
  publisher: "AGBETSIASSI KODJO LABORE",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "AGBETSIASSI KODJO LABORE — Web3 DevRel & Ecosystem Builder",
    description:
      "Founder of Africa Blockchain Community, Governor of ETHAfrique, former Lead Web3.js Ambassador. Building developer communities and blockchain ecosystems across Africa.",
    siteName: "AGBETSIASSI KODJO LABORE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AGBETSIASSI KODJO LABORE — Web3 DevRel & Ecosystem Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGBETSIASSI KODJO LABORE — Web3 DevRel & Ecosystem Builder",
    description:
      "Founder of Africa Blockchain Community, Governor of ETHAfrique. Building developer communities and blockchain ecosystems across Africa.",
    creator: "@0xWeb3DevRel",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a4480" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "AGBETSIASSI KODJO LABORE",
              jobTitle: "Web3 DevRel & Ecosystem Builder",
              url: siteUrl,
              email: "akodjolabore@gmail.com",
              sameAs: [
                "https://x.com/0xWeb3DevRel",
                "https://www.linkedin.com/in/starlabman/",
                "https://github.com/starlabman",
                "https://youtube.com/@starlabman",
              ],
              knowsAbout: [
                "Web3",
                "Blockchain",
                "Developer Relations",
                "Ecosystem Building",
                "Community Building",
                "Ethereum",
                "Developer Education",
              ],
              worksFor: [
                { "@type": "Organization", name: "Africa Blockchain Community" },
                { "@type": "Organization", name: "ETHAfrique" },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="akl-theme"
          disableTransitionOnChange
        >
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
