import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { LanguageHtmlWrapper } from "./language-html-wrapper"

import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "AGBETSIASSI KODJO LABORE - Portfolio & Mémo",
  description: "Portfolio interactif et mémo personnel - Réalisations, Threads, Posts LinkedIn",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${dmSans.variable} dark`}> {/* Keep original lang="fr" for initial render */}
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: var(--font-dm-sans);
}
        `}</style>
      </head>
      <body className="font-sans antialiased">
        <LanguageHtmlWrapper>{children}</LanguageHtmlWrapper>
      </body>
    </html>
  )
}
