import type { MessageKey } from "@/data/messages"

export type Testimonial = {
  id: string
  quote: string
  project: string
  meta: string
  score: number
  tags: string[]
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Mahmoud is very professional and capable developer, he delivered exactly what we discussed and made sure it is delivered with very high quality, would be happy to work again…",
    project: "Mapplic Maps Replica",
    meta: "Frontend Developer · Fixed $250",
    score: 5,
    tags: ["Professional", "Quality", "Collaborative"],
    date: "Dec 2025",
  },
  {
    id: "t2",
    quote:
      "Mahmoud is an exceptional IT engineer with remarkable problem-solving abilities. He consistently delivers smart, effective solutions, and identified a more cost-efficient approach without sacrificing quality…",
    project: "File Management Web App",
    meta: "Full-Stack · Node.js + React · Fixed $10",
    score: 5,
    tags: ["Solution Oriented", "Quality"],
    date: "Aug 2025",
  },
  {
    id: "t3",
    quote:
      "I've had the pleasure of working with Mahmoud, and I can say he's an outstanding IT engineer. His problem-solving skills are impressive, and he consistently comes up with smart, efficient solutions…",
    project: "File Manager + AI Image Annotation Tool",
    meta: "Full-Stack · Two Projects · Fixed $10",
    score: 5,
    tags: ["Solution Oriented", "Quality"],
    date: "Aug 2025",
  },
  {
    id: "t4",
    quote:
      "Mahmoud is highly professional and exceptionally skilled as an IT engineer. He always finds solutions, and in my case, he came up with a more cost-effective one. I strongly recommend…",
    project: "React & Node.js Deployment to Hostinger",
    meta: "DevOps · Fixed $10",
    score: 5,
    tags: ["Professional", "Solution Oriented"],
    date: "Aug 2025",
  },
  {
    id: "t5",
    quote: "Nice and very clever IT engineer, I will work with him next time.",
    project: "AI Engine App",
    meta: "Fixed $10",
    score: 5,
    tags: ["Collaborative"],
    date: "Jul 2025",
  },
  {
    id: "t6",
    quote: "He is amazing, clever and kind.",
    project: "Web App Build with React",
    meta: "Fixed $10",
    score: 5,
    tags: ["Collaborative"],
    date: "Jul 2025",
  },
  {
    id: "t7",
    quote:
      "It was a real pleasure working with Mahmoud. Excellent outcome, extremely responsive & cooperative and always going the extra mile.",
    project: "Figma to HTML",
    meta: "Fixed $100",
    score: 5,
    tags: ["Collaborative", "Communicator", "Quality"],
    date: "Feb 2025",
  },
  {
    id: "t8",
    quote:
      "Frontend development services delivered on a weekly retainer basis — UI implementation and ongoing feature development.",
    project: "Front-End Development Services",
    meta: "Weekly retainer · $88/week · $821.60 total",
    score: 4.1,
    tags: ["Retainer", "Frontend"],
    date: "Feb–Apr 2025",
  },
  {
    id: "t9",
    quote:
      "React with MailJS integration — frontend development with email service connection and form handling.",
    project: "React with MailJS",
    meta: "Fixed $10 · Mar–May 2025",
    score: 5,
    tags: ["React", "MailJS"],
    date: "May 2025",
  },
  {
    id: "t10",
    quote:
      "Frontend development services on weekly retainer — ongoing UI work, component building, and feature delivery.",
    project: "Front-End Development Services",
    meta: "Weekly retainer · $350/week",
    score: 5,
    tags: ["Retainer", "Frontend"],
    date: "Feb 2025",
  },
]

export const testimonialStats: {
  labelKey: MessageKey
  value: string
  suffix: string
}[] = [
  { labelKey: "testimonials_stat_stars", value: "9", suffix: "/10" },
  { labelKey: "testimonials_stat_avg", value: "4.97", suffix: "★" },
  { labelKey: "testimonials_stat_contracts", value: "10", suffix: "+" },
  { labelKey: "testimonials_stat_satisfaction", value: "95", suffix: "%" },
]
