"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

export function Nav() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 60 // Nav height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] transition-colors duration-200",
        isScrolled ? "bg-bg-base/80 backdrop-blur-md border-b border-border-subtle" : "bg-transparent"
      )}
    >
      <Container className="h-full flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* Logo */}
          <span className="text-xl font-semibold tracking-tight">SubwAI</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Button 
            variant="ghost" 
            className="text-text-secondary hover:text-text-primary"
            onClick={() => scrollToSection('product')}
          >
            Product
          </Button>
          <Button 
            variant="ghost" 
            className="text-text-secondary hover:text-text-primary"
            onClick={() => scrollToSection('pricing')}
          >
            Pricing
          </Button>
          <Button 
            variant="ghost" 
            className="text-text-secondary hover:text-text-primary"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex text-text-secondary hover:text-text-primary">
            Login
          </Button>
          <Button variant="subtle" className="h-8 px-3 text-xs">
            Apply Now <span className="ml-1">→</span>
          </Button>
        </div>
      </Container>
    </motion.header>
  )
}

