'use client'

import DatabaseWithRestApi from '@/components/ui/database-with-rest-api'

export default function DatabaseSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-black">
          From Day 1, your role is simple
        </h2>

        <p className="mt-6 text-lg text-black/60 leading-relaxed">
          You sell with confidence. We handle delivery.
        </p>
      </div>

      <div className="flex justify-center px-6">
        <DatabaseWithRestApi
          title="Everything else is handled by us"
          circleText="AI"
          lightColor="#00A6F5"
          badgeTexts={{
            first: 'AI Agents',
            second: 'WhatsApp AI',
            third: 'Automations',
            fourth: 'Integrations',
          }}
          buttonTexts={{
            first: 'Delivery Team',
            second: 'Live Systems',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center mt-16 px-6">
        <p className="text-lg text-black/70 leading-relaxed">
          You don’t learn and hope.
          <br />
          You sell and deliver with confidence.
        </p>
      </div>
    </section>
  )
}
