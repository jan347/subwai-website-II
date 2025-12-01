"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import MagicBento from "@/components/ui/magic-bento"
import DarkVeil from "@/components/ui/dark-veil"
import ShinyText from "@/components/ui/shiny-text"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <DarkVeil 
          hueShift={10} // Adjusted to find Blue (was 235 which looked Red)
          noiseIntensity={0.1}
          speed={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D6DDB]/12 via-bg-base/50 to-bg-base pointer-events-none" />
        <div className="absolute inset-0 bg-[#2D6DDB]/8 pointer-events-none mix-blend-soft-light" />
      </div>

      <Container className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="headline-xl mb-6 max-w-4xl leading-[1.15] pb-2">
            <span className="text-gradient">SubwAI is purpose-built for</span> <br className="hidden md:block" />
            <ShinyText text="winning grant funding" disabled={false} speed={2.5} className="inline-block font-semibold" />
          </h1>
          
          <p className="body text-lg md:text-xl max-w-2xl mb-10">
            Automatically identify grants you qualify for, write compliant proposals with AI, 
            and manage your entire funding lifecycle in one place.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-12" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="h-12 bg-bg-surface/50 border-border-default focus:border-accent-purple/50 text-text-primary"
            />
            <Button size="lg" className="h-12 px-8 bg-text-primary text-bg-base hover:bg-white/90">
              Get Started <span className="ml-2">→</span>
            </Button>
          </form>

          <div className="flex items-center gap-2 text-sm text-text-tertiary mb-16">
            <span className="flex items-center gap-1">
              <span className="text-success">★★★★★</span>
              Trusted by 500+ organizations
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto"
        >
          <MagicBento 
            enableSpotlight={false}
            spotlightRadius={50}
          />
        </motion.div>
      </Container>
    </section>
  )
}

