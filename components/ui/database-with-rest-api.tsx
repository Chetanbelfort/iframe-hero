'use client'

interface DatabaseWithRestApiProps {
  title: string
  circleText: string
  badgeTexts: {
    first: string
    second: string
    third: string
    fourth: string
  }
  buttonTexts: {
    first: string
    second: string
  }
  lightColor: string
}

export default function DatabaseWithRestApi({
  title,
  circleText,
  badgeTexts,
  buttonTexts,
  lightColor,
}: DatabaseWithRestApiProps) {
  return (
    <div className="relative max-w-md rounded-3xl border border-black/10 bg-white p-8 shadow-xl">
      
      {/* LIGHT GLOW */}
      <div
        className="absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl opacity-40"
        style={{ backgroundColor: lightColor }}
      />

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-black">
        {title}
      </h3>

      {/* CIRCLE */}
      <div className="mt-6 flex h-24 w-24 items-center justify-center rounded-full border border-black/10 text-xl font-semibold">
        {circleText}
      </div>

      {/* BADGES */}
      <div className="mt-6 flex flex-wrap gap-2">
        {[badgeTexts.first, badgeTexts.second, badgeTexts.third, badgeTexts.fourth].map(
          (text, index) => (
            <span
              key={index}
              className="rounded-full bg-black/5 px-4 py-1 text-sm text-black"
            >
              {text}
            </span>
          )
        )}
      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex gap-3">
        <button className="rounded-full bg-black px-6 py-3 text-sm text-white">
          {buttonTexts.first}
        </button>
        <button className="rounded-full border border-black/20 px-6 py-3 text-sm">
          {buttonTexts.second}
        </button>
      </div>
    </div>
  )
}
