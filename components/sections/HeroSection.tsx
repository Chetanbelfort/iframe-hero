'use client'

import FloatingIconsHero, {
  type FloatingIconsHeroProps,
} from '@/components/ui/floating-icons-hero-section'

import {
  Brain,
  Bot,
  Workflow,
  Zap,
  IndianRupee,
  LineChart,
  Database,
  Cloud,
  Rocket,
} from 'lucide-react'

/*
  RULE:
  - No `hidden sm:block` → mobile + desktop
  - With `hidden sm:block` → desktop only
*/

const icons: FloatingIconsHeroProps['icons'] = [
  // MOBILE + DESKTOP (spread to corners)
  { id: 1, icon: Brain, className: 'top-[4%] left-[4%]' },
  { id: 2, icon: Bot, className: 'top-[4%] right-[4%]' },
  { id: 3, icon: Workflow, className: 'bottom-[4%] left-[4%]' },
  { id: 4, icon: Zap, className: 'bottom-[4%] right-[4%]' },
  { id: 5, icon: IndianRupee, className: 'top-[45%] left-[2%]' },
  { id: 6, icon: LineChart, className: 'top-[45%] right-[2%]' },

  // DESKTOP ONLY (extra richness)
  { id: 7, icon: Cloud, className: 'hidden sm:block top-[10%] left-[30%]' },
  { id: 8, icon: Rocket, className: 'hidden sm:block bottom-[12%] right-[35%]' },
  { id: 9, icon: Database, className: 'hidden sm:block top-[70%] left-[30%]' },
]

export default function HeroSection() {
  return (
    <FloatingIconsHero
      title="ALL India AI"
      subtitle="Build, automate, and sell AI agents, workflows, and business automation systems — without coding."
      ctaText="Become an AI Partner"
      ctaHref="/partner"
      icons={icons}
    />
  )
}
