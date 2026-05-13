"use client"

import { useEffect, useRef } from "react"

import { useMounted } from "@/hooks/use-mounted"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  a: number
}

export function ParticleField() {
  const mounted = useMounted()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduce = usePrefersReducedMotion()

  useEffect(() => {
    if (!mounted || reduce) return undefined
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let frame = 0
    let particles: Particle[] = []

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = parent.clientWidth * dpr
      canvas.height = parent.clientHeight * dpr
      canvas.style.width = `${parent.clientWidth}px`
      canvas.style.height = `${parent.clientHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = Array.from({ length: 48 }, () => ({
        x: Math.random() * parent.clientWidth,
        y: Math.random() * parent.clientHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        a: Math.random() * 0.45 + 0.1,
      }))
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement as Element)

    const draw = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 14)
        gradient.addColorStop(0, `rgba(129,140,248,${p.a})`)
        gradient.addColorStop(1, "rgba(129,140,248,0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 10, 0, Math.PI * 2)
        ctx.fill()
      }

      frame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
    }
  }, [mounted, reduce])

  if (!mounted || reduce) return null

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      aria-hidden
    />
  )
}
