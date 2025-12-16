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

/* -------------------------------- ICON CONFIG -------------------------------- */
/*
  🔑 RULE:
  - Icons WITHOUT `hidden sm:block` → visible on mobile + desktop
  - Icons WITH `hidden sm:block`   → hidden on mobile, visible on desktop
*/

const icons: FloatingIconsHeroProps['icons'] = [
  // ✅ MOBILE + DESKTOP ICONS (6–8 max)
  { id: 1, icon: Brain, className: 'top-[10%] left-[10%]' },
  { id: 2, icon: Bot, className: 'top-[20%] right-[10%]' },
  { id: 3, icon: Workflow, className: 'top-[70%] left-[12%]' },
  { id: 4, icon: Zap, className: 'bottom-[15%] right-[12%]' },
  { id: 5, icon: IndianRupee, className: 'top-[45%] left-[6%]' },
  { id: 6, icon: LineChart, className: 'top-[55%] right-[6%]' },

  // 🖥️ DESKTOP-ONLY ICONS
  { id: 7, icon: Cloud, className: 'hidden sm:block top-[5%] left-[35%]' },
  { id: 8, icon: Rocket, className: 'hidden sm:block top-[80%] right-[45%]' },

  // 👇 THIS IS YOUR EXACT LINE (DESKTOP ONLY)
  { id: 9, icon: Database, className: 'hidden sm:block top-[70%] left-[30%]' },
]

/* -------------------------------- HERO -------------------------------- */

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
