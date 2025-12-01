"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProductScreenshotProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string // Optional if we use children for mockups
  alt?: string
}

const ProductScreenshot = React.forwardRef<
  HTMLDivElement,
  ProductScreenshotProps
>(({ className, children, src, alt, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative group mx-auto", className)}
    {...props}
  >
    {/* Ambient Glow */}
    <div className="absolute -inset-4 bg-accent-purple/20 blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="absolute -inset-px rounded-none bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="product-screenshot relative overflow-hidden bg-bg-surface/50 backdrop-blur-sm">
      {src ? (
        <img src={src} alt={alt} className="w-full h-auto" />
      ) : (
        <div className="w-full h-full min-h-[400px] flex items-center justify-center text-text-tertiary bg-bg-surface">
          {children || "Product UI Placeholder"}
        </div>
      )}
      
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </div>
  </div>
))
ProductScreenshot.displayName = "ProductScreenshot"

export { ProductScreenshot }

