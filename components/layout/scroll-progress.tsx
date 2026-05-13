"use client"

import { motion, useSpring } from "framer-motion"
import { useEffect } from "react"

import { useMounted } from "@/hooks/use-mounted"
import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function ScrollProgress() {
  const mounted = useMounted()
  const progress = useScrollProgress()
  const spring = useSpring(progress, { stiffness: 120, damping: 24, mass: 0.2 })

  useEffect(() => {
    spring.set(progress)
  }, [progress, spring])

  if (!mounted) {
    return (
      <div className="pointer-events-none fixed inset-x-0 top-0 z-300 h-[2px] bg-transparent" />
    )
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-300 h-[2px] bg-transparent">
      <motion.div
        className="h-full origin-inline-start bg-linear-to-r from-primary via-indigo-400 to-cyan-300"
        style={{ scaleX: spring, width: "100%" }}
      />
    </div>
  )
}
