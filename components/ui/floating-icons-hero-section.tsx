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
          border border-black/10
          shadow-[0_25px_50px_rgba(0,0,0,0.08)]
          flex items-center justify-center
        "
        animate={{
          y: [0, -10, 0, 10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <iconData.icon className="w-8 h-8 md:w-10 md:h-10 text-[#0B1F3B]" />
      </motion.div>
    </motion.div>
  )
}

/* ---------------- HERO ---------------- */

export default function FloatingIconsHero({
  icons,
}: FloatingIconsHeroProps) {
  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center"
      style={{ color: '#0B1F3B' }}   // 🔑 FORCE TEXT COLOR (iframe-safe)
    >
      {/* 🌬️ AIR / FLOW BACKGROUND */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `
            radial-gradient(1200px 600px at 15% 20%, rgba(37,99,235,0.14), transparent 60%),
            radial-gradient(1000px 500px at 85% 80%, rgba(147,51,234,0.12), transparent 60%),
            linear-gradient(180deg, #F8FAFF, #EEF2FF)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* BRAND */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <span className="text-[11px] tracking-[0.35em] font-medium text-[#0B1F3B]/60">
          ALL INDIA AI
        </span>
      </div>

      {/* ICONS */}
      <div className="absolute inset-0">
        {icons.map((icon, index) => (
          <FloatingIcon key={icon.id} iconData={icon} index={index} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        {/* MAIN HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-[#0B1F3B]">
          Build Your Own AI Services Business
        </h1>

        {/* VAPOUR LINE */}
        <div className="mt-4">
          <VapourHeroLine />
        </div>

        {/* SUBTEXT */}
        <p className="mt-10 text-base sm:text-lg leading-relaxed text-[#0B1F3B]/70">
          A ready-made AI business model where you bring clients,
          <br />
          and we build, manage, and fix AI agents, micro-SaaS AI apps,
          and AI solutions for you — end to end.
        </p>

        {/* SUPPORTING LINE */}
        <p className="mt-6 text-sm sm:text-base italic text-[#0B1F3B]/55">
          This is not a course.
          <br />
          This is an authorized partner / franchise-style AI business.
        </p>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="
              bg-[#0B1F3B] text-white
              px-12 py-6
              rounded-full
              text-base sm:text-lg
              shadow-lg
              transition-all
              hover:scale-[1.03]
              hover:shadow-xl
              w-full sm:w-auto
            "
          >
            <a href="/partner" target="_parent">
              Apply to Become an Authorized Partner
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            className="
              bg-[#0B1F3B] text-white
              px-12 py-6
              rounded-full
              text-base sm:text-lg
              shadow-md
              transition-all
              hover:scale-[1.03]
              hover:shadow-lg
              w-full sm:w-auto
            "
          >
            <a href="/partner-model" target="_parent">
              Get AI Agents Built for My Business
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
