"use client";

import { motion } from "framer-motion";

export default function ServiceCard({
  icon,
  title,
  description,
  index = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="card-elevated rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-butter/25 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="font-display text-xl text-brown mb-2.5">{title}</h3>
      <p className="text-sm text-brown-light leading-relaxed">{description}</p>
    </motion.div>
  );
}
