"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { motion } from "framer-motion"
import SpotlightCard from "@/components/ui/spotlight-card"
import { CheckIcon, XIcon } from "lucide-react"

const comparisonData = [
  { feature: "Turnaround Time", traditional: "3-6 weeks", subwai: "7 days" },
  { feature: "Upfront Cost", traditional: "$5,000 - $15,000", subwai: "$0" },
  { feature: "Success Rate", traditional: "~40%", subwai: "99%" },
  { feature: "Payment Model", traditional: "Hourly / Fixed", subwai: "Success-based" },
]

export function Comparison() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-16 text-center md:text-left">
          <SectionLabel>Comparison</SectionLabel>
          <h2 className="headline-lg">Traditional methods vs. SubwAI</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Traditional Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full p-8 border border-border-subtle bg-bg-surface/30 flex flex-col">
              <h3 className="text-2xl font-semibold mb-8 text-text-secondary">Traditional Agencies</h3>
              <div className="space-y-8 flex-1">
                {comparisonData.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-border-subtle/50 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-text-tertiary uppercase tracking-wider">{item.feature}</span>
                    <div className="flex items-center gap-3 text-lg text-text-secondary">
                      <XIcon className="w-5 h-5 text-text-tertiary/50 shrink-0" />
                      <span>{item.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SubwAI Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard 
              className="h-full !bg-transparent border-accent-purple/50 shadow-2xl shadow-accent-purple/10" 
              spotlightColor="rgba(45, 109, 219, 0.25)"
            >
              <div className="p-8 h-full flex flex-col relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-semibold text-white">SubwAI</h3>
                  <span className="text-xs px-2 py-1 bg-accent-purple text-white font-medium">RECOMMENDED</span>
                </div>
                
                <div className="space-y-8 flex-1">
                  {comparisonData.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1 border-b border-accent-purple/20 pb-4 last:border-0 last:pb-0">
                      <span className="text-sm text-accent-purple/80 uppercase tracking-wider">{item.feature}</span>
                      <div className="flex items-center gap-3 text-xl font-bold text-white">
                        <CheckIcon className="w-6 h-6 text-accent-purple shrink-0" />
                        <span>{item.subwai}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
