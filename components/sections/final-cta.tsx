"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-accent-purple/10 to-transparent opacity-50" />
      
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-lg mb-8 max-w-3xl mx-auto">
            Ready to win your next grant?
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="h-14 px-10 text-lg bg-text-primary text-bg-base hover:bg-white/90 rounded-full">
              Book a free strategy call <span className="ml-2">→</span>
            </Button>
            
            <p className="text-sm text-text-tertiary">
              No commitment required • 30-minute consultation
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

