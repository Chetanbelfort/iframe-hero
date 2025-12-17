'use client';

import VaporizeTextCycle, {
  Tag,
  type VaporizeTextCycleProps,
} from '@/components/ui/vapour-text-effect';

export default function VapourHeroLine() {
  return (
    <div className="relative w-full h-[90px] sm:h-[120px] flex items-center justify-center">
      <VaporizeTextCycle
        texts={[
          'Without Learning AI',
          'Without Coding',
          'Without n8n or Tools',
        ]}
        font={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '48px',
          fontWeight: 600,
        }}
        color="rgb(0,0,0)"
        spread={5}
        density={5}
        animation={{
          vaporizeDuration: 2,
          fadeInDuration: 1,
          waitDuration: 0.6,
        }}
        alignment="center"
        tag={Tag.H2}
      />
    </div>
  );
}
