"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const metrics = [
  { value: "$50M+", label: "funding secured" },
  { value: "500+", label: "organizations" },
  { value: "7 days", label: "avg. turnaround" },
  { value: "99%", label: "compliance rate" },
  { value: "85%", label: "first-submission" },
  { value: "24/7", label: "support" },
]

export function Metrics() {
  return (
    <section id="metrics" className="py-16 border-y border-border-subtle bg-bg-surface/30">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-semibold text-text-primary mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm text-text-tertiary uppercase tracking-wide">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

