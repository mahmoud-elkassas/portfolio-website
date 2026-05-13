"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView, useMotionValue, useSpring } from "framer-motion"

type AnimatedCounterProps = {
  value: number
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20%" })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 120, damping: 18, mass: 0.4 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    })
    return () => controls.stop()
  }, [inView, motionValue, value])

  useEffect(() => {
    return spring.on("change", (latest) => {
      const rounded =
        decimals > 0 ? Number(latest.toFixed(decimals)) : Math.round(latest)
      setDisplay(rounded)
    })
  }, [decimals, spring])

  return (
    <span ref={ref} suppressHydrationWarning>
      {display}
      {suffix}
    </span>
  )
}
