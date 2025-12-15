'use client'

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/spline"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroPage() {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-6">
      <Card className="relative w-full max-w-7xl h-[600px] overflow-hidden bg-black/[0.96] border-neutral-800">
        
        {/* Ambient Light */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center px-8 md:px-12">
            
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
              <Sparkles className="h-4 w-4" />
              Done-For-You AI Partner System
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
              Build & Sell AI Agent Solutions  
              <br />
              Without Learning AI, Coding, or n8n
            </h1>

            <p className="mt-6 text-neutral-300 text-lg max-w-xl">
              We build, manage, and support AI agents for your clients.
              <br />
              You focus on sales. We handle everything technical — end-to-end.
            </p>

            <p className="mt-4 text-neutral-400 italic">
              This is not a course.  
              This is a done-for-you AI delivery & partner system.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-black font-semibold hover:bg-neutral-200 transition">
                Become an Authorized Partner
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-6 py-3 text-white hover:bg-neutral-900 transition">
                Get AI Agents Built for My Business
              </button>

            </div>
          </div>

          {/* RIGHT 3D SCENE */}
          <div className="relative hidden md:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>

        </div>
      </Card>
    </section>
  )
}
