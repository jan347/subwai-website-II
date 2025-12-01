import * as React from "react"
import { cn } from "@/lib/utils"

const SectionLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "section-label mb-6 block",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
SectionLabel.displayName = "SectionLabel"

export { SectionLabel }

