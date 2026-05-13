export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  metrics: { label: string; value: string }[]
  bullets: string[]
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    role: "Freelance Frontend Developer",
    company: "Independent · Remote",
    period: "Jan 2022 – Present",
    metrics: [
      { label: "Production apps", value: "10+" },
      { label: "Client satisfaction", value: "95%+" },
      { label: "eCommerce lift", value: "+15%" },
    ],
    bullets: [
      "Shipped production web apps with React.js, Next.js, TypeScript, Tailwind CSS, and Node.js across e-commerce, education, and SaaS.",
      "Improved checkout and mobile UX on multiple stores, contributing to measurable conversion gains.",
      "Delivered mobile-first interfaces that increased engagement and retention on content-heavy products.",
      "Integrated NextAuth, JWT, CMS platforms, Stripe, and other payment gateways.",
      "Maintained long-term contracts with repeat clients through clear communication and reliable delivery.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Stripe",
      "NextAuth",
    ],
  },
  {
    id: "gamers-majlis",
    role: "Frontend Developer",
    company: "Gamers Majlis · Contract, Remote",
    period: "Contract",
    metrics: [
      { label: "Realtime", value: "Chat + boards" },
      { label: "Stack", value: "React / Next" },
    ],
    bullets: [
      "Built a gaming community platform focused on player engagement.",
      "Implemented real-time chat, dynamic leaderboards, and push notifications via WebSockets.",
      "Iterated on UI flows from behavioral insights to grow session duration and activity.",
    ],
    technologies: ["React", "Next.js", "WebSockets", "Tailwind CSS"],
  },
  {
    id: "brains-valley",
    role: "Frontend Developer",
    company: "Brains Valley · Contract, Remote",
    period: "Contract",
    metrics: [
      { label: "Load time", value: "-30%" },
      { label: "Focus", value: "WCAG" },
    ],
    bullets: [
      "Developed responsive web apps for education and corporate training.",
      "Optimized rendering, code splitting, and asset delivery for faster loads.",
      "Improved accessibility and partnered with cross-functional teams on scalable SaaS delivery.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "raya",
    role: "Embedded Systems Engineer",
    company: "RAYA Integration",
    period: "Sep 2022 – Jan 2024",
    metrics: [
      { label: "Reliability", value: "+25%" },
      { label: "Failures", value: "-30%" },
    ],
    bullets: [
      "Improved embedded system reliability through debugging and performance tuning.",
      "Implemented proactive maintenance strategies that reduced system failures.",
      "Led training and mentorship for junior engineers to improve delivery speed.",
    ],
    technologies: ["C", "Embedded Linux", "Debugging", "Hardware"],
  },
]
