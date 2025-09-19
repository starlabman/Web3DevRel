"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Menu, X, Globe } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/components/language-switcher"
import { useState } from "react"
import { Language } from "@/lib/translations"

interface NavigationProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export function Navigation({ currentLang, onLanguageChange }: NavigationProps) {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navItems = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.journey"), href: "#parcours" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.mentorship"), href: "#mentorship" },
    { label: t("nav.contact"), href: "#contact" },
  ]

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/0xWeb3DevRel", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/in/starlabman", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/starlabman", label: "GitHub" },
    { icon: Mail, href: "mailto:akodjolabore@gmail.com", label: "Email" },
  ]

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ewe", name: "Eʋegbe", flag: "🇹🇬" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleLangMenu = () => {
    setIsLangOpen(!isLangOpen)
  }

  const closeLangMenu = () => {
    setIsLangOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="font-bold text-xl text-primary">
              AKL
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-full"
                >
                  <a href={item.href} onClick={closeMenu}>{item.label}</a>
                </Button>
              ))}
            </div>

            {/* Desktop Social Links & Language */}
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-primary hover:bg-primary/20 rounded-full"
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
              
              {/* Language Switcher */}
              <div className="relative">
                <motion.button
                  onClick={toggleLangMenu}
                  className="flex items-center gap-1 px-3 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">{languages.find((lang) => lang.code === currentLang)?.flag}</span>
                </motion.button>

                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 bg-background/95 backdrop-blur-md border border-border rounded-lg overflow-hidden z-50 min-w-[120px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code as Language)
                          closeLangMenu()
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-3 ${
                          currentLang === lang.code ? "bg-accent" : ""
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="text-muted-foreground hover:text-foreground"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-white/10"
                  >
                    <a href={item.href} onClick={closeMenu}>{item.label}</a>
                  </Button>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="text-muted-foreground hover:text-primary hover:bg-primary/20"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                          <social.icon className="w-4 h-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                  
                  {/* Mobile Language Switcher */}
                  <div className="relative">
                    <motion.button
                      onClick={toggleLangMenu}
                      className="flex items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm font-medium">{languages.find((lang) => lang.code === currentLang)?.flag}</span>
                    </motion.button>

                    {isLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 right-0 bg-background/95 backdrop-blur-md border border-border rounded-lg overflow-hidden z-50 min-w-[120px]"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              onLanguageChange(lang.code as Language)
                              closeLangMenu()
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-accent transition-colors flex items-center gap-3 ${
                              currentLang === lang.code ? "bg-accent" : ""
                            }`}
                          >
                            <span>{lang.flag}</span>
                            <span className="text-sm">{lang.name}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
