"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { MessageCircle, Mail, ArrowRight } from "lucide-react"

const WHATSAPP_NUMBER = "<WHATSAPP_NUMBER>"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:p-10"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-transform group-hover:scale-110">
              <MessageCircle className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t.contact.whatsapp}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.contact.whatsappDesc}</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              {t.contact.chatNow}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>

          <motion.a
            href="mailto:hello@allianzy.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 sm:p-10"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Mail className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{t.contact.email}</h3>
              <p className="mt-2 text-sm text-muted-foreground">hello@allianzy.com</p>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              {t.contact.sendEmail}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          {t.contact.response}
        </motion.p>
      </div>
    </section>
  )
}
