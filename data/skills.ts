export type SkillCategory = {
  id: string
  title: string
  skills: { name: string; highlight?: boolean }[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Redux" },
      { name: "Redux Toolkit" },
      { name: "JavaScript" },
      { name: "Framer Motion" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Prisma" },
      { name: "Drizzle ORM" },
      { name: "Supabase" },
    ],
  },
  {
    id: "ai",
    title: "AI & APIs",
    skills: [
      { name: "Google Gemini API" },
      { name: "Vision OCR" },
      { name: "Prompt Engineering" },
      { name: "REST APIs" },
      { name: "WebSockets" },
      { name: "Stripe" },
    ],
  },
  {
    id: "ai_tools",
    title: "AI tools",
    skills: [
      { name: "Cursor", highlight: true },
      { name: "GitHub Copilot" },
      { name: "ChatGPT / Claude" },
      { name: "v0 (Vercel)" },
      { name: "Notion AI" },
      { name: "Perplexity" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Vercel" },
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Environment hardening" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git / GitHub" },
      { name: "Figma" },
      { name: "ESLint" },
      { name: "Playwright" },
      { name: "Storybook" },
      { name: "Chrome DevTools" },
    ],
  },
]
