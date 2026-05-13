const en = {
  nav_live: "Live",
  nav_experience: "Experience",
  nav_skills: "Skills",
  nav_reviews: "Reviews",
  nav_education: "Education",
  nav_contact: "Contact",
  nav_hire: "Hire me",
  nav_open_menu: "Open navigation",
  nav_sheet_title: "Navigate",
  nav_lang_en: "EN",
  nav_lang_ar: "عربي",
  nav_language: "Language",
  site_name: "Mahmoud Elkassas",

  hero_badge: "Open to new opportunities · Remote & On-site",
  hero_title_1: "Frontend Engineer",
  hero_title_2: " & Product Builder",
  hero_title_3: "",
  hero_lead: "Creating premium web experiences engineered for scale and impact.",
  hero_intro:
    "Mahmoud Elkassas specializes in React.js, Next.js, TypeScript, and modern UI systems — building AI-driven products, collaborative platforms, dashboards, and polished SaaS experiences with performance-first engineering.",
  hero_cta_projects: "View projects",
  hero_cta_cv: "Download CV",
  hero_metric_years: "Years Experience",
  hero_metric_apps: "Production apps",
  hero_metric_satisfaction: "Client satisfaction",
  hero_metric_performance: "Faster load times",

  bento_eyebrow: "Highlights",
  bento_title: "Engineering digital products",
  bento_title_muted: "with performance, clarity, and impact",
  bento_sub:
    "Specialized in building modern SaaS platforms, AI-powered tools, and high-performance frontend systems for ambitious products. Clear communication, clean code, fast delivery cycles, and a strong focus on product quality from idea to deployment.",
  bento_tile1_title: "AI & automation expertise",
  bento_tile1_body:
    "Integrating Gemini APIs, OCR pipelines, and intelligent workflows into production-ready applications.",
  bento_tile2_title: "Fast, scalable frontend architecture",
  bento_tile2_body:
    "React and Next.js solutions built with clean structure, scalability, and maintainability in mind.",
  bento_tile3_title: "Realtime collaboration systems",
  bento_tile3_body:
    "Interactive dashboards, live updates, websocket integrations, and responsive user interactions at scale.",
  bento_tile4_title: "Modern product craftsmanship",
  bento_tile4_body:
    "Minimal interfaces, refined motion, accessibility standards, and polished experiences inspired by top SaaS companies.",

  live_eyebrow: "Live on the web",
  live_title: "Shipped &",
  live_title_muted: "deployed",
  live_sub:
    "Production apps with embedded previews, live status, and a focused modal browser experience.",
  live_modal_desc: "Embedded preview of the selected deployment.",
  live_embed_blocked:
    "This deployment can’t be embedded here (protected preview, sign-in, or X-Frame-Options). Open it in a new tab to view.",
  live_embed_card_hint: "Preview not shown in frame — open live site.",
  live_open: "Open",
  live_card_hint: "Modal on card click",
  live_open_live: "Open live",
  live_filter_all: "All",
  live_filter_ai: "AI / SaaS",
  live_filter_maps: "Maps / GIS",
  live_filter_tools: "Dev Tools",
  live_filter_ecom: "E-commerce",
  live_filter_business: "Business",
  live_category_ai: "AI / SaaS",
  live_category_maps: "Maps / GIS",
  live_category_tools: "Dev Tools",
  live_category_ecom: "E-commerce",
  live_category_business: "Business",

  experience_eyebrow: "Career",
  experience_title: "Professional",
  experience_title_muted: "experience",

  skills_eyebrow: "Stack",
  skills_title: "Technical",
  skills_title_muted: "skills",
  skills_sub:
    "Animated, glowing pills across frontend, backend, AI integrations, DevOps, and everyday tools.",
  skills_group_frontend: "Frontend",
  skills_group_backend: "Backend",
  skills_group_ai: "AI & APIs",
  skills_group_ai_tools: "AI tools",
  skills_group_devops: "DevOps",
  skills_group_tools: "Tools",

  testimonials_eyebrow: "Client reviews",
  testimonials_title: "What clients",
  testimonials_title_muted: "say",
  testimonials_upwork_stat: "10 reviews · 5.0 avg",
  testimonials_stat_stars: "5-star reviews",
  testimonials_stat_avg: "Average rating",
  testimonials_stat_contracts: "Upwork contracts",
  testimonials_stat_satisfaction: "Client satisfaction",

  education_eyebrow: "Background",
  education_title: "Education &",
  education_title_muted: "certifications",
  education_degree_label: "Education",
  education_certs_label: "Certifications",
  education_languages: "Languages",

  contact_eyebrow: "Get in touch",
  contact_title: "Let's build something",
  contact_title_muted: "together",
  contact_sub:
    "Open to freelance contracts, full-time roles, and ambitious collaborations. Replies within 24 hours.",
  contact_whatsapp: "WhatsApp",
  contact_email: "Email",
  contact_linkedin: "LinkedIn",
  contact_github: "GitHub",
  contact_cv: "Download CV",
  contact_form_name: "Name",
  contact_form_email: "Email",
  contact_form_message: "Project details",
  contact_form_message_ph: "Tell me about timelines, stack, and goals.",
  contact_form_send: "Send message",
  contact_form_sending: "Sending",
  contact_form_prefer: "Prefer email?",
  contact_success: "Thanks — your note is on its way.",
  contact_error:
    "Something went wrong. Please email directly while I investigate.",
  contact_name_ph: "Your name",
  contact_email_ph: "you@company.com",

  footer_built: "Built with Next.js & Tailwind",

  loading_text: "Preparing portfolio…",
} as const;

export type MessageKey = keyof typeof en;

const ar: Record<MessageKey, string> = {
  nav_live: "مباشر",
  nav_experience: "الخبرة",
  nav_skills: "المهارات",
  nav_reviews: "آراء العملاء",
  nav_education: "التعليم",
  nav_contact: "تواصل",
  nav_hire: "وظّفني",
  nav_open_menu: "فتح القائمة",
  nav_sheet_title: "التنقل",
  nav_lang_en: "EN",
  nav_lang_ar: "عربي",
  nav_language: "اللغة",
  site_name: "محمود القصاص",

  hero_badge: "متاح لفرص جديدة · عن بُعد وحضوريًا",
  hero_title_1: "مهندس واجهات أمامية",
  hero_title_2: " وباني منتجات",
  hero_title_3: "",
  hero_lead: "تجارب ويب متميزة مُهندسة للتوسّع والأثر.",
  hero_intro:
    "يتخصص محمود القصاص في React.js وNext.js وTypeScript وأنظمة واجهات حديثة — لبناء منتجات مدفوعة بالذكاء الاصطناعي ومنصات تعاونية ولوحات تحكم وتجارب SaaS مصقولة بهندسة تركز على الأداء.",
  hero_cta_projects: "عرض المشاريع",
  hero_cta_cv: "تحميل السيرة",
  hero_metric_years: "سنوات خبرة",
  hero_metric_apps: "تطبيقات إنتاج",
  hero_metric_satisfaction: "رضا العملاء",
  hero_metric_performance: "تحسين زمن التحميل",

  bento_eyebrow: "مختارات",
  bento_title: "هندسة منتجات رقمية",
  bento_title_muted: "بأداء ووضوح وتأثير",
  bento_sub:
    "متخصص في بناء منصات SaaS حديثة وأدوات مدعومة بالذكاء الاصطناعي وأنظمة واجهات أمامية عالية الأداء لمنتجات طموحة. تواصل واضح، كود نظيف، دورات تسليم سريعة، وتركيز قوي على جودة المنتج من الفكرة إلى الإطلاق.",
  bento_tile1_title: "خبرة في الذكاء الاصطناعي والأتمتة",
  bento_tile1_body:
    "دمج واجهات Gemini ومسارات OCR وسير عمل ذكية داخل تطبيقات جاهزة للإنتاج.",
  bento_tile2_title: "هندسة واجهات سريعة وقابلة للتوسع",
  bento_tile2_body:
    "حلول React وNext.js بهيكل نظيف وقابلية توسع وصيانة على المدى الطويل.",
  bento_tile3_title: "أنظمة تعاون لحظية",
  bento_tile3_body:
    "لوحات تفاعلية، تحديثات فورية، تكامل WebSocket، وتجارب مستخدم سلسة على نطاق واسع.",
  bento_tile4_title: "إتقان منتج عصري",
  bento_tile4_body:
    "واجهات بسيطة، حركة مدروسة، معايير إتاحة، وتجارب مصقولة بمستوى شركات SaaS الرائدة.",

  live_eyebrow: "على الويب",
  live_title: "منشور",
  live_title_muted: "ومفعّل",
  live_sub:
    "تطبيقات إنتاج مع معاينة مدمجة وحالة مباشرة وتجربة معاينة داخل نافذة منسقة.",
  live_modal_desc: "معاينة مدمجة للموقع المختار.",
  live_embed_blocked:
    "لا يمكن عرض هذا النشر داخل الإطار (معاينة محمية، تسجيل دخول، أو سياسة X-Frame-Options). افتح الموقع في تبويب جديد.",
  live_embed_card_hint: "لا تُعرض المعاينة داخل الإطار — افتح الموقع مباشرة.",
  live_open: "فتح",
  live_card_hint: "انقر البطاقة للمعاينة",
  live_open_live: "فتح الموقع",
  live_filter_all: "الكل",
  live_filter_ai: "ذكاء / SaaS",
  live_filter_maps: "خرائط / GIS",
  live_filter_tools: "أدوات تطوير",
  live_filter_ecom: "تجارة إلكترونية",
  live_filter_business: "أعمال",
  live_category_ai: "ذكاء / SaaS",
  live_category_maps: "خرائط / GIS",
  live_category_tools: "أدوات تطوير",
  live_category_ecom: "تجارة إلكترونية",
  live_category_business: "أعمال",

  experience_eyebrow: "مسار مهني",
  experience_title: "خبرة",
  experience_title_muted: "احترافية",

  skills_eyebrow: "المكدس",
  skills_title: "مهارات",
  skills_title_muted: "تقنية",
  skills_sub:
    "وسوم متحركة عبر الواجهة والخلفية والذكاء الاصطناعي وDevOps والأدوات.",
  skills_group_frontend: "الواجهة الأمامية",
  skills_group_backend: "الخلفية",
  skills_group_ai: "الذكاء والواجهات البرمجية",
  skills_group_ai_tools: "أدوات الذكاء الاصطناعي",
  skills_group_devops: "DevOps",
  skills_group_tools: "الأدوات",

  testimonials_eyebrow: "آراء العملاء",
  testimonials_title: "ماذا يقول",
  testimonials_title_muted: "العملاء",
  testimonials_upwork_stat: "١٠ تقييمات · متوسط ٥٫٠",
  testimonials_stat_stars: "تقييمات ٥ نجوم",
  testimonials_stat_avg: "متوسط التقييم",
  testimonials_stat_contracts: "عقود Upwork",
  testimonials_stat_satisfaction: "رضا العملاء",

  education_eyebrow: "الخلفية",
  education_title: "التعليم",
  education_title_muted: "والشهادات",
  education_degree_label: "التعليم",
  education_certs_label: "الشهادات",
  education_languages: "اللغات",

  contact_eyebrow: "تواصل",
  contact_title: "لنبني شيئًا",
  contact_title_muted: "معًا",
  contact_sub:
    "متاح للعمل الحر والدوام الكامل والتعاون الطموح. الرد خلال ٢٤ ساعة.",
  contact_whatsapp: "واتساب",
  contact_email: "البريد",
  contact_linkedin: "لينكدإن",
  contact_github: "GitHub",
  contact_cv: "تحميل السيرة",
  contact_form_name: "الاسم",
  contact_form_email: "البريد",
  contact_form_message: "تفاصيل المشروع",
  contact_form_message_ph: "الجدول الزمني، المكدس، والأهداف.",
  contact_form_send: "إرسال",
  contact_form_sending: "جارٍ الإرسال",
  contact_form_prefer: "تفضّل البريد؟",
  contact_success: "شكرًا — وصلت رسالتك.",
  contact_error: "حدث خطأ. راسلني مباشرة عبر البريد.",
  contact_name_ph: "اسمك",
  contact_email_ph: "you@company.com",

  footer_built: "مبني بـ Next.js وTailwind",

  loading_text: "جارٍ تحميل المحفظة…",
};

export type Locale = "en" | "ar";
export const messages = { en, ar } as const;

export function liveCategoryLabelKey(
  category: "ai" | "maps" | "tools" | "ecom" | "business",
): MessageKey {
  const map = {
    ai: "live_category_ai",
    maps: "live_category_maps",
    tools: "live_category_tools",
    ecom: "live_category_ecom",
    business: "live_category_business",
  } as const;
  return map[category];
}

export function liveFilterKey(id: string): MessageKey {
  return `live_filter_${id}` as MessageKey;
}
