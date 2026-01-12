"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { Search, Palette, Code, Rocket, LineChart } from "lucide-react"

export function Process() {
  const { t } = useLanguage()

  const icons = [Search, Palette, Code, Rocket, LineChart]

  return (
    <section id="process" className="scroll-mt-20 bg-secondary/50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.process.subtitle}</p>
        </motion.div>

        <div className="relative mt-16">
          <motion.div
            className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-primary via-primary to-transparent lg:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-8 lg:space-y-0">
            {t.process.steps.map((step, index) => {
              const Icon = icons[index]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className={`relative flex flex-col items-center gap-4 lg:flex-row lg:gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        borderColor: "hsl(var(--primary))",
                      }}
                      transition={{ duration: 0.2 }}
                      className={`group cursor-default rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                        isEven ? "lg:ml-auto lg:mr-8" : "lg:ml-8 lg:mr-auto"
                      } max-w-md`}
                    >
                      <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.15 }}
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/50"
                  >
                    <span
                      className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20"
                      style={{ animationDuration: "2s" }}
                    />
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden flex-1 lg:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
