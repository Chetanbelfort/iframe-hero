'use client'

import DatabaseWithRestApi from '@/components/ui/database-with-rest-api'

export default function DatabaseSection() {
  return (
    <section className="bg-white py-28 w-full">
      
      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto text-center px-6 mb-20">
        <p className="text-sm uppercase tracking-widest text-black/50 mb-4">
          How It Works — Day-1 Clarity
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          From Day 1, your role is simple.
        </h2>
      </div>

      {/* MAIN CONTENT — FULL WIDTH */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
        
        {/* LEFT — ROLE CLARITY */}
        <div className="space-y-10">
          
          <div className="space-y-6 text-lg text-black/80 leading-relaxed">
            <p className="font-medium text-black">
              You only do three things:
            </p>

            <ul className="space-y-4">
              <li>1️⃣ Talk to businesses</li>
              <li>2️⃣ Understand their problem</li>
              <li>3️⃣ Close the deal</li>
            </ul>

            <p className="font-semibold text-black">
              That’s it.
            </p>
          </div>

          <div className="pt-6 border-t border-black/10 space-y-4 text-black/70">
            <p className="font-medium text-black">
              Everything else is handled by us:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
              <li>• AI agents</li>
              <li>• WhatsApp AI</li>
              <li>• Automation workflows</li>
              <li>• Integrations</li>
              <li>• Fixes & upgrades</li>
              <li>• Ongoing support</li>
            </ul>
          </div>
        </div>

        {/* RIGHT — DELIVERY SYSTEM */}
        <div className="flex justify-center">
          <DatabaseWithRestApi
            title="Delivery Engine (Handled by Us)"
            circleText="AI"
            lightColor="#00A6F5"
            badgeTexts={{
              first: 'AI Agents',
              second: 'WhatsApp AI',
              third: 'Automation',
              fourth: 'Integrations',
            }}
            buttonTexts={{
              first: 'Delivery',
              second: 'Support',
            }}
          />
        </div>
      </div>

      {/* BOTTOM CONFIDENCE CLOSE */}
      <div className="max-w-4xl mx-auto text-center mt-24 px-6">
        <p className="text-xl md:text-2xl font-medium text-black leading-relaxed">
          You don’t learn and hope.
          <br />
          <span className="text-black/60">
            You sell and deliver with confidence.
          </span>
        </p>
      </div>
    </section>
  )
}
