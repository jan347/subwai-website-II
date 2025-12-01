"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { ProductScreenshot } from "@/components/ui/product-screenshot"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureSectionProps {
  label: string
  title: string
  description: string
  features: string[]
  children?: React.ReactNode // For custom screenshot content
  align?: "left" | "right"
  delay?: number
}

export function FeatureSection({
  label,
  title,
  description,
  features,
  children,
  align = "left",
  delay = 0
}: FeatureSectionProps) {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <Container>
        <div className={cn(
          "flex flex-col gap-12 md:gap-24 items-center",
          align === "right" ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          {/* Text Content */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
          >
            <SectionLabel>{label}</SectionLabel>
            <h2 className="headline-lg mb-6">{title}</h2>
            <p className="body text-lg mb-8 max-w-lg">{description}</p>
            
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <svg className="w-5 h-5 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Screenshot / Visual */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: align === "left" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
          >
            <ProductScreenshot>
              {children || (
                <div className="w-full aspect-[4/3] bg-bg-surface flex items-center justify-center border border-border-subtle rounded-lg">
                  <span className="text-text-tertiary">Feature UI Placeholder</span>
                </div>
              )}
            </ProductScreenshot>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

