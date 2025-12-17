import { GlowEffect } from '@/components/ui/glow-effect'
import { VerticalTextStack } from '@/components/ui/vertical-text-stack'

export default function StuckRealitySection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* GLOW BACKGROUND */}
      <GlowEffect
        colors={['#EAF2FF', '#F4ECFF', '#FFF3E6']}
        blur="strong"
        scale={1.25}
        className="opacity-25"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 px-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-black">
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
