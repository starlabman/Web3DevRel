"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { ProofSection } from "@/components/sections/proof"
import { ExperienceSection } from "@/components/sections/experience"
import { FeaturedProjects } from "@/components/sections/projects"
import { EcosystemImpact } from "@/components/sections/ecosystem-impact"
import { ThoughtLeadership } from "@/components/sections/thought-leadership"
import { ServicesSection } from "@/components/sections/services"
import { ContactSection } from "@/components/sections/contact"
import { LanguageProvider } from "@/components/language-switcher"
import type { Language } from "@/lib/translations"

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>("en")

  return (
    <LanguageProvider value={{ language: currentLang, setLanguage: setCurrentLang }}>
      <Navigation currentLang={currentLang} onLanguageChange={(lang) => setCurrentLang(lang as Language)} />
      <Hero currentLang={currentLang} />
      <ProofSection currentLang={currentLang} />
      <ExperienceSection currentLang={currentLang} />
      <FeaturedProjects currentLang={currentLang} />
      <EcosystemImpact currentLang={currentLang} />
      <ThoughtLeadership currentLang={currentLang} />
      <ServicesSection currentLang={currentLang} />
      <ContactSection />

      <footer className="py-8 px-4 border-t border-border/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AGBETSIASSI KODJO LABORE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/0xWeb3DevRel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/in/starlabman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/starlabman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </LanguageProvider>
  )
}
