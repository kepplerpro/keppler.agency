"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { ExternalLink } from "lucide-react"

type FilterType = "all" | "landing" | "corporate" | "ecommerce"

export function Work() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<FilterType>("all")

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t.work.filters.all },
    { key: "landing", label: t.work.filters.landing },
    { key: "corporate", label: t.work.filters.corporate },
    { key: "ecommerce", label: t.work.filters.ecommerce },
  ]

  const projects = t.work.projects

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.type === filter)

  return (
    <section id="work" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t.work.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.work.subtitle}</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{project.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground capitalize">{project.type}</p>
                    </div>
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                      {project.result}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="mt-4 w-full justify-center" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {t.work.viewProject}
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
