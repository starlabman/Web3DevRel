"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Réalisations", href: "#projects" },
  { label: "Tweets", href: "#tweets" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Twitter, href: "https://x.com/your_handle", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/your_profile", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/your_handle", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@yourdomain.com", label: "Email" },
]

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="font-bold text-xl text-primary">
              AKL
            </motion.div>

            {/* Navigation Pills */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-full"
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
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
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
