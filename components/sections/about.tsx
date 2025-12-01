"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import SpotlightCard from "@/components/ui/spotlight-card"
import MagicBento from "@/components/ui/magic-bento"
import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-bg-base">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>About</SectionLabel>
          <h2 className="headline-lg mb-6">Built by grant experts, powered by AI</h2>
          <p className="body text-lg max-w-2xl mx-auto">
            SubwAI combines decades of grant writing expertise with cutting-edge artificial intelligence 
            to help organizations win more funding, faster.
          </p>
        </div>

        <div className="mb-16">
          <MagicBento enableSpotlight={false} spotlightRadius={50} />
        </div>

      </Container>
    </section>
  )
}

