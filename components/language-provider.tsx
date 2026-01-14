"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Language, type Translations } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("keppler-lang") as Language | null

    if (stored && (stored === "en" || stored === "es")) {
      setLanguageState(stored)
    } else {
      const browserLang = navigator.language || (navigator as any).userLanguage || "es"
      const detectedLang: Language = browserLang.toLowerCase().startsWith("en") ? "en" : "es"
      setLanguageState(detectedLang)
      localStorage.setItem("keppler-lang", detectedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted) {
      localStorage.setItem("keppler-lang", lang)
    }
  }

  const t = translations[language]

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
