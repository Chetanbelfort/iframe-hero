'use client'

import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-screen min-h-screen bg-black overflow-hidden">

      {/* 🔝 TOP BRAND */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
        <h2
          className="
            text-xl sm:text-2xl md:text-3xl
            font-bold tracking-wide
            bg-gradient-to-r from-white via-neutral-300 to-white
            bg-clip-text text-transparent
          "
        >
          ALL India AI
        </h2>
      </div>

      {/* Ambient spotlight */}
      <Spotlight className="-top-40 left-1/2 -translate-x-1/2 md:left-60 md:-top-20 opacity-70" />

      {/* MAIN GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-20 text-center md:text-left">

          {/* Tagline */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs sm:text-sm text-neutral-400 mb-4">
            <Sparkles className="h-4 w-4" />
            Done-For-You AI Partner System
          </div>

          {/* Headline */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              xl:text-6xl
              font-bold
              leading-tight
              bg-gradient-to-b from-white to-neutral-400
              bg-clip-text text-transparent
            "
          >
            Build & Sell AI Agent Solutions
            <br />
            Without Learning AI, Coding, or n8n
          </h1>

          {/* Description */}
          <p className="mt-6 text-neutral-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            We build, manage, and support AI agents for your clients.
            <br className="hidden sm:block" />
            You focus on sales. We handle everything technical — end-to-end.
          </p>

          {/* Not a course */}
          <p className="mt-4 text-neutral-400 italic text-sm sm:text-base">
            This is not a course.
            <br className="sm:hidden" />
            This is a done-for-you AI delivery & partner system.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start">

            <button
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                rounded-lg bg-white px-6 py-3
                text-black font-semibold
                hover:bg-neutral-200 transition
              "
              onClick={() =>
                window.open(
                  "https://yourwordpresssite.com/partner",
                  "_parent"
                )
              }
            >
              Become an Authorized Partner
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center
                rounded-lg border border-neutral-700
                px-6 py-3 text-white
                hover:bg-neutral-900 transition
              "
              onClick={() =>
                window.open(
                  "https://yourwordpresssite.com/ai-agents",
                  "_parent"
                )
              }
            >
              Get AI Agents Built for My Business
            </button>

          </div>
        </div>

        {/* RIGHT – 3D (DESKTOP ONLY) */}
        <div className="relative hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  )
}
