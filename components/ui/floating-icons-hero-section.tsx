'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface IconProps {
  id: number
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  className: string
}

export interface FloatingIconsHeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
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
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
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
    <section
      className="
        relative
        w-full
        min-h-[100svh]
        bg-white
        overflow-hidden
        flex items-center justify-center
      "
    >
      {/* BRAND */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
        <span className="text-xs tracking-[0.2em] text-black/50 font-medium">
          ALL INDIA AI
        </span>
      </div>

      {/* ICON LAYER */}
      <div className="absolute inset-0">
        {icons.map((icon, index) => (
          <FloatingIcon key={icon.id} iconData={icon} index={index} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-6">
        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-black tracking-tight leading-tight">
          Build once.
          <br />
          Deliver AI everywhere.
        </h1>

        {/* SUBLINE */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-black/60 font-normal">
          Without learning AI, automation tools, or technical systems.
        </p>

        {/* DESCRIPTION */}
        <p className="mt-8 text-base sm:text-lg text-black/70 leading-relaxed">
          We design, build, and operate AI agents for your clients.
          <br />
          You focus on relationships. We take care of the technology.
        </p>

        {/* SUPPORTING STATEMENT */}
        <p className="mt-4 text-sm sm:text-base text-black/50 italic">
          Not a course. Not a platform.
          <br />
          A fully managed AI delivery partnership.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* PRIMARY */}
          <Button
            asChild
            size="lg"
            className="
              bg-black text-white
              px-12 py-6
              text-base sm:text-lg
              rounded-full
              shadow-md
              hover:bg-black/90
              w-full sm:w-auto
            "
          >
            <a href="/partner" target="_parent">
              Become a Partner
            </a>
          </Button>

          {/* SECONDARY */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              border-black/30 text-black
              px-12 py-6
              text-base sm:text-lg
              rounded-full
              hover:bg-black/5
              w-full sm:w-auto
            "
          >
            <a href="/ai-agents" target="_parent">
              Build AI for My Business
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
