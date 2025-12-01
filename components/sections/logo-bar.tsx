"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const logos = [
  "Ramp", "Vercel", "Loom", "Retool", "Cash App"
]

export function LogoBar() {
  return (
    <section className="py-12 border-b border-border-subtle bg-bg-base">
      <Container>
        <p className="text-center text-sm text-text-tertiary mb-8 uppercase tracking-wider">Trusted by innovative teams</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
          {logos.map((logo) => (
            <div key={logo} className="text-xl md:text-2xl font-bold text-text-secondary select-none">
              {logo}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-text-tertiary opacity-50"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
