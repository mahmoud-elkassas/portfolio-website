import { ImageResponse } from "next/og"

import { siteConfig } from "@/data/site"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#e8e8ef",
          backgroundColor: "#05060a",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
            }}
          />
          <span style={{ letterSpacing: 2, textTransform: "uppercase", color: "#9ca3af" }}>
            Portfolio
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 28, color: "#a5adc0", maxWidth: 900 }}>
            {siteConfig.role}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#7c8498" }}>
          <span>React · Next.js · TypeScript</span>
          <span>{siteConfig.location}</span>
        </div>
      </div>
    ),
    size
  )
}
