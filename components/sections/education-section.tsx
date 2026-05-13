"use client"

import { GraduationCap, Trophy, Zap } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { certifications, education, languages } from "@/data/education"
import { useT } from "@/lib/locale-context"

const certIcon = {
  trophy: Trophy,
  zap: Zap,
}

export function EducationSection() {
  const t = useT()

  return (
    <section id="education" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("education_eyebrow")}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("education_title")}{" "}
            <span className="text-muted-foreground">{t("education_title_muted")}</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="glass-surface h-full border-border/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <GraduationCap className="size-5 text-primary" />
                  {t("education_degree_label")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((item) => (
                  <div key={item.degree} className="border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-lg font-semibold text-foreground">{item.degree}</p>
                    <p className="text-sm text-muted-foreground">{item.school}</p>
                    <p className="mt-2 font-mono text-xs text-muted-foreground">{item.period}</p>
                  </div>
                ))}
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {t("education_languages")}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card className="glass-surface h-full border-border/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Trophy className="size-5 text-primary" />
                  {t("education_certs_label")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert) => {
                  const Icon = certIcon[cert.icon as keyof typeof certIcon] ?? Trophy
                  return (
                    <div
                      key={cert.name}
                      className="flex gap-3 border-b border-border/60 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="flex size-11 items-center justify-center rounded-xl border border-border/70 bg-muted/30">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} · {cert.date}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
