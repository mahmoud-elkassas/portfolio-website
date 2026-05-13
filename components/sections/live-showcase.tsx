"use client"

import * as Icons from "lucide-react"
import Link from "next/link"
import type { ComponentType } from "react"
import { Suspense, useMemo, useState } from "react"
import { ExternalLink } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { liveFilterIds, liveProjects, type LiveCategory } from "@/data/live-projects"
import { liveCategoryLabelKey, liveFilterKey } from "@/data/messages"
import { useT } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

function LiveIcon({ name }: { name: string }) {
  const Icon = (Icons as unknown as Record<string, ComponentType<{ className?: string }>>)[name]
  if (!Icon) {
    return <Icons.Globe className="size-5 text-primary" />
  }
  return <Icon className="size-5 text-primary" />
}

export function LiveShowcase() {
  const t = useT()
  const [filter, setFilter] = useState<LiveCategory>("all")
  const [preview, setPreview] = useState<{
    url: string
    title: string
    allowIframe: boolean
  } | null>(null)

  const filtered = useMemo(() => {
    if (filter === "all") return liveProjects
    return liveProjects.filter((project) => project.category === filter)
  }, [filter])

  const counts = useMemo(() => {
    const base: Record<LiveCategory, number> = {
      all: liveProjects.length,
      ai: 0,
      maps: 0,
      tools: 0,
      ecom: 0,
      business: 0,
    }
    for (const project of liveProjects) {
      base[project.category] += 1
    }
    return base
  }, [])

  return (
    <section id="live" className="relative border-y border-border/60 bg-muted/10 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("live_eyebrow")}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("live_title")}{" "}
            <span className="text-muted-foreground">{t("live_title_muted")}</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">{t("live_sub")}</p>
        </Reveal>

        <div className="mb-8 flex flex-wrap gap-2">
          {liveFilterIds.map((id) => (
            <Button
              key={id}
              type="button"
              size="sm"
              variant={filter === id ? "default" : "outline"}
              className={cn(
                "rounded-full border-dashed font-mono text-[0.72rem]",
                filter === id && "shadow-lg shadow-primary/25"
              )}
              onClick={() => setFilter(id)}
            >
              {t(liveFilterKey(id))}
              <span
                className={cn(
                  "ms-1 text-[0.65rem]",
                  filter === id ? "text-primary-foreground/80" : "text-muted-foreground"
                )}
              >
                ({counts[id]})
              </span>
            </Button>
          ))}
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <LiveCard
              key={project.id}
              project={project}
              onPreview={() =>
                setPreview({
                  url: project.url,
                  title: project.name,
                  allowIframe: project.allowIframe !== false,
                })
              }
            />
          ))}
        </div>
      </div>

      <Dialog open={Boolean(preview)} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent
          showCloseButton
          className="flex h-[85vh] max-w-[1100px]! w-[calc(100%-1rem)] flex-col gap-0 overflow-hidden rounded-2xl border-border/70 bg-card p-0 sm:h-[82vh]"
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{preview?.title ?? "Live preview"}</DialogTitle>
            <DialogDescription>{t("live_modal_desc")}</DialogDescription>
          </DialogHeader>
          {preview ? (
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <span className="size-3 shrink-0 rounded-full bg-red-500/90" />
                  <span className="size-3 shrink-0 rounded-full bg-amber-400/90" />
                  <span className="size-3 shrink-0 rounded-full bg-emerald-400/90" />
                  <span className="ms-3 truncate rounded-md border border-border/60 bg-muted/40 px-3 py-1 text-sm font-medium text-foreground">
                    {preview.title}
                  </span>
                </div>
                <Link
                  href={preview.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "gap-2")}
                >
                  {t("live_open")}
                  <ExternalLink className="size-4" />
                </Link>
              </div>
              {preview.allowIframe ? (
                <Suspense
                  fallback={
                    <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
                      Loading preview…
                    </div>
                  }
                >
                  <iframe
                    title={preview.title}
                    src={preview.url}
                    className="h-full w-full flex-1 bg-white"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Suspense>
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-muted/20 px-6 py-10 text-center">
                  <p className="max-w-md text-sm text-muted-foreground">{t("live_embed_blocked")}</p>
                  <Link
                    href={preview.url}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ variant: "default", size: "sm" }), "gap-2")}
                  >
                    {t("live_open_live")}
                    <ExternalLink className="size-4" />
                  </Link>
                </div>
              )}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}

type LiveCardProps = {
  project: (typeof liveProjects)[number]
  onPreview: () => void
}

function LiveCard({ project, onPreview }: LiveCardProps) {
  const t = useT()
  const canEmbed = project.allowIframe !== false
  const [frameLoaded, setFrameLoaded] = useState(false)

  return (
    <div
      className="relative flex flex-col bg-background/90 transition hover:bg-muted/40"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) return
        onPreview()
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onPreview()
        }
      }}
    >
      <div className="relative h-48 overflow-hidden border-b border-border/60 bg-muted/30">
        {canEmbed ? (
          <>
            <iframe
              title={`${project.name} preview`}
              src={project.url}
              className="pointer-events-none absolute inset-0 h-[200%] w-[200%] origin-top-left scale-50 bg-white"
              loading="lazy"
              onLoad={() => setFrameLoaded(true)}
            />
            {!frameLoaded ? (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-muted/30 text-muted-foreground">
                <LiveIcon name={project.icon} />
                <span className="max-w-[90%] truncate px-2 text-center text-xs font-medium text-foreground">
                  {project.name}
                </span>
              </div>
            ) : null}
          </>
        ) : (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-muted/40 px-3 text-muted-foreground">
            <LiveIcon name={project.icon} />
            <span className="max-w-[90%] truncate text-center text-xs font-medium text-foreground">
              {project.name}
            </span>
            <span className="text-center text-[0.65rem] leading-snug text-muted-foreground">
              {t("live_embed_card_hint")}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 z-20 bg-linear-to-b from-transparent via-transparent to-background/40" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span>{t(liveCategoryLabelKey(project.category))}</span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="rounded-md text-[0.65rem] font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            onClick={(event) => event.stopPropagation()}
          >
            {t("live_open_live")}
            <ExternalLink className="size-4" />
          </Link>
          <span className="text-[0.65rem] text-muted-foreground">{t("live_card_hint")}</span>
        </div>
      </div>
    </div>
  )
}
