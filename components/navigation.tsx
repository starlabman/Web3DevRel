"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Menu, X } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/components/language-switcher"
import { useState } from "react"

export function Navigation() {
  const { language } = useLanguage()
  const { t } = useTranslation(language)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    { icon: Mail, href: "mailto:hello@0xweb3devrel.com", label: "Email" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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

            {/* Desktop Social Links */}
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
                <div className="flex items-center gap-2 pt-2">
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
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  )
}
