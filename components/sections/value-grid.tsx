"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"

const features = [
  {
    title: "AI-Powered Discovery",
    description: "Find relevant opportunities in minutes. Our AI scans thousands of funding sources to match your profile.",
    icon: (
      <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "Expert Review",
    description: "Get real-time feedback on your proposals. Increase win rates with automated scoring and suggestions.",
    icon: (
      <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Compliance Built-in",
    description: "Never miss a requirement. Automated checklists ensure every submission meets funder guidelines.",
    icon: (
      <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
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
              <Card className="h-full bg-bg-surface border-border-subtle hover:border-border-hover hover:bg-bg-surface-hover/50 group">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-lg bg-bg-elevated flex items-center justify-center border border-border-subtle group-hover:border-accent-purple/30 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 text-text-primary">{feature.title}</CardTitle>
                  <CardDescription className="text-text-secondary text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

