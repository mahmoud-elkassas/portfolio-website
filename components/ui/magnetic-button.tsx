"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import type { ComponentProps, ReactNode } from "react"
import { useRef } from "react"

import { cn } from "@/lib/utils"

type MagneticButtonProps = ComponentProps<typeof motion.a> & {
  children: ReactNode
  strength?: number
}

export function MagneticButton({
  className,
  children,
  strength = 0.35,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 20 })
  const springY = useSpring(y, { stiffness: 260, damping: 20 })
  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      style={{ transform }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn("inline-flex", className)}
      {...props}
    >
      {children}
    </motion.a>
  )
}
