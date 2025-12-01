import { Hero } from "@/components/sections/hero"
import { LogoBar } from "@/components/sections/logo-bar"
import { ValueGrid } from "@/components/sections/value-grid"
import { FeatureSection } from "@/components/sections/feature-section"
import { Metrics } from "@/components/sections/metrics"
import { Comparison } from "@/components/sections/comparison"
import { Pricing } from "@/components/sections/pricing"
import { FinalCTA } from "@/components/sections/final-cta"

import { DiscoveryMockup } from "@/components/mockups/discovery-mockup"
import { WritingMockup } from "@/components/mockups/writing-mockup"
import { ComplianceMockup } from "@/components/mockups/compliance-mockup"

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <LogoBar />
      <ValueGrid />
      
      <div id="product">
        <FeatureSection
          label="Discovery"
          title="Automatically identify grants you qualify for"
          description="Find relevant opportunities in minutes, not weeks. Our AI scans thousands of funding sources and matches them to your profile."
          features={[
            "Semantic search across databases",
            "Daily deadline monitoring",
            "Match scoring algorithm"
          ]}
          align="left"
        >
          <DiscoveryMockup />
        </FeatureSection>

        <FeatureSection
          label="Writing"
          title="AI-assisted proposal writing that wins"
          description="Generate compliant, compelling proposals tailored to each funder's requirements."
          features={[
            "Custom tone matching",
            "Auto-filled requirements",
            "Real-time compliance check"
          ]}
          align="right"
        >
          <WritingMockup />
        </FeatureSection>

        <FeatureSection
          label="Compliance"
          title="Never miss a requirement"
          description="Automated compliance checking ensures every submission meets funder guidelines. Track status, manage revisions, stay audit-ready."
          features={[
            "Automated checklist generation",
            "Document version control",
            "Submission tracking"
          ]}
          align="left"
        >
          <ComplianceMockup />
        </FeatureSection>
      </div>

      <Metrics />
      <Comparison />
      <Pricing />
      <FinalCTA />
    </div>
  )
}
