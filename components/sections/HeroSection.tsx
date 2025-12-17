'use client'

import FloatingIconsHero from '@/components/ui/floating-icons-hero-section'
import { VapourHeroLine } from '@/components/ui/VapourHeroLine'

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

const icons = [
  { id: 1, icon: Brain, className: 'top-[4%] left-[4%]' },
  { id: 2, icon: Bot, className: 'top-[4%] right-[4%]' },
  { id: 3, icon: Workflow, className: 'bottom-[4%] left-[4%]' },
  { id: 4, icon: Zap, className: 'bottom-[4%] right-[4%]' },
  { id: 5, icon: IndianRupee, className: 'top-[45%] left-[2%]' },
  { id: 6, icon: LineChart, className: 'top-[45%] right-[2%]' },

  { id: 7, icon: Cloud, className: 'hidden sm:block top-[10%] left-[30%]' },
  { id: 8, icon: Rocket, className: 'hidden sm:block bottom-[12%] right-[35%]' },
  { id: 9, icon: Database, className: 'hidden sm:block top-[70%] left-[30%]' },
]

export default function HeroSection() {
  return (
    <FloatingIconsHero icons={icons}>
      {/* TOP BRAND */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm font-medium tracking-wide text-black/70">
        ALL India AI
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-black leading-tight">
          Build Your Own AI Services Business
        </h1>

        <p className="mt-3 text-lg md:text-xl text-black/60">
          Without Learning AI, Coding, or Tools
        </p>

        <p className="mt-6 text-lg text-black/70">
          A ready-made AI business model where you bring clients,<br />
          and we build, manage, and fix AI Agents, Micro SaaS AI Apps,
          and AI solutions — end to end.
        </p>

        <p className="mt-4 text-base text-black/60">
          No tech learning. No backend work. No trial-and-error.
        </p>

        {/* VAPOUR EMPHASIS */}
        <div className="mt-10">
          <VapourHeroLine />
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/partner"
            target="_parent"
            className="
              inline-flex items-center justify-center
              rounded-xl
              bg-black text-white
              px-8 py-4
              text-lg font-medium
              transition-all
              hover:scale-[1.04]
              hover:shadow-2xl
            "
          >
            Apply to Become an Authorized Partner
          </a>

          <a
            href="/partner-model"
            target="_parent"
            className="
              inline-flex items-center justify-center
              rounded-xl
              border border-black/20
              px-8 py-4
              text-lg font-medium
              text-black
              transition-all
              hover:bg-black hover:text-white
              hover:shadow-2xl
            "
          >
            See How the Partner Model Works
          </a>
        </div>
      </div>
    </FloatingIconsHero>
  )
}
