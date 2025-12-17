'use client'

import React from 'react'

export type VapourTextProps = {
  text: string
  className?: string
}

export default function VapourText({
  text,
  className = '',
}: VapourTextProps) {
  return (
    <span
      className={`relative inline-block text-black/60 ${className}`}
      style={{
        filter: 'blur(0.3px)',
        animation: 'vapour 2.8s ease-in-out infinite',
      }}
    >
      {text}

      <style jsx>{`
        @keyframes vapour {
          0% {
            opacity: 0.6;
            letter-spacing: 0.02em;
          }
          50% {
            opacity: 1;
            letter-spacing: 0.08em;
          }
          100% {
            opacity: 0.6;
            letter-spacing: 0.02em;
          }
        }
      `}</style>
    </span>
  )
}
