import { VerticalTextStack } from "@/components/ui/vertical-text-stack"

export default function StuckRealitySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto text-center mb-20 px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          Let’s be honest — quietly.
        </h2>

        <p className="mt-6 text-lg text-black/60">
          This is where most capable people are stuck today:
        </p>
      </div>

      <VerticalTextStack />
    </section>
  )
}
