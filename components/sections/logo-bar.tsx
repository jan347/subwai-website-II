"use client"

import { Container } from "@/components/ui/container"

const logos = [
  "Ramp", "Vercel", "Loom", "Retool", "Cash App"
]

export function LogoBar() {
  return (
    <section className="py-12 border-b border-border-subtle bg-bg-base">
      <Container>
        <p className="text-center text-sm text-text-tertiary mb-8 uppercase tracking-wider">Trusted by innovative teams</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo} className="text-xl md:text-2xl font-bold text-text-secondary select-none">
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

