"use client"

import type { ReactNode } from "react"
import { useRef } from "react"

import { cn } from "@/lib/utils"

type SpotlightSurfaceProps = {
  children: ReactNode
  className?: string
}

export function SpotlightSurface({ children, className }: SpotlightSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null)

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    node.style.setProperty("--spotlight-x", `${x}%`)
    node.style.setProperty("--spotlight-y", `${y}%`)
  }

  const leave = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty("--spotlight-x", "50%")
    node.style.setProperty("--spotlight-y", "0%")
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={cn("spotlight-card rounded-2xl", className)}
    >
      {children}
    </div>
  )
}
