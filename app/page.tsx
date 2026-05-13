import { Suspense } from "react"

import { Footer } from "@/components/layout/footer"
import { BentoHighlights } from "@/components/bento/bento-highlights"
import { ContactSection } from "@/components/sections/contact-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { Hero } from "@/components/sections/hero"
import { LiveShowcase } from "@/components/sections/live-showcase"
import { SkillsSection } from "@/components/sections/skills-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function Home() {
  return (
    <>
      <main className="relative">
        <Hero />
        <BentoHighlights />
        <Suspense
          fallback={
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
              <div className="h-64 animate-pulse rounded-3xl bg-muted/30" />
            </div>
          }
        >
          <LiveShowcase />
        </Suspense>
        <TestimonialsSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
