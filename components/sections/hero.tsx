"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

import { useMounted } from "@/hooks/use-mounted";
import {
  AppWindow,
  ArrowRight,
  Atom,
  Braces,
  Brain,
  Download,
  LayoutDashboard,
  Radio,
  ScanText,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { GridBackground } from "@/components/effects/grid-background";
import { ParticleField } from "@/components/effects/particle-field";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { siteConfig } from "@/data/site";
import { useT } from "@/lib/locale-context";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const stack: { label: string; icon: LucideIcon }[] = [
  { label: "React.js", icon: Atom },
  { label: "Next.js", icon: AppWindow },
  { label: "TypeScript", icon: Braces },
  { label: "Tailwind CSS", icon: Wind },
  { label: "AI APIs", icon: Brain },
  { label: "Realtime", icon: Radio },
  { label: "OCR", icon: ScanText },
  { label: "SaaS UI", icon: LayoutDashboard },
];

export function Hero() {
  const t = useT();
  const mounted = useMounted();

  const metrics = useMemo(
    () => [
      { label: t("hero_metric_years"), value: 4, suffix: "+" },
      { label: t("hero_metric_apps"), value: 20, suffix: "+" },
      { label: t("hero_metric_satisfaction"), value: 100, suffix: "%" },
      { label: t("hero_metric_performance"), value: 40, suffix: "%" },
    ],
    [t],
  );

  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-32 sm:px-6"
    >
      <GridBackground />
      <ParticleField />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        variants={staggerContainer}
        initial={false}
        animate="visible"
      >
        <motion.div variants={fadeUp} custom={0}>
          <Badge
            variant="outline"
            className="glass-surface mb-6 gap-2 rounded-full border-primary/30 px-4 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t("hero_badge")}
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">{t("hero_title_1")}</span>
          <span className="text-muted-foreground/80">{t("hero_title_2")}</span>
          {t("hero_title_3") ? (
            <>
              <br />
              {t("hero_title_3")}
            </>
          ) : null}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-4 max-w-2xl text-pretty text-base font-medium text-foreground sm:text-lg"
        >
          {t("hero_lead")}
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          {t("hero_intro")}
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-3 text-sm text-muted-foreground"
        >
          {siteConfig.location} ·{" "}
          <Link
            className="text-foreground hover:underline"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </Link>
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton
            href="#live"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "rounded-xl px-6 shadow-lg shadow-primary/25",
            )}
          >
            {t("hero_cta_projects")}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </MagneticButton>
          <MagneticButton
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-xl border-dashed px-6",
            )}
          >
            {t("hero_cta_cv")}
            <Download className="size-4" />
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {stack.map(({ label, icon: Icon }, index) => (
            <motion.span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md"
              initial={false}
              animate={
                mounted
                  ? { y: [0, -6, 0] }
                  : { y: 0 }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              }}
            >
              <Icon className="size-3.5 shrink-0 text-primary" aria-hidden />
              {label}
            </motion.span>
          ))}
        </motion.div>

        <Reveal className="mt-14 w-full max-w-3xl" delay={0.2}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/60 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-surface bg-background/80 px-4 py-6 text-center"
              >
                <div className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                  />
                </div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}
