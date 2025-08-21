"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface AccessibilityContextType {
  reducedMotion: boolean
  highContrast: boolean
  fontSize: "normal" | "large" | "x-large"
  setReducedMotion: (value: boolean) => void
  setHighContrast: (value: boolean) => void
  setFontSize: (size: "normal" | "large" | "x-large") => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState<"normal" | "large" | "x-large">("normal")

  useEffect(() => {
    // Vérifier les préférences système
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    // Appliquer les styles d'accessibilité
    const root = document.documentElement
    
    if (reducedMotion) {
      root.style.setProperty("--animation-duration", "0.01ms")
    } else {
      root.style.removeProperty("--animation-duration")
    }

    if (highContrast) {
      root.classList.add("high-contrast")
    } else {
      root.classList.remove("high-contrast")
    }

    const fontSizeMap = {
      normal: "16px",
      large: "18px",
      "x-large": "20px"
    }

    root.style.fontSize = fontSizeMap[fontSize]
  }, [reducedMotion, highContrast, fontSize])

  return (
    <AccessibilityContext.Provider
      value={{
        reducedMotion,
        highContrast,
        fontSize,
        setReducedMotion,
        setHighContrast,
        setFontSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider")
  }
  return context
}
