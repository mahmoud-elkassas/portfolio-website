"use client"

import Link from "next/link"
import { ArrowUpRight, Star } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { testimonialStats, testimonials } from "@/data/testimonials"
import { siteConfig } from "@/data/site"
import { useT } from "@/lib/locale-context"

const loopItems = [...testimonials, ...testimonials]

function Stars({ score }: { score: number }) {
  const fullStars = Math.floor(score)
  const partial = score - fullStars

  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index < fullStars) {
          return (
            <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
          )
        }
        if (index === fullStars && partial > 0) {
          return (
            <Star
              key={index}
              className="size-4 fill-amber-400 text-amber-400"
              style={{ opacity: Math.max(0.35, partial) }}
            />
          )
        }
        return <Star key={index} className="size-4 text-amber-400/30" />
      })}
    </div>
  )
}

export function TestimonialsSection() {
  const t = useT()
  return (
    <section id="reviews" className="relative overflow-hidden border-y border-border/60 bg-muted/10 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary" />
              {t("testimonials_eyebrow")}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t("testimonials_title")}{" "}
              <span className="text-muted-foreground">{t("testimonials_title_muted")}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href={siteConfig.upwork}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/70 px-4 py-3 text-sm text-muted-foreground shadow-sm transition hover:border-emerald-400/50 hover:text-foreground"
            >
              <span className="font-semibold text-emerald-400">Upwork</span>
              <span className="text-xs">{t("testimonials_upwork_stat")}</span>
              <ArrowUpRight className="size-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background via-background/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background via-background/80 to-transparent" />

        <div className="flex w-max gap-4 animate-marquee px-4 sm:px-6" dir="ltr">
          {loopItems.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="w-[300px] shrink-0 rounded-2xl border border-border/70 bg-card/80 p-5 shadow-lg shadow-primary/5 backdrop-blur-md sm:w-[320px]"
            >
              <div className="flex items-center justify-between gap-2">
                <Stars score={item.score} />
                <span className="font-mono text-xs font-semibold text-amber-300">
                  {item.score.toFixed(1)}
                </span>
              </div>
              <p className="mt-4 border-s-2 border-primary/70 ps-3 text-sm italic leading-relaxed text-muted-foreground">
                “{item.quote}”
              </p>
              <div className="mt-4 text-xs text-muted-foreground">
                <p className="font-semibold text-foreground">{item.project}</p>
                <p>{item.meta}</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-[0.7rem] text-muted-foreground">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 text-[0.65rem]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[0.65rem]">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 px-4 sm:grid-cols-4 sm:px-6">
        {testimonialStats.map((stat) => (
          <div key={stat.labelKey} className="bg-background/90 px-4 py-5 text-center">
            <p className="text-2xl font-semibold text-foreground sm:text-3xl">
              {stat.value}
              <span className="text-emerald-400">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {t(stat.labelKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
