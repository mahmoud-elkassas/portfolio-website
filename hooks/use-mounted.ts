"use client"

import { useEffect, useState } from "react"

/** True only after the first client commit — use to avoid SSR/CSR mismatches from browser-only APIs or motion. */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}
