"use client";

import { motion } from "framer-motion";

export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const loopItems = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <motion.div
        className="inline-flex items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {loopItems.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display text-2xl md:text-3xl px-6 md:px-8">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-butter/60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
