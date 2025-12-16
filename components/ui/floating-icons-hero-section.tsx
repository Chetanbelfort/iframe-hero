'use client'

import * as React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

/* -------------------------------- ICON TYPES -------------------------------- */

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

/* ------------------------------- ICON LOGIC -------------------------------- */

function FloatingIcon({
  mouseX,
  mouseY,
  iconData,
  index,
  dragConstraints,
}: {
  mouseX: React.MutableRefObject<number>
  mouseY: React.MutableRefObject<number>
  iconData: IconProps
  index: number
  dragConstraints: React.RefObject<HTMLDivElement>
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  /* Mouse / Touch Repel Logic */
  React.useEffect(() => {
    const handleMove = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const dx = mouseX.current - (rect.left + rect.width / 2)
      const dy = mouseY.current - (rect.top + rect.height / 2)
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150) {
        const force = (1 - distance / 150) * 50
        x.set(-dx * force * 0.01)
        y.set(-dy * force * 0.01)
      }
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('touchmove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
    }
  }, [mouseX, mouseY, x, y])

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.45}
      dragMomentum={true}
      whileTap={{ scale: 1.12 }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className={cn(
        'absolute touch-none cursor-grab active:cursor-grabbing',
        iconData.className
      )}
    >
      {/* Continuous floating animation */}
      <motion.div
        className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-card/80 backdrop-blur-md border border-border/10 shadow-xl"
        animate={{
          y: [0, -12, 0, 12, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 6, 0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <iconData.icon className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
      </motion.div>
    </motion.div>
  )
}

/* ------------------------------- MAIN HERO -------------------------------- */

function FloatingIconsHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  icons,
  className,
}: FloatingIconsHeroProps & { className?: string }) {
  const mouseX = React.useRef(0)
  const mouseY = React.useRef(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  return (
    <section
      onMouseMove={(e) => {
        mouseX.current = e.clientX
        mouseY.current = e.clientY
      }}
      onTouchMove={(e) => {
        mouseX.current = e.touches[0].clientX
        mouseY.current = e.touches[0].clientY
      }}
      className={cn(
        'relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-background',
        className
      )}
    >
      {/* Floating Icons Layer */}
      <div ref={containerRef} className="absolute inset-0">
        {icons.map((icon, index) => (
          <FloatingIcon
            key={icon.id}
            mouseX={mouseX}
            mouseY={mouseY}
            iconData={icon}
            index={index}
            dragConstraints={containerRef}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>

        <div className="mt-10">
          <Button asChild size="lg">
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FloatingIconsHero
