"use client"

import { motion, useSpring } from "framer-motion"
import { useEffect } from "react"

import { useMounted } from "@/hooks/use-mounted"
import { usePointer } from "@/hooks/use-pointer"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function CursorGlow() {
  const mounted = useMounted()
  const { x, y } = usePointer()
  const reduce = usePrefersReducedMotion()
  const springX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.2 })

  useEffect(() => {
    springX.set(x)
    springY.set(y)
  }, [springX, springY, x, y])

  if (!mounted || reduce) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-120 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl mix-blend-screen md:block"
      style={{ left: springX, top: springY }}
    />
  )
}
