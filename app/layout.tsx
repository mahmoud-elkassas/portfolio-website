import type { Metadata } from "next"
import { cookies } from "next/headers"
import { Geist_Mono, Inter, Noto_Sans_Arabic } from "next/font/google"

import type { Locale } from "@/data/messages"
import { Navbar } from "@/components/layout/navbar"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { Providers } from "@/components/providers"
import { siteConfig } from "@/data/site"
import { parsePortfolioLocale, PORTFOLIO_LOCALE_KEY } from "@/lib/locale-constants"

import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
})

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: `${siteConfig.role} — ${siteConfig.tagline}`,
  keywords: [
    "Mahmoud Elkassas",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Cairo",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.tagline,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const rawLocale = cookieStore.get(PORTFOLIO_LOCALE_KEY)?.value
  const localeCookiePresent = rawLocale !== undefined && rawLocale !== ""
  const initialLocale = parsePortfolioLocale(rawLocale) as Locale
  const htmlLang = initialLocale === "ar" ? "ar" : "en"
  const htmlDir = initialLocale === "ar" ? "rtl" : "ltr"

  return (
    <html lang={htmlLang} dir={htmlDir} className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansArabic.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <Providers initialLocale={initialLocale} localeCookiePresent={localeCookiePresent}>
          <ScrollProgress />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
