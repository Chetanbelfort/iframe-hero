"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"

const slides = [
  "You’ve learned skills… but income is inconsistent",
  "You depend on yourself for everything",
  "You start things, but scaling feels impossible",
  "Every few months there’s a new tool, a new course, a new promise",
  "You know AI is big — but you don’t want to gamble your reputation",
  "You’re tired of trying, testing, and figuring it out alone",
]

export function VerticalTextStack() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavTime = useRef(0)
  const cooldown = 400

  const navigate = useCallback((direction: number) => {
    const now = Date.now()
    if (now - lastNavTime.current < cooldown) return
    lastNavTime.current = now

    setCurrentIndex((prev) => {
      if (direction > 0) return prev === slides.length - 1 ? 0 : prev + 1
      return prev === 0 ? slides.length - 1 : prev - 1
    })
  }, [])

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y < -60) navigate(1)
    if (info.offset.y > 60) navigate(-1)
  }

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 30) navigate(e.deltaY > 0 ? 1 : -1)
    }
    window.addEventListener("wheel", onWheel, { passive: true })
    return () => window.removeEventListener("wheel", onWheel)
  }, [navigate])

  const getStyle = (index: number) => {
    const diff = index - currentIndex
    if (diff === 0) return { y: 0, scale: 1, opacity: 1, zIndex: 3 }
    if (diff === -1) return { y: -140, scale: 0.9, opacity: 0.5, zIndex: 2 }
    if (diff === 1) return { y: 140, scale: 0.9, opacity: 0.5, zIndex: 2 }
    return { y: diff > 0 ? 260 : -260, scale: 0.8, opacity: 0, zIndex: 0 }
  }

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),transparent_60%)]" />

      <div className="relative w-full max-w-xl h-[480px] flex items-center justify-center">
        {slides.map((text, index) => {
          const style = getStyle(index)
          return (
            <motion.div
              key={index}
              drag={index === currentIndex ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.25}
              onDragEnd={onDragEnd}
              animate={style}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="absolute w-full px-8 cursor-grab active:cursor-grabbing"
              style={{ zIndex: style.zIndex }}
            >
              <div className="rounded-3xl bg-white border border-black/10 shadow-xl px-8 py-10 text-center">
                <p className="text-xl md:text-2xl font-medium text-black leading-relaxed">
                  {text}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="absolute bottom-10 text-xs tracking-widest text-black/40 uppercase">
        Scroll or drag
      </div>
    </section>
  )
}
