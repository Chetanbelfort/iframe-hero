'use client'

import DatabaseWithRestApi from '@/components/ui/database-with-rest-api'

export default function DatabaseSection() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          From Day 1, your role is simple.
        </h2>

        <p className="mt-6 text-lg text-black/60">
          You don’t need to become technical.
          <br />
          You just focus on conversations and confidence.
        </p>
      </div>

      {/* STEP LIST */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-20">
        <ol className="space-y-4 text-lg text-black font-medium">
          <li>1️⃣ Talk to businesses</li>
          <li>2️⃣ Understand their problem</li>
          <li>3️⃣ Close the deal</li>
        </ol>

        <p className="mt-6 text-black/70 font-medium">
          That’s it.
        </p>
      </div>

      {/* VISUAL SYSTEM */}
      <div className="flex justify-center px-6">
        <DatabaseWithRestApi
          title="Everything else is handled by us"
          badgeTexts={{
            first: 'AI Agents',
            second: 'Automations',
            third: 'Integrations',
            fourth: 'Support',
          }}
          buttonTexts={{
            first: 'Delivery Team',
            second: 'Live Systems',
          }}
          circleText="AI"
        />
      </div>

      {/* SUPPORTING COPY */}
      <div className="max-w-3xl mx-auto text-center px-6 mt-20">
        <p className="text-lg text-black/70 leading-relaxed">
          You don’t learn and hope.
          <br />
          You sell and deliver with confidence.
        </p>
      </div>

    </section>
  )
}
