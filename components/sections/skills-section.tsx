"use client"

import { motion } from "framer-motion"
import * as Icons from "lucide-react"
import type { ComponentType } from "react"

import { Reveal } from "@/components/motion/reveal"
import { SpotlightSurface } from "@/components/effects/spotlight-surface"
import type { MessageKey } from "@/data/messages"
import { skillCategoryIconName, skillPillIconName } from "@/data/skill-icons"
import { skillCategories } from "@/data/skills"
import { useT } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

function LucideByName({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = (Icons as unknown as Record<string, ComponentType<{ className?: string }>>)[name]
  if (!Icon) {
    return <Icons.Tag className={className} aria-hidden />
  }
  return <Icon className={className} aria-hidden />
}

export function SkillsSection() {
  const t = useT()

  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("skills_eyebrow")}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("skills_title")}{" "}
            <span className="text-muted-foreground">{t("skills_title_muted")}</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{t("skills_sub")}</p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, index) => (
            <motion.div
              key={group.id}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <SpotlightSurface className="h-full border border-border/60 p-6">
                <div className="flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary">
                    <LucideByName name={skillCategoryIconName(group.id)} className="size-4" />
                  </span>
                  {t(`skills_group_${group.id}` as MessageKey)}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]",
                        skill.highlight &&
                          "border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                      )}
                    >
                      <LucideByName
                        name={skillPillIconName(skill.name)}
                        className={cn(
                          "size-3.5 shrink-0 opacity-80",
                          skill.highlight && "text-primary opacity-100"
                        )}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </SpotlightSurface>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
