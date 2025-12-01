"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-bg-surface/30">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="headline-lg mb-6">Success-based pricing</h2>
          <p className="body text-lg">You only pay when you win.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Discovery */}
          <PricingCard 
            title="Discovery"
            price="Free"
            description="Find grants you qualify for"
            features={["Grant search", "Matching", "Alerts"]}
            buttonText="Start Free"
            delay={0}
          />

          {/* Writing */}
          <PricingCard 
            title="Writing"
            price="8-10%"
            priceSuffix="success fee"
            description="Full service proposal writing"
            features={["AI drafting", "Expert review", "Revisions"]}
            buttonText="Get Started"
            highlight
            delay={0.1}
          />

          {/* Compliance */}
          <PricingCard 
            title="Compliance"
            price="Custom"
            description="Audit & management"
            features={["Full audit", "Reporting", "Management"]}
            buttonText="Contact Sales"
            delay={0.2}
          />
        </div>
      </Container>
    </section>
  )
}

function PricingCard({ title, price, priceSuffix, description, features, buttonText, highlight, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col ${highlight ? 'border-accent-purple/50 bg-bg-surface shadow-2xl shadow-accent-purple/10' : 'bg-bg-surface/50 border-border-subtle'}`}>
        <CardHeader>
          <h3 className="text-lg font-medium text-text-secondary mb-2">{title}</h3>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-3xl font-semibold text-text-primary">{price}</span>
            {priceSuffix && <span className="text-sm text-text-tertiary">{priceSuffix}</span>}
          </div>
          <p className="text-sm text-text-secondary">{description}</p>
        </CardHeader>
        <CardContent className="flex-1">
          <Separator className="mb-6 bg-border-subtle" />
          <ul className="space-y-3">
            {features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                <svg className="w-4 h-4 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant={highlight ? "default" : "outline"} className={`w-full ${highlight ? "bg-text-primary text-bg-base hover:bg-white/90" : ""}`}>
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

