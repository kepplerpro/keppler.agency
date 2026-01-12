import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorGlow />
      <Header />
      <Hero />
      <ValueProps />
      <Services />
      <Work />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
