'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'
import VapourHeroLine from '@/components/ui/VapourHeroLine'

interface IconProps {
  id: number
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  className: string
}

export interface FloatingIconsHeroProps {
  icons: IconProps[]
}

/* ---------------- ICON ---------------- */

function FloatingIcon({
  iconData,
  index,
}: {
  iconData: IconProps
  index: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 120, damping: 18 })
  const springY = useSpring(y, { stiffness: 120, damping: 18 })

  return (
    <motion.div
      drag
      dragElastic={0.9}
      whileTap={{ scale: 1.12 }}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={`absolute cursor-grab active:cursor-grabbing ${iconData.className}`}
    >
      <motion.div
        className="
          w-16 h-16 md:w-20 md:h-20
          rounded-3xl
          bg-white
          border border-white/10
          shadow-[0_25px_50px_rgba(0,0,0,0.6)]
          flex items-center justify-center
        "
        animate={{
          y: [0, -10, 0, 10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6 + Math.random() * 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <iconData.icon className="w-8 h-8 md:w-10 md:h-10 text-black" />
      </motion.div>
    </motion.div>
  )
}

/* ---------------- HERO ---------------- */

export default function FloatingIconsHero({
  icons,
}: FloatingIconsHeroProps) {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#05060A]">

      {/* DARK GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/40 via-[#020617] to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      {/* BRAND */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <span className="text-[11px] tracking-[0.35em] text-white/50 font-medium">
          ALL INDIA AI
        </span>
      </div>

      {/* ICONS */}
      <div className="absolute inset-0 z-10">
        {icons.map((icon, index) => (
          <FloatingIcon key={icon.id} iconData={icon} index={index} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-4xl text-center px-6">

        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
          Build Your Own AI Services Business
        </h1>

        {/* VAPOUR LINE */}
        <div className="mt-4">
          <VapourHeroLine />
        </div>

        <p className="mt-10 text-lg md:text-xl text-white/70 leading-relaxed">
          A ready-made AI business model where you bring clients,
          <br />
          and we build, manage, and fix AI agents, micro-SaaS apps,
          and AI systems — end to end.
        </p>

        <p className="mt-6 text-sm md:text-base text-white/50 italic">
          This is not a course.
          <br />
          This is an authorized partner / franchise-style AI business.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-full text-lg shadow-xl"
          >
            <a href="/partner" target="_parent">
              Apply to Become an Authorized Partner
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white px-12 py-6 rounded-full text-lg border border-white/20"
          >
            <a href="/partner-model" target="_parent">
              See How the Partner Model Works
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
