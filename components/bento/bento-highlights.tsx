"use client"

import { motion } from "framer-motion"
import { Cpu, Gauge, Radar, Sparkles, type LucideIcon } from "lucide-react"
import { useMemo } from "react"

import { Reveal } from "@/components/motion/reveal"
import { SpotlightSurface } from "@/components/effects/spotlight-surface"
import { Badge } from "@/components/ui/badge"
import type { MessageKey } from "@/data/messages"
import { useT } from "@/lib/locale-context"

const tileDefs: {
  titleKey: MessageKey
  bodyKey: MessageKey
  icon: LucideIcon
  span: string
}[] = [
  {
    titleKey: "bento_tile1_title",
    bodyKey: "bento_tile1_body",
    icon: Sparkles,
    span: "md:col-span-2",
  },
  {
    titleKey: "bento_tile2_title",
    bodyKey: "bento_tile2_body",
    icon: Radar,
    span: "",
  },
  {
    titleKey: "bento_tile3_title",
    bodyKey: "bento_tile3_body",
    icon: Gauge,
    span: "",
  },
  {
    titleKey: "bento_tile4_title",
    bodyKey: "bento_tile4_body",
    icon: Cpu,
    span: "md:col-span-2",
  },
]

export function BentoHighlights() {
  const t = useT()

  const tiles = useMemo(
    () =>
      tileDefs.map((def) => ({
        ...def,
        title: t(def.titleKey),
        body: t(def.bodyKey),
      })),
    [t]
  )

  return (
    <section className="relative px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <Badge variant="outline" className="mb-3 rounded-full border-primary/30">
            {t("bento_eyebrow")}
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("bento_title")}{" "}
            <span className="text-muted-foreground">{t("bento_title_muted")}</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{t("bento_sub")}</p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.titleKey}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={tile.span}
            >
              <SpotlightSurface className="h-full border border-border/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-border/60 bg-background/60 p-2 text-primary">
                    <tile.icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{tile.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tile.body}</p>
              </SpotlightSurface>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
