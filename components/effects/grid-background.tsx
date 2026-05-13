export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade opacity-80" />
      <div className="absolute inset-x-0 top-0 mx-auto h-[520px] max-w-5xl bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_65%)]" />
    </div>
  )
}
