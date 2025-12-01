"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { ProductScreenshot } from "@/components/ui/product-screenshot"
import DarkVeil from "@/components/ui/dark-veil"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <DarkVeil 
          hueShift={280} // Purple/Violet range
          noiseIntensity={0.1}
          speed={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-base/50 to-bg-base pointer-events-none" />
      </div>

      <Container className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <SectionLabel>Grant Funding</SectionLabel>
          
          <h1 className="headline-xl mb-6 max-w-4xl text-gradient">
            SubwAI is purpose-built for <br className="hidden md:block" />
            winning grant funding
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
        >
          <ProductScreenshot className="max-w-5xl shadow-2xl">
            {/* Placeholder Content for Screenshot */}
            <div className="w-full aspect-[16/10] bg-bg-surface flex flex-col relative overflow-hidden">
              {/* Fake UI Header */}
              <div className="h-12 border-b border-border-subtle flex items-center px-4 gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="h-6 w-32 bg-border-subtle rounded-full ml-4" />
              </div>
              
              {/* Fake UI Body */}
              <div className="flex-1 flex">
                {/* Sidebar */}
                <div className="w-64 border-r border-border-subtle p-4 hidden md:block">
                  <div className="space-y-3">
                    <div className="h-4 w-24 bg-border-subtle rounded animate-pulse" />
                    <div className="h-4 w-32 bg-border-subtle rounded animate-pulse opacity-60" />
                    <div className="h-4 w-20 bg-border-subtle rounded animate-pulse opacity-60" />
                    <div className="h-4 w-28 bg-border-subtle rounded animate-pulse opacity-60" />
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-8 w-48 bg-border-subtle rounded animate-pulse" />
                    <div className="h-8 w-24 bg-accent-purple/20 rounded animate-pulse" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-32 rounded-lg border border-border-subtle bg-bg-elevated p-4">
                        <div className="h-4 w-12 bg-success/20 rounded mb-4" />
                        <div className="h-4 w-3/4 bg-border-subtle rounded mb-2" />
                        <div className="h-3 w-1/2 bg-border-subtle/50 rounded" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 h-64 rounded-lg border border-border-subtle bg-bg-elevated p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-accent-purple/10 mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="h-4 w-48 bg-border-subtle rounded mx-auto mb-2" />
                      <div className="h-3 w-32 bg-border-subtle/50 rounded mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ProductScreenshot>
        </motion.div>
      </Container>
    </section>
  )
}

