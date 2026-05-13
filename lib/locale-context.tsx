"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import { type Locale, type MessageKey, messages } from "@/data/messages"
import { PORTFOLIO_LOCALE_KEY } from "@/lib/locale-constants"

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  dir: "ltr" | "rtl"
  isRtl: boolean
  t: (key: MessageKey) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function writeLocalePersistence(next: Locale) {
  window.localStorage.setItem(PORTFOLIO_LOCALE_KEY, next)
  document.cookie = `${PORTFOLIO_LOCALE_KEY}=${next};path=/;max-age=31536000;SameSite=Lax`
}

export function LocaleProvider({
  children,
  initialLocale = "en",
  localeCookiePresent = false,
}: {
  children: ReactNode
  initialLocale?: Locale
  localeCookiePresent?: boolean
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(PORTFOLIO_LOCALE_KEY)
    if (!localeCookiePresent && (stored === "ar" || stored === "en")) {
      setLocaleState(stored)
      writeLocalePersistence(stored)
    } else if (localeCookiePresent) {
      window.localStorage.setItem(PORTFOLIO_LOCALE_KEY, initialLocale)
    }
    setReady(true)
  }, [initialLocale, localeCookiePresent])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    writeLocalePersistence(next)
  }, [])

  useEffect(() => {
    if (!ready) return
    const dir = locale === "ar" ? "rtl" : "ltr"
    const lang = locale === "ar" ? "ar" : "en"
    document.documentElement.setAttribute("dir", dir)
    document.documentElement.setAttribute("lang", lang)
  }, [locale, ready])

  const t = useCallback(
    (key: MessageKey) => messages[locale][key] ?? messages.en[key],
    [locale]
  )

  const value = useMemo((): LocaleContextValue => {
    const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr"
    return {
      locale,
      setLocale,
      dir,
      isRtl: locale === "ar",
      t,
    }
  }, [locale, setLocale, t])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return ctx
}

export function useT() {
  return useLocale().t
}
