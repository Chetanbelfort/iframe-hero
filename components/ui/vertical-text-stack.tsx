'use client'

import { motion } from 'framer-motion'

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
      <div className="flex flex-col gap-4 md:gap-5">
        {items.map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              ease: 'easeOut',
              delay: index * 0.06,
            }}
            className="
              text-base
              md:text-lg
              text-black/70
              leading-relaxed
              text-center
            "
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
