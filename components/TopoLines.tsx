"use client";

import { motion } from "framer-motion";

// Contour-line motif: reads as elevation lines toward a peak (Zenith),
// and doubles as a dyno/graph line evoking automotive performance data.
// Deliberately non-photographic per the brand's hero requirement.
export default function TopoLines({ className = "" }: { className?: string }) {
  const lines = [
    "M-50,620 C150,560 300,600 480,520 C650,450 780,500 950,420 C1100,360 1250,400 1400,340",
    "M-50,680 C120,640 320,660 500,590 C670,530 820,570 980,500 C1130,440 1270,470 1400,420",
    "M-50,740 C140,710 330,720 520,660 C690,610 840,640 1000,580 C1150,530 1280,550 1400,510",
    "M-50,800 C160,780 340,780 540,740 C700,700 850,720 1010,670 C1160,630 1290,640 1400,610",
  ];

  return (
    <svg
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="topoFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E3BE6F" stopOpacity="0" />
          <stop offset="100%" stopColor="#E3BE6F" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {lines.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="url(#topoFade)"
          strokeWidth={1}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.3 + i * 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </svg>
  );
}
