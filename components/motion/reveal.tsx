"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import { useMounted } from "@/hooks/use-mounted"
import { fadeUp } from "@/lib/motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()
  const mounted = useMounted()

  if (!mounted) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={reduce ? 0 : delay}
      transition={reduce ? { duration: 0.01 } : undefined}
    >
      {children}
    </motion.div>
  )
}
