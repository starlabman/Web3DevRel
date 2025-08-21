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

    // Check if value is a valid string
    if (typeof value === "string" && value.trim() !== "") {
      return value
    }

    // Try fallback to English if current language fails
    if (language !== "en" && translations.en) {
      let fallbackValue: any = translations.en
      for (const k of keys) {
        fallbackValue = fallbackValue?.[k]
        if (fallbackValue === null || fallbackValue === undefined) {
          break
        }
      }
      
      if (typeof fallbackValue === "string" && fallbackValue.trim() !== "") {
        console.warn(`Translation missing for key: ${key} in language: ${language}, using English fallback`)
        return fallbackValue
      }
    }

    console.warn(`Translation missing or invalid for key: ${key} in language: ${language}, got:`, typeof value, value)
    return key.split(".").pop() || key
  }

  return { t }
}
