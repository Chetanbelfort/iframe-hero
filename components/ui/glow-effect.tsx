'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import type { Transition } from 'motion/react'

export type GlowEffectProps = {
  className?: string
  style?: React.CSSProperties
  colors?: string[]
  mode?:
    | 'rotate'
    | 'pulse'
    | 'breathe'
    | 'colorShift'
    | 'flowHorizontal'
    | 'static'
  blur?:
    | number
    | 'softest'
    | 'soft'
    | 'medium'
    | 'strong'
    | 'stronger'
    | 'strongest'
    | 'none'
  transition?: Transition
  scale?: number
  duration?: number
}

export function GlowEffect({
  className,
  style,
  colors = ['#0894FF', '#C959DD', '#FF2E54', '#FF9004'],
  mode = 'static',
  blur = 'medium',
  transition,
  scale = 1,
  duration = 6,
}: GlowEffectProps) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration,
    ease: 'linear',
  }

  const animations = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
      ],
      transition: transition ?? BASE_TRANSITION,
    },
    static: {
      background: `linear-gradient(to right, ${colors.join(', ')})`,
    },
  }

  const blurMap = {
    softest: 'blur-sm',
    soft: 'blur',
    medium: 'blur-md',
    strong: 'blur-lg',
    stronger: 'blur-xl',
    strongest: 'blur-2xl',
    none: 'blur-none',
  }

  return (
  <motion.div
    animate={animations[mode]}
    className={cn(
      'absolute inset-0 h-full w-full',
      'opacity-100 blur-2xl',   // 👈 FORCE VISIBILITY
      className
    )}
  />
 )
}
