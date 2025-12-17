'use client'

import React, {
  useRef,
  useEffect,
  useState,
  createElement,
  useMemo,
  memo,
} from 'react'

/* ---------------- TAG EXPORT ---------------- */

export enum Tag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  P = 'p',
}

/* ---------------- TYPES ---------------- */

type Particle = {
  x: number
  y: number
  originalX: number
  originalY: number
  opacity: number
  originalOpacity: number
}

type VaporizeTextCycleProps = {
  texts: string[]
  fontSize?: number
  color?: string
  tag?: Tag
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function VaporizeTextCycle({
  texts,
  fontSize = 64,
  color = '#000',
  tag = Tag.H1,
}: VaporizeTextCycleProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const particlesRef = useRef<Particle[]>([])
  const animationFrame = useRef<number | null>(null)

  const [index, setIndex] = useState(0)

  /* ---------------- CREATE PARTICLES ---------------- */

  const createParticles = (
    ctx: CanvasRenderingContext2D,
    text: string,
    width: number,
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height)

    ctx.fillStyle = color
    ctx.font = `600 ${fontSize}px Inter, system-ui`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(text, width / 2, height / 2)

    const data = ctx.getImageData(0, 0, width, height).data
    const particles: Particle[] = []

    for (let y = 0; y < height; y += 3) {
      for (let x = 0; x < width; x += 3) {
        const i = (y * width + x) * 4
        if (data[i + 3] > 0) {
          particles.push({
            x,
            y,
            originalX: x,
            originalY: y,
            opacity: 1,
            originalOpacity: 1,
          })
        }
      }
    }

    ctx.clearRect(0, 0, width, height)
    return particles
  }

  /* ---------------- ANIMATION LOOP ---------------- */

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let done = true

    particlesRef.current.forEach((p) => {
      p.x += (Math.random() - 0.5) * 1.5
      p.y += (Math.random() - 1.5) * 2
      p.opacity -= 0.01

      if (p.opacity > 0) {
        done = false
        ctx.fillStyle = `rgba(0,0,0,${p.opacity})`
        ctx.fillRect(p.x, p.y, 1, 1)
      }
    })

    if (done) {
      setIndex((i) => (i + 1) % texts.length)
      return
    }

    animationFrame.current = requestAnimationFrame(animate)
  }

  /* ---------------- INIT ---------------- */

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const rect = wrapper.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    particlesRef.current = createParticles(
      ctx,
      texts[index],
      canvas.width,
      canvas.height
    )

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrame.current)
        cancelAnimationFrame(animationFrame.current)
    }
  }, [index])

  /* ---------------- RENDER ---------------- */

  return (
    <div ref={wrapperRef} className="relative w-full h-[120px]">
      <canvas ref={canvasRef} className="absolute inset-0" />
      {createElement(tag, {
        className: 'sr-only',
        children: texts[index],
      })}
    </div>
  )
}
