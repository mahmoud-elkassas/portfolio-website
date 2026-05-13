"use client"

import Link from "next/link"
import { useState } from "react"
import { Code2, Download, Link2, Loader2, Mail, MessageCircle } from "lucide-react"

import { Reveal } from "@/components/motion/reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/data/site"
import { useT } from "@/lib/locale-context"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const t = useT()
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [pending, setPending] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus("idle")
    setPending(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      })
      if (!response.ok) throw new Error("Request failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    } finally {
      setPending(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-120px] mx-auto h-[420px] max-w-3xl bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {t("contact_eyebrow")}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("contact_title")}{" "}
            <span className="text-muted-foreground">{t("contact_title_muted")}</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">{t("contact_sub")}</p>
        </Reveal>

        <Reveal className="mt-10" delay={0.05}>
          <div className="flex flex-wrap justify-center gap-3">
            <MagneticButton
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-xl px-5")}
            >
              <MessageCircle className="size-4" />
              {t("contact_whatsapp")}
            </MagneticButton>
            <MagneticButton
              href={`mailto:${siteConfig.email}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-xl px-5")}
            >
              <Mail className="size-4" />
              {t("contact_email")}
            </MagneticButton>
            <MagneticButton
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-xl px-5")}
            >
              <Link2 className="size-4" />
              {t("contact_linkedin")}
            </MagneticButton>
            <MagneticButton
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-xl px-5")}
            >
              <Code2 className="size-4" />
              {t("contact_github")}
            </MagneticButton>
            <MagneticButton
              href={siteConfig.cvUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "rounded-xl px-5")}
            >
              <Download className="size-4" />
              {t("contact_cv")}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal className="mt-12 text-start" delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="glass-surface space-y-4 rounded-2xl border border-border/70 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">{t("contact_form_name")}</Label>
                <Input id="name" name="name" required placeholder={t("contact_name_ph")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t("contact_form_email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t("contact_email_ph")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">{t("contact_form_message")}</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t("contact_form_message_ph")}
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={pending}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto")}
              >
                {pending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {t("contact_form_sending")}
                  </>
                ) : (
                  <>
                    <Mail className="size-4" />
                    {t("contact_form_send")}
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground">
                {t("contact_form_prefer")}{" "}
                <Link className="text-primary hover:underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </Link>
              </p>
            </div>
            {status === "success" ? (
              <p className="text-sm text-emerald-400">{t("contact_success")}</p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-destructive">{t("contact_error")}</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
