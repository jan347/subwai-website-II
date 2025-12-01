"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { MenuIcon, XIcon } from "lucide-react"

export function Nav() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

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
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] transition-colors duration-200",
        isScrolled || mobileMenuOpen ? "bg-bg-base/80 backdrop-blur-md border-b border-border-subtle" : "bg-transparent"
      )}
    >
      <Container className="h-full flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* Logo */}
          <img src="/logo.svg" alt="SubwAI" className="h-8" />
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

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-text-secondary hover:text-text-primary">
            Login
          </Button>
          <Button variant="subtle" className="h-8 px-3 text-xs">
            Discover funding <span className="ml-1">→</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </Container>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[60px] left-0 right-0 bg-bg-base border-b border-border-subtle p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg h-12"
            onClick={() => scrollToSection('product')}
          >
            Product
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg h-12"
            onClick={() => scrollToSection('pricing')}
          >
            Pricing
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-lg h-12"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
          <div className="h-px bg-border-subtle my-2" />
          <Button variant="ghost" className="w-full justify-start text-lg h-12">
            Login
          </Button>
          <Button variant="subtle" className="w-full h-12 text-sm">
            Discover funding
          </Button>
        </motion.div>
      )}
    </motion.header>
  )
}
