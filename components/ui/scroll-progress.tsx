"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "value", label: "Why SubwAI" },
  { id: "product", label: "Features" },
  { id: "metrics", label: "Impact" },
  { id: "comparison", label: "Comparison" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Get Started" },
]

export function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true)
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false)
      }, 1500) // Hide after 1.5s of inactivity
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const activeIndex = sections.findIndex(s => s.id === activeSection)
  const progress = activeIndex === -1 ? 0 : activeIndex / (sections.length - 1)

  return (
    <div className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-6 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Vertical Line Container - aligned with centers of first and last dot */}
      <div className="absolute top-[5px] bottom-[5px] left-1/2 -translate-x-1/2 w-px bg-border-subtle -z-10">
        <motion.div 
          className="w-full bg-white origin-top"
          animate={{ height: `${progress * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      
      {sections.map(({ id, label }, index) => {
        const isActive = index <= activeIndex
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center justify-center outline-none"
            aria-label={`Scroll to ${label}`}
          >
            <motion.div
              className={`w-2.5 h-2.5 border border-border-subtle bg-bg-base transition-colors duration-300 ${
                isActive ? "!bg-white !border-white" : "group-hover:border-text-secondary"
              }`}
              animate={{
                scale: activeSection === id ? 1.2 : 1,
              }}
              style={{ borderRadius: 0 }} // Square
            />
            
            {/* Label on hover */}
            <span className="absolute left-6 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-wider text-text-secondary whitespace-nowrap bg-bg-base px-2 py-1 border border-border-subtle pointer-events-none select-none">
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
