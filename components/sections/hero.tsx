"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { ProductScreenshot } from "@/components/ui/product-screenshot"
import DarkVeil from "@/components/ui/dark-veil"
import ShinyText from "@/components/ui/shiny-text"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden">
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

          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="h-12 rounded-md bg-transparent border-border-subtle focus:border-accent-purple text-text-primary placeholder:text-text-tertiary"
            />
            <Button size="lg" className="h-12 px-8 rounded-md bg-text-primary text-bg-base hover:bg-white/90">
              Get Started <span className="ml-2">→</span>
            </Button>
          </form>
        </motion.div>

      </Container>
    </section>
  )
}

