export default function LogoTest() {
  const variants = [
    {
      id: 1,
      label: "Zon met warmtestralen",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          {/* Sun core */}
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          {/* Wavy rays */}
          <path
            d="M12 2 Q13 3.5 12 5 Q11 3.5 12 2Z
               M12 19 Q13 20.5 12 22 Q11 20.5 12 19Z
               M2 12 Q3.5 13 5 12 Q3.5 11 2 12Z
               M19 12 Q20.5 13 22 12 Q20.5 11 19 12Z"
            fill="currentColor"
          />
          {/* Diagonal rays */}
          <path
            d="M5.5 5.5 Q6.5 7 5.5 8.5 Q4 7 5.5 5.5Z
               M18.5 15.5 Q19.5 17 18.5 18.5 Q17 17 18.5 15.5Z
               M18.5 5.5 Q17 7 18.5 8.5 Q19.5 7 18.5 5.5Z
               M5.5 15.5 Q4 17 5.5 18.5 Q6.5 17 5.5 15.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: 2,
      label: "Huis met pijl rechtsonder",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          {/* House */}
          <path
            d="M3 10.5 L12 3 L21 10.5 V19 H15 V14 H9 V19 H3 Z"
            fill="currentColor"
            fillOpacity="0.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Arrow up, bottom-right, with white circle bg */}
          <circle cx="18" cy="18" r="4" fill="currentColor" />
          <path
            d="M18 21 V15 M15.5 17.5 L18 15 L20.5 17.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      label: "W monogram in cirkel",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          {/* Circle */}
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            fillOpacity="0.15"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {/* Bold W */}
          <path
            d="M5.5 8 L8 16 L12 11 L16 16 L18.5 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 4,
      label: "Warmtekringloop (2 pijlen)",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          {/* Top arc with arrowhead */}
          <path
            d="M5 12 A7 7 0 0 1 19 12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M16.5 9 L19 12 L22 10"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Bottom arc with arrowhead */}
          <path
            d="M19 12 A7 7 0 0 1 5 12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M7.5 15 L5 12 L2 14"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-12">
      <h1 className="mb-2 text-2xl font-bold text-gray-800">Logo varianten — warmtepomp.ai</h1>
      <p className="mb-10 text-sm text-gray-500">Kies een variant. De kleur is #22b572.</p>

      {/* Side-by-side on dark */}
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Op donkere achtergrond (header)</p>
        <div className="flex flex-wrap gap-6 rounded-2xl bg-[#0d1f16] p-8">
          {variants.map((v) => (
            <div key={v.id} className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-white/40">{v.id}</span>
              <a href="/" className="inline-flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#22b572] to-[#00d4a0] text-[#0d1f16]">
                  {v.icon}
                </span>
                <span className="font-bold tracking-tight text-white text-xl">
                  warmtepomp<span className="text-[#00d4a0]">.ai</span>
                </span>
              </a>
              <span className="text-[11px] text-white/30">{v.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Side-by-side on light */}
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Op lichte achtergrond (body / footer)</p>
        <div className="flex flex-wrap gap-6 rounded-2xl bg-white p-8 shadow-sm">
          {variants.map((v) => (
            <div key={v.id} className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-gray-300">{v.id}</span>
              <a href="/" className="inline-flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4faf7] text-[#22b572]">
                  {v.icon}
                </span>
                <span className="font-bold tracking-tight text-[#1a1a1a] text-xl">
                  warmtepomp<span className="text-[#00d4a0]">.ai</span>
                </span>
              </a>
              <span className="text-[11px] text-gray-400">{v.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Large preview */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Groot formaat — icoon alleen</p>
        <div className="flex flex-wrap gap-6 rounded-2xl bg-white p-8 shadow-sm">
          {variants.map((v) => (
            <div key={v.id} className="flex flex-col items-center gap-3">
              <span className="text-xs font-medium text-gray-300">{v.id}</span>
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#22b572] to-[#00d4a0] text-[#0d1f16]">
                <svg viewBox={v.icon.props.viewBox} fill="none" className="h-10 w-10" aria-hidden="true">
                  {v.icon.props.children}
                </svg>
              </span>
              <span className="text-[11px] text-gray-400 text-center max-w-[80px]">{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
