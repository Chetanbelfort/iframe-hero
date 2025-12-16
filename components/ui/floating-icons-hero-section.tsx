'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/* -------------------------------- TYPES -------------------------------- */

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

/* ------------------------------- ICON -------------------------------- */

function FloatingIcon({
  iconData,
  index,
  containerRef,
}: {
  iconData: IconProps
  index: number
  containerRef: React.RefObject<HTMLDivElement>
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 180, damping: 18 })
  const springY = useSpring(y, { stiffness: 180, damping: 18 })

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      dragMomentum
      dragTransition={{ power: 0.2, timeConstant: 200 }}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 1.12 }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        'absolute cursor-grab active:cursor-grabbing touch-none',
        iconData.className
      )}
    >
      {/* Always floating (mobile + desktop) */}
      <motion.div
        className="
          flex items-center justify-center
          w-16 h-16 md:w-20 md:h-20
          rounded-3xl
          bg-white
          border border-black/10
          shadow-xl
        "
        animate={{
          y: [0, -10, 0, 10, 0],
          rotate: [0, 5, 0, -5, 0],
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

/* ------------------------------- HERO -------------------------------- */

export default function FloatingIconsHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  icons,
  className,
}: FloatingIconsHeroProps & { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <section
      className={cn(
        // ✅ WHITE THEME EVERYWHERE
        'relative w-full h-screen min-h-[700px] bg-white overflow-hidden flex items-center justify-center',
        className
      )}
    >
      {/* FULL SCREEN DRAG AREA */}
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-visible touch-none"
      >
        {icons.map((icon, index) => (
          <FloatingIcon
            key={icon.id}
            iconData={icon}
            index={index}
            containerRef={containerRef}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4">
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
              px-10 py-6
              bg-black text-white
              hover:bg-black/90
              shadow-lg
            "
          >
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
