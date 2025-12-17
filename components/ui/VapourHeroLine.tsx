"use client";

import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

export function VapourHeroLine() {
  return (
    <div className="relative w-full h-[80px] flex justify-center items-center">
      <VaporizeTextCycle
        texts={[
          "AI Agents",
          "Micro SaaS AI Apps",
          "Business Automation",
        ]}
        font={{
          fontFamily: "Inter, sans-serif",
          fontSize: "42px",
          fontWeight: 600,
        }}
        color="rgb(0,0,0)"
        spread={4}
        density={4}
        animation={{
          vaporizeDuration: 1.8,
          fadeInDuration: 0.8,
          waitDuration: 0.4,
        }}
        alignment="center"
        tag={Tag.H2}
      />
    </div>
  );
}
