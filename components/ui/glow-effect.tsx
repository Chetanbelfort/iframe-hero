'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import type { Transition } from 'motion/react'

export type GlowEffectProps = {
  className?: string
  colors?: string[]
  mode?: 'rotate' | 'static'
  blur?: 'soft' | 'medium' | 'strong' | 'stronger'
  scale?: number
  duration?: number
  transition?: Transition
}

export function GlowEffect({
  className,
  colors = ['#0894FF', '#C959DD', '#FF2E54', '#FF9004'],
  mode = 'static',
  blur = 'medium',
  scale = 1.2,
  duration = 6,
  transition,
}: GlowEffectProps) {
  const animation =
    mode === 'rotate'
      ? {
          background: [
            `conic-gradient(from 0deg, ${colors.join(', ')})`,
            `conic-gradient(from 360deg, ${colors.join(', ')})`,
          ],
          transition:
            transition ?? { repeat: Infinity, duration, ease: 'linear' },
        }
      : {
          background: `linear-gradient(to right, ${colors.join(', ')})`,
        }

  const blurMap = {
    soft: 'blur',
    medium: 'blur-md',
    strong: 'blur-lg',
    stronger: 'blur-xl',
  }

  return (
    <motion.div
      animate={animation}
      className={cn(
        'absolute inset-0 pointer-events-none',
        blurMap[blur],
        'opacity-30',
        className
      )}
      style={{
        transform: `scale(${scale})`,
      }}
    />
  )
}
