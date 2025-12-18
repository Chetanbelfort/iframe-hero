'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function HeroBackground({
  children,
} {
  children ReactNode
}) {
  return (
    section className=relative w-full min-h-[100svh] overflow-hidden bg-black
      
      { Animated Gradient }
      motion.div
        className=absolute inset-0
        animate={{
          backgroundPosition ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration 25,
          repeat Infinity,
          ease 'linear',
        }}
        style={{
          background `
            radial-gradient(
              1200px 600px at 30% 40%,
              #2f4ddb,
              #0b0b0d
            )
          `,
        }}
      

      { Soft depth overlay }
      div className=absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_40%)] 

      { Content }
      div className=relative z-10
        {children}
      div
    section
  )
}
