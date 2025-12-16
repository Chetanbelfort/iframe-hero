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
      dragMomentum
      dragElastic={0.9}
      whileTap={{ scale: 1.15 }}
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
          shadow-xl
          flex items-center justify-center
        "
        animate={{
          y: [0, -10, 0, 10, 0],
          rotate: [0, 6, 0, -6, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
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
  title,
  subtitle,
  ctaText,
  ctaHref,
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
        touch-pan-y
        overscroll-none
      "
    >
      {/* TOP BRAND */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <p className="text-xs sm:text-sm tracking-wide text-black/60 font-semibold">
          ALL India AI
        </p>
      </div>

      {/* ICON LAYER */}
      <div className="absolute inset-0">
        {icons.map((icon, index) => (
          <FloatingIcon key={icon.id} iconData={icon} index={index} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl text-center px-5">
        {/* HEADLINE */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight">
          Build & Sell AI Agent Solutions
        </h1>

        {/* SMALLER SECOND LINE */}
        <p className="mt-2 text-lg sm:text-xl md:text-2xl text-black/60 font-medium">
          Without Learning AI, Coding, or n8n
        </p>

        {/* SUB-HEADLINE */}
        <p className="mt-6 text-lg sm:text-xl text-black/70">
          We build, manage, and support AI agents for your clients.
          <br />
          You focus on sales. We handle everything technical — end-to-end.
        </p>

        {/* SUPPORTING LINE */}
        <p className="mt-4 text-base sm:text-lg italic text-black/60">
          This is not a course.
          <br />
          This is a done-for-you AI delivery & partner system.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* PRIMARY CTA */}
          <Button
            asChild
            size="lg"
            className="
              bg-black text-white
              px-10 py-6
              text-base sm:text-lg
              shadow-lg
              hover:bg-black/90
              w-full sm:w-auto
            "
          >
            <a href={ctaHref} target="_parent">
              👉 Become an Authorized Partner
            </a>
          </Button>

          {/* SECONDARY CTA (FIXED FOR MOBILE) */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="
              border-black text-black
              px-10 py-6
              text-base sm:text-lg
              hover:bg-black/5
              w-full sm:w-auto
            "
          >
            <a href="/ai-agents" target="_parent">
              👉 Get AI Agents Built for My Business
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
