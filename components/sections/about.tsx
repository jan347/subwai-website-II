"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import SpotlightCard from "@/components/ui/spotlight-card"
import { motion } from "framer-motion"

const team = [
  {
    name: "Grant Experts",
    role: "Funding Specialists",
    description: "Our team has secured over $50M in grants across federal, state, and private foundations."
  },
  {
    name: "AI Engineers",
    role: "Technology Team",
    description: "Building the next generation of grant discovery and writing tools powered by advanced AI."
  },
  {
    name: "Compliance Officers",
    role: "Quality Assurance",
    description: "Ensuring every proposal meets the highest standards and regulatory requirements."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-base">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>About</SectionLabel>
          <h2 className="headline-lg mb-6">Built by grant experts, powered by AI</h2>
          <p className="body text-lg max-w-2xl mx-auto">
            SubwAI combines decades of grant writing expertise with cutting-edge artificial intelligence 
            to help organizations win more funding, faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="!bg-transparent border-border-subtle h-full" spotlightColor="rgba(30, 80, 180, 0.25)">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{member.name}</h3>
                    <p className="text-sm text-text-tertiary uppercase tracking-wide">{member.role}</p>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{member.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <SpotlightCard className="!bg-transparent border-border-subtle" spotlightColor="rgba(30, 80, 180, 0.25)">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-4">Our Mission</h3>
              <p className="body text-lg text-text-secondary leading-relaxed">
                We believe that every organization with a worthy mission should have access to the funding 
                they need to make an impact. By automating the most time-consuming parts of grant writing 
                and leveraging AI to improve success rates, we're making grant funding accessible to everyone.
              </p>
            </div>
          </SpotlightCard>
        </motion.div>
      </Container>
    </section>
  )
}

