import { translations, type Language } from "@/lib/translations"

export const useTranslation = (language: Language) => {
  const t = (key: string): string => {
    if (!translations || !translations[language]) {
      console.warn(`Translations not available for language: ${language}`)
      return key
    }

    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
      if (value === null || value === undefined) {
        break
      }
    }

    if (typeof value === "string" && value.trim() !== "") {
      return value
    }

    console.warn(`Translation missing or invalid for key: ${key} in language: ${language}, got:`, typeof value, value)
    return key
  }

  return { t }
}
