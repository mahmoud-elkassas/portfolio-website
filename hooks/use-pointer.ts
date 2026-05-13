"use client"

import { useEffect, useState } from "react"

export function usePointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (event: PointerEvent) => {
      setPoint({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [])

  return point
}
