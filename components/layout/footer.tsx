"use client"

import Link from "next/link"

import { siteConfig } from "@/data/site"
import { useT } from "@/lib/locale-context"

export function Footer() {
  const t = useT()

  return (
    <footer className="border-t border-border/60 bg-background/80 py-10 text-center text-xs text-muted-foreground">
      <p className="font-mono text-[0.72rem] tracking-tight">
        © {new Date().getFullYear()} {t("site_name")} · {siteConfig.location} · {t("footer_built")}
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[0.72rem]">
        <Link className="hover:text-foreground" href={siteConfig.github}>
          GitHub
        </Link>
        <span className="text-border">/</span>
        <Link className="hover:text-foreground" href={siteConfig.linkedin}>
          LinkedIn
        </Link>
        <span className="text-border">/</span>
        <Link className="hover:text-foreground" href={`mailto:${siteConfig.email}`}>
          Email
        </Link>
      </div>
    </footer>
  )
}
