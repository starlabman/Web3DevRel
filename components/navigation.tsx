"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import type { Language } from "@/lib/translations"

interface NavigationProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Content", href: "#content" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "EN" },
  { code: "fr", name: "Français", flag: "FR" },
  { code: "ewe", name: "Eʋegbe", flag: "EW" },
]

export function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass" : "bg-transparent"
        }`}>
          <a href="#hero" className="font-bold text-lg text-primary">
            AKL
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                asChild
                className="text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg"
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Language selector"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">
                  {languages.find((l) => l.code === currentLang)?.flag}
                </span>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 glass rounded-lg overflow-hidden min-w-[120px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code)
                          setIsLangOpen(false)
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
                          currentLang === lang.code ? "text-primary font-medium" : "text-foreground"
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
