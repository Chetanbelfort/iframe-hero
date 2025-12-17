import { VerticalTextStack } from '@/components/ui/vertical-text-stack'
import { GlowEffect } from '@/components/ui/glow-effect'

export default function StuckRealitySection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      
      {/* GLOW BACKGROUND */}
      <GlowEffect
        className="opacity-30"
        colors={['#E5F0FF', '#F5E9FF', '#FFF1E0']}
        blur="strong"
        scale={1.2}
      />

      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
            Let’s be honest — quietly.
          </h2>

          <p className="mt-4 text-lg text-black/60">
            This is where most capable people are stuck today:
          </p>
        </div>

        <VerticalTextStack />
      </div>
    </section>
  )
}
