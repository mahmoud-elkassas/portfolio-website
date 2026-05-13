/** Shared between server (layout) and client (LocaleProvider). Not a client module. */
export const PORTFOLIO_LOCALE_KEY = "portfolio-locale" as const

export type PortfolioLocale = "en" | "ar"

export function parsePortfolioLocale(value: string | undefined): PortfolioLocale {
  return value === "ar" ? "ar" : "en"
}
