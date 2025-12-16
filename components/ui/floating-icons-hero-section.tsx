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

  const springX = useSpring(x, { stiffness: 110, damping: 18 })
  const springY = useSpring(y, { stiffness: 110, damping: 18 })

  return (
    <motion.div
      drag
      dragMomentum
      dragElastic={0.85}
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
          pointer-events-auto
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
      style={{
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* ICON LAYER */}
      <div className="absolute inset-0 pointer-events-auto">
        {icons.map((icon, index) => (
          <FloatingIcon key={icon.id} iconData={icon} index={index} />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 pointer-events-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-black">
          {title}
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-lg text-black/70">
          {subtitle}
        </p>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="
              bg-black text-white
              px-10 py-6
              shadow-lg
              hover:bg-black/90
            "
          >
            <a href={ctaHref} target="_parent">
              {ctaText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
