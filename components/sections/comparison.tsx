"use client"

import { Container } from "@/components/ui/container"
import { SectionLabel } from "@/components/ui/section-label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"

const comparisonData = [
  { feature: "Turnaround", traditional: "3-6 weeks", subwai: "7 days" },
  { feature: "Upfront cost", traditional: "$5,000-15,000", subwai: "$0" },
  { feature: "Success rate", traditional: "~40%", subwai: "99%" },
  { feature: "Payment model", traditional: "Hourly/fixed", subwai: "Success-based" },
]

export function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="mb-12">
          <SectionLabel>Comparison</SectionLabel>
          <h2 className="headline-lg">Traditional methods vs. SubwAI</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-border-subtle overflow-hidden"
        >
          <Table>
            <TableHeader className="bg-bg-surface">
              <TableRow className="border-border-subtle hover:bg-transparent">
                <TableHead className="w-[40%] text-text-tertiary">Feature</TableHead>
                <TableHead className="text-text-tertiary">Traditional</TableHead>
                <TableHead className="text-text-primary bg-accent-purple/5 font-semibold">SubwAI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, i) => (
                <TableRow key={i} className="border-border-subtle hover:bg-bg-surface/50">
                  <TableCell className="font-medium text-text-secondary">{row.feature}</TableCell>
                  <TableCell className="text-text-secondary">{row.traditional}</TableCell>
                  <TableCell className="bg-accent-purple/5 text-text-primary font-medium">
                    {row.subwai}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </Container>
    </section>
  )
}

