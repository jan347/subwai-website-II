"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
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

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-[60px] transition-colors duration-200",
        isScrolled ? "bg-bg-base/80 backdrop-blur-md border-b border-border-subtle" : "bg-transparent"
      )}
    >
      <Container className="h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo */}
          <span className="text-xl font-semibold tracking-tight">SubwAI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" asChild className="text-text-secondary hover:text-text-primary">
            <Link href="#product">Product</Link>
          </Button>
          <Button variant="ghost" asChild className="text-text-secondary hover:text-text-primary">
            <Link href="#pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild className="text-text-secondary hover:text-text-primary">
            <Link href="#about">About</Link>
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

