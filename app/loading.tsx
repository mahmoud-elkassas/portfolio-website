"use client"

import { Loader2 } from "lucide-react"

import { useT } from "@/lib/locale-context"

export default function Loading() {
  const t = useT()

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-muted-foreground">
      <Loader2 className="size-8 animate-spin text-primary" />
      <p className="text-sm font-medium tracking-tight">{t("loading_text")}</p>
    </div>
  )
}
