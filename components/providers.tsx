"use client"

import type { ReactNode } from "react"

import type { Locale } from "@/data/messages"
import { CursorGlow } from "@/components/effects/cursor-glow"
import { LocaleProvider } from "@/lib/locale-context"

type ProvidersProps = {
  children: ReactNode
  initialLocale?: Locale
  localeCookiePresent?: boolean
}

export function Providers({
  children,
  initialLocale = "en",
  localeCookiePresent = false,
}: ProvidersProps) {
  return (
    <LocaleProvider initialLocale={initialLocale} localeCookiePresent={localeCookiePresent}>
      <CursorGlow />
      {children}
    </LocaleProvider>
  )
}
