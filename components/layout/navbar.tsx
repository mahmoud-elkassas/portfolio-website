"use client"

import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

import { navLinks } from "@/data/navigation"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useLocale, useT } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { scrollY } = useScroll()
  const [elevated, setElevated] = useState(false)
  const { locale, setLocale, isRtl } = useLocale()
  const t = useT()

  useMotionValueEvent(scrollY, "change", (value) => {
    setElevated(value > 12)
  })

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-250 border-b border-transparent transition-colors",
        elevated && "border-border/60 bg-background/70 backdrop-blur-xl"
      )}
      initial={false}
      animate={{
        boxShadow: elevated
          ? "0 10px 60px rgba(0,0,0,0.35)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {t("site_name")}
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div
            className="flex items-center rounded-lg border border-border/60 bg-muted/30 p-0.5"
            role="group"
            aria-label={t("nav_language")}
          >
            <Button
              type="button"
              size="sm"
              variant={locale === "en" ? "default" : "ghost"}
              className="h-7 px-2.5 text-xs"
              onClick={() => setLocale("en")}
            >
              {t("nav_lang_en")}
            </Button>
            <Button
              type="button"
              size="sm"
              variant={locale === "ar" ? "default" : "ghost"}
              className="h-7 px-2.5 text-xs"
              onClick={() => setLocale("ar")}
            >
              {t("nav_lang_ar")}
            </Button>
          </div>
          <Link
            href="#contact"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            {t("nav_hire")}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center rounded-lg border border-border/60 bg-muted/30 p-0.5">
            <Button
              type="button"
              size="sm"
              variant={locale === "en" ? "default" : "ghost"}
              className="h-7 px-2 text-xs"
              onClick={() => setLocale("en")}
            >
              {t("nav_lang_en")}
            </Button>
            <Button
              type="button"
              size="sm"
              variant={locale === "ar" ? "default" : "ghost"}
              className="h-7 px-2 text-xs"
              onClick={() => setLocale("ar")}
            >
              {t("nav_lang_ar")}
            </Button>
          </div>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label={t("nav_open_menu")} />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side={isRtl ? "left" : "right"} className="gap-6">
              <SheetHeader>
                <SheetTitle>{t("nav_sheet_title")}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 px-2 pb-6">
                {navLinks.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                      />
                    }
                  >
                    {t(item.labelKey)}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <Link
                      href="#contact"
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "justify-center"
                      )}
                    />
                  }
                >
                  {t("nav_hire")}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
