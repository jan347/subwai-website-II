"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import SpotlightCard from "@/components/ui/spotlight-card"
import { motion } from "framer-motion"
import { ScanSearchIcon } from "@/components/ui/icons/lucide-scan-search"
import { BadgeCheckIcon } from "@/components/ui/icons/lucide-badge-check"
import { BookLockIcon } from "@/components/ui/icons/lucide-book-lock"

const features = [
  {
    title: "AI-Powered Discovery",
    description: "Find relevant opportunities in minutes. Our AI scans thousands of funding sources to match your profile.",
    icon: (
      <ScanSearchIcon className="w-10 h-10 text-accent-purple" />
    )
  },
  {
    title: "Expert Review",
    description: "Get real-time feedback on your proposals. Increase win rates with automated scoring and suggestions.",
    icon: (
      <BadgeCheckIcon className="w-10 h-10 text-accent-purple" />
    )
  },
  {
    title: "Compliance Built-in",
    description: "Never miss a requirement. Automated checklists ensure every submission meets funder guidelines.",
    icon: (
      <BookLockIcon className="w-10 h-10 text-accent-purple" />
    )
  }
]

export function ValueGrid() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>Why SubwAI</SectionLabel>
          <h2 className="headline-lg max-w-2xl mx-auto">
            End-to-end grant success, from discovery to funding
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="h-full group !bg-transparent" spotlightColor="rgba(30, 80, 180, 0.25)">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{feature.title}</h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

