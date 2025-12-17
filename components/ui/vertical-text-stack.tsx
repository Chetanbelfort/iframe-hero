'use client'

import { motion } from 'framer-motion'
import { GlowEffect } from '@/components/ui/glow-effect'

const items = [
  "You’ve learned skills… but income is inconsistent",
  "You depend on yourself for everything",
  "You start things, but scaling feels impossible",
  "Every few months there’s a new tool, a new course, a new promise",
  "You know AI is big — but you don’t want to gamble your reputation",
  "You’re tired of “trying”, “testing”, and “figuring it out alone”",
]

export function VerticalTextStack() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* CARDS */}
      <div className="flex flex-col gap-6">
        {items.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
              delay: index * 0.08,
            }}
            whileHover={{ y: -2 }}
            className="relative"
          >
            {/* Subtle dark glow behind card */}
            <GlowEffect
              colors={['#0F172A', '#111827', '#000000']}
              blur="medium"
              scale={1.08}
              className="opacity-25"
            />

            {/* CARD */}
            <div
              className="
                relative z-10
                rounded-2xl
                bg-white
                px-7 py-5
                text-left
                text-base md:text-lg
                text-black/80
                leading-relaxed

                border border-black/10
                shadow-[0_12px_32px_rgba(0,0,0,0.14)]
                backdrop-blur-sm

                transition-all duration-300
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]
              "
            >
              {text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* EMOTIONAL RELIEF TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
        className="mt-16 text-center"
      >
        <p className="text-xl md:text-2xl font-medium text-black">
          You’re not lazy.
          <br />
          You’re not incapable.
        </p>

        <p className="mt-4 text-lg text-black/60">
          You’re just carrying too much responsibility by yourself.
        </p>
      </motion.div>
    </div>
  )
}
