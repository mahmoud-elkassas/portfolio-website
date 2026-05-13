/** Lucide icon names for skills UI (resolved dynamically in the client component). */

export const SKILL_CATEGORY_ICON: Record<string, string> = {
  frontend: "LayoutTemplate",
  backend: "Server",
  ai: "BrainCircuit",
  ai_tools: "Sparkles",
  devops: "CloudCog",
  tools: "Wrench",
}

export const SKILL_PILL_ICON: Record<string, string> = {
  "React.js": "Atom",
  "Next.js": "AppWindow",
  TypeScript: "Braces",
  "Tailwind CSS": "Wind",
  Redux: "Layers",
  "Redux Toolkit": "Layers",
  JavaScript: "FileCode",
  "Framer Motion": "Sparkles",
  "Node.js": "Hexagon",
  MongoDB: "Database",
  PostgreSQL: "Database",
  Prisma: "Triangle",
  "Drizzle ORM": "Droplets",
  Supabase: "Zap",
  "Google Gemini API": "Sparkles",
  "Vision OCR": "ScanText",
  "Prompt Engineering": "MessageSquareText",
  "REST APIs": "Plug",
  WebSockets: "Radio",
  Stripe: "CreditCard",
  Cursor: "MousePointer2",
  "GitHub Copilot": "Github",
  "ChatGPT / Claude": "Bot",
  "v0 (Vercel)": "Triangle",
  "Notion AI": "NotebookPen",
  Perplexity: "Search",
  Vercel: "Triangle",
  Docker: "Container",
  "GitHub Actions": "Workflow",
  "CI/CD": "Repeat",
  "Environment hardening": "Shield",
  "Git / GitHub": "Github",
  Figma: "PenTool",
  ESLint: "ShieldAlert",
  Playwright: "TestTubes",
  Storybook: "BookOpen",
  "Chrome DevTools": "Globe",
}

export function skillCategoryIconName(id: string): string {
  return SKILL_CATEGORY_ICON[id] ?? "Layers"
}

export function skillPillIconName(skillName: string): string {
  return SKILL_PILL_ICON[skillName] ?? "Tag"
}
