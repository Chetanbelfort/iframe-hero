'use client'

import DatabaseWithRestApi from '@/components/ui/database-with-rest-api'

export default function DayOneRoleSection() {
  return (
    <section className="bg-white py-24">
      <div className="flex justify-center lg:justify-end px-6">
        <DatabaseWithRestApi
          title="Delivery & Automation Engine"
          circleText="AI"
          badgeTexts={{
            first: 'AGENTS',
            second: 'WORKFLOWS',
            third: 'AUTOMATION',
            fourth: 'APIs',
          }}
          buttonTexts={{
            first: 'Explore System',
            second: 'See Architecture',
          }}
          lightColor="#EAF2FF"
        />
      </div>
    </section>
  )
}
