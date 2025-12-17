'use client'

import DatabaseWithRestApi from '@/components/ui/database-with-rest-api'

export default function DatabaseSection() {
  return (
    <section className="w-full bg-white py-28">
      
      {/* SECTION TITLE */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <p className="text-sm tracking-widest text-black/50 mb-4">
          HOW IT WORKS — DAY 1 CLARITY
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-black leading-tight">
          From Day 1, your role is simple
        </h2>
      </div>

      {/* DAY 1 STEPS */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-24">
        <ol className="space-y-4 text-xl text-black/70">
          <li>1️⃣ Talk to businesses</li>
          <li>2️⃣ Understand their problem</li>
          <li>3️⃣ Close the deal</li>
        </ol>

        <p className="mt-8 text-lg text-black font-medium">
          That’s it.
        </p>
      </div>

      {/* DATABASE VISUAL */}
      <div className="flex justify-center mb-28 px-6">
        <DatabaseWithRestApi
          title="Everything else is handled by us"
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

      {/* CENTRAL AI ENGINE */}
      <div className="max-w-7xl mx-auto px-6 mb-28">
        <h3 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          All India AI is your central AI delivery engine
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* NOT */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              We are <span className="text-red-500">not</span>:
            </h4>
            <ul className="space-y-4 text-lg text-black/70">
              <li>• A training institute</li>
              <li>• A DIY SaaS tool</li>
              <li>• A “learn and hope” platform</li>
            </ul>
          </div>

          {/* ARE */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              We are a central AI factory that:
            </h4>
            <ul className="space-y-4 text-lg text-black/70">
              <li>• Builds AI agents</li>
              <li>• Maintains workflows</li>
              <li>• Handles n8n & APIs</li>
              <li>• Fixes errors</li>
              <li>• Manages upgrades</li>
              <li>• Takes full responsibility</li>
            </ul>
          </div>

        </div>
      </div>

      {/* CLEAR ROLES */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="border border-black/10 rounded-2xl p-10">
          
          <h4 className="text-2xl font-semibold text-center mb-12">
            Clear roles (important)
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div>
              <p className="uppercase text-sm tracking-widest text-black/50 mb-4">
                You handle the front-end
              </p>
              <p className="text-lg text-black/70">
                Clients, conversations, trust, sales
              </p>
            </div>

            <div>
              <p className="uppercase text-sm tracking-widest text-black/50 mb-4">
                We handle the engine
              </p>
              <p className="text-lg text-black/70">
                Technology, delivery, fixes, support
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* FINAL CONFIDENCE */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-2xl font-medium text-black leading-relaxed">
          You don’t learn and hope.
          <br />
          <span className="text-black/70">You sell and deliver with confidence.</span>
        </p>

        <p className="mt-6 text-lg text-black/60">
          Clients get results. You keep credibility. We keep control.
        </p>
      </div>

    </section>
  )
}
