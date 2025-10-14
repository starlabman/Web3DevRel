"use client"

import React, { useEffect } from "react"
import { useLanguage } from "../components/language-switcher"

interface LanguageHtmlWrapperProps {
  children: React.ReactNode
}

export function LanguageHtmlWrapper({ children }: LanguageHtmlWrapperProps) {
  const { language } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <>{children}</>
}
