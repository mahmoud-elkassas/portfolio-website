export type LiveCategory =
  | "all"
  | "ai"
  | "maps"
  | "tools"
  | "ecom"
  | "business"

export type LiveProject = {
  id: string
  name: string
  description: string
  url: string
  category: Exclude<LiveCategory, "all">
  tags: string[]
  icon: string
  host: string
  /** Set false when the deployment sends X-Frame-Options / CSP frame-ancestors that block embedding, or requires auth (401). */
  allowIframe?: boolean
}

export const liveProjects: LiveProject[] = [
  {
    id: "webtl",
    name: "WebTL",
    description:
      "AI webtoon translator with speech-bubble OCR, glossary enforcement, and PDF export.",
    url: "https://web-tl-0-2.vercel.app/",
    category: "ai",
    tags: ["Next.js 14", "Gemini API", "Supabase", "Vision OCR"],
    icon: "Globe",
    host: "web-tl-0-2.vercel.app",
  },
  {
    id: "3d-map",
    name: "3D Map Viewer",
    description:
      "Interactive 3D map visualization with layered geographic data and real-time rendering.",
    url: "https://3dmap-2.vercel.app/",
    category: "maps",
    tags: ["React.js", "Map APIs", "3D Rendering"],
    icon: "Map",
    host: "3dmap-2.vercel.app",
  },
  {
    id: "lot-map",
    name: "Lot Map",
    description:
      "Lot and zone mapping with annotations for spatial planning and infrastructure.",
    url: "https://lot-map-beta.vercel.app/",
    category: "maps",
    tags: ["React.js", "Map APIs", "AI Labeling"],
    icon: "Pin",
    host: "lot-map-beta.vercel.app",
  },
  {
    id: "doc-editor",
    name: "Modern Document Editor",
    description:
      "Collaborative editor with AI writing suggestions, rich text, and permission controls.",
    url: "https://modern-document-editor.vercel.app/",
    category: "tools",
    tags: ["React.js", "WebSockets", "AI API"],
    icon: "FileEdit",
    host: "modern-document-editor.vercel.app",
  },
  {
    id: "flowchart",
    name: "Flowchart Builder",
    description:
      "Drag-and-drop flowcharts with custom nodes, connectors, and export.",
    url: "https://flowchart-builder-gamma.vercel.app/",
    category: "tools",
    tags: ["React.js", "Canvas API", "DnD"],
    icon: "GitBranch",
    host: "flowchart-builder-gamma.vercel.app",
  },
  {
    id: "note-notion",
    name: "Note Notion",
    description:
      "Notion-inspired notes with nested pages, rich text, and workspace organization.",
    url: "https://note-notion-2wf48t0y4-mahmoud-elkassas-projects.vercel.app/",
    category: "tools",
    tags: ["Next.js", "Rich Text", "Tailwind"],
    icon: "NotebookPen",
    host: "note-notion.vercel.app",
    allowIframe: false,
  },
  {
    id: "shoexpo",
    name: "ShoeXpo",
    description:
      "E-commerce storefront for footwear with filtering, cart, and optimized checkout.",
    url: "https://shoexpo0-01.vercel.app/",
    category: "ecom",
    tags: ["Next.js", "Tailwind", "E-commerce"],
    icon: "ShoppingBag",
    host: "shoexpo0-01.vercel.app",
  },
  {
    id: "bizconnect",
    name: "BizConnect",
    description:
      "B2B platform to discover, connect, and collaborate through a structured directory.",
    url: "https://biz-connect-six.vercel.app/",
    category: "business",
    tags: ["Next.js", "Tailwind", "SaaS"],
    icon: "Handshake",
    host: "biz-connect-six.vercel.app",
  },
  {
    id: "file-mgmt",
    name: "File Management Software",
    description:
      "Cloud file dashboard with hierarchy, search, upload and download, and permissions.",
    url: "https://file-management-software.vercel.app/",
    category: "tools",
    tags: ["React.js", "Node.js", "Cloud Storage"],
    icon: "FolderOpen",
    host: "file-management-software.vercel.app",
  },
]

export const liveFilterIds: LiveCategory[] = [
  "all",
  "ai",
  "maps",
  "tools",
  "ecom",
  "business",
]
