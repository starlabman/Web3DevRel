"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  currentLang: string
  onLanguageChange: (lang: string) => void
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ewe", name: "Eʋegbe", flag: "🇹🇬" },
  ]

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{languages.find((lang) => lang.code === currentLang)?.flag}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left hover:bg-white/20 transition-colors flex items-center gap-3 ${
                currentLang === lang.code ? "bg-white/20" : ""
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-white text-sm">{lang.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

import { createContext, useContext } from "react"
import type { Language } from "@/lib/translations"

const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
}>({
  language: "fr",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)
export const LanguageProvider = LanguageContext.Provider
