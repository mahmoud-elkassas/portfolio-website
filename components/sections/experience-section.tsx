"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { experience } from "@/data/experience"
import { useT } from "@/lib/locale-context"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function ExperienceSection() {
  const t = useT()
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("experience_eyebrow")}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("experience_title")}{" "}
            <span className="text-muted-foreground">{t("experience_title_muted")}</span>
          </h2>
        </Reveal>

        <motion.div
          className="space-y-px overflow-hidden rounded-3xl border border-border/70 bg-border/70"
          variants={staggerContainer}
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experience.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              custom={index * 0.05}
              className="bg-background/90 p-6 transition hover:bg-muted/30 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Briefcase className="size-4" />
                    <span className="font-semibold text-foreground">{item.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground sm:text-right">{item.period}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {item.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border/60 bg-muted/20 px-3 py-3 text-center"
                  >
                    <p className="text-lg font-semibold text-emerald-300">{metric.value}</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="my-6 bg-border/60" />

              <ul className="space-y-3 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1 text-muted-foreground">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full text-[0.7rem]">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
