'use client'

import FloatingIconsHero, {
  type FloatingIconsHeroProps,
} from "@/components/ui/floating-icons-hero-section"

import {
  Brain,
  Bot,
  Workflow,
  Zap,
  IndianRupee,
  LineChart,
  Database,
  Cloud,
  ShieldCheck,
  Rocket,
  Cpu,
  Network,
  Layers,
  Settings,
  Gauge,
  Puzzle,
} from "lucide-react"

const icons: FloatingIconsHeroProps["icons"] = [
  { id: 1, icon: Brain, className: "top-[8%] left-[10%]" },
  { id: 2, icon: Bot, className: "top-[18%] right-[10%]" },
  { id: 3, icon: Workflow, className: "top-[70%] left-[12%]" },
  { id: 4, icon: Zap, className: "bottom-[12%] right-[10%]" },

  { id: 5, icon: IndianRupee, className: "top-[40%] left-[6%]" },
  { id: 6, icon: LineChart, className: "top-[55%] right-[6%]" },

  { id: 7, icon: Cpu, className: "top-[5%] left-[35%]" },
  { id: 8, icon: Network, className: "top-[5%] right-[35%]" },

  { id: 9, icon: Database, className: "top-[75%] right-[30%]" },
  { id: 10, icon: Cloud, className: "top-[75%] left-[30%]" },

  { id: 11, icon: Settings, className: "top-[25%] left-[20%]" },
  { id: 12, icon: Layers, className: "top-[25%] right-[20%]" },

  { id: 13, icon: ShieldCheck, className: "bottom-[6%] left-[45%]" },
  { id: 14, icon: Gauge, className: "top-[90%] right-[45%]" },

  { id: 15, icon: Puzzle, className: "top-[60%] left-[20%]" },
  { id: 16, icon: Rocket, className: "top-[60%] right-[20%]" },
]

function HeroSection() {
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

export default HeroSection
