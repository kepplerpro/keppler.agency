"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Share2, Laptop, Megaphone, Palette, ArrowRight, Gauge, Brain } from "lucide-react"

const WHATSAPP_NUMBER = "5491121767678"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Share2,
      title: t.services.socialMedia.title,
      description: t.services.socialMedia.description,
    },
    {
      icon: Laptop,
      title: t.services.website.title,
      description: t.services.website.description,
    },
    {
      icon: Megaphone,
      title: t.services.advertising.title,
      description: t.services.advertising.description,
    },
    {
      icon: Palette,
      title: t.services.branding.title,
      description: t.services.branding.description,
    },
    {
      icon: Gauge,
      title: t.services.performance.title,
      description: t.services.performance.description,
    },
    {
      icon: Brain,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
    },
  ]

  return (
    <section id="services" className="scroll-mt-20 bg-secondary/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.services.subtitle}</p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                initial={false}
              />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20"
                >
                  <service.icon className="h-7 w-7" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
                <Button asChild variant="link" className="mt-4 p-0 text-accent">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                    {t.services.getQuote}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
