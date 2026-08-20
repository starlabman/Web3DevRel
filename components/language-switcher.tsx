"use client"

import { createContext, useContext } from "react"
import type { Language } from "@/lib/translations"

const LanguageContext = createContext<{
  language: Language
  setLanguage: (lang: Language) => void
}>({
  language: "en",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)
export const LanguageProvider = LanguageContext.Provider
