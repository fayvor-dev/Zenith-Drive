"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import TopoLines from "./TopoLines";
import { Vehicle, formatNaira } from "@/lib/vehicles";

const headline = "THE ROAD IS YOURS.".split(" ");

export default function Hero({ featured }: { featured: Vehicle }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: video drifts slower than scroll, content fades on exit
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={sectionRef} className="relative min-h-[94vh] flex items-end overflow-hidden bg-charcoal">
      {/* Video background */}
      <motion.div className="absolute inset-0" style={{ y: videoY }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/video/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
        >
          <source src="/video/hero-drive.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic colour + grain treatment over the footage */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/55 to-charcoal/92" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-60" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-butter/10 blur-[120px]"
      />

      {/* Signature topo motif, dimmed over footage */}
      <TopoLines className="absolute inset-0 w-full h-full opacity-70" />

      {/* Drifting light sweep for extra motion texture */}
      <motion.div
        aria-hidden="true"
        initial={{ x: "-30%" }}
        animate={{ x: "130%" }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 }}
        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-butter/[0.06] to-transparent skew-x-12 pointer-events-none"
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-40"
      >
        <div className="grid lg:grid-cols-[1.3fr,1fr] gap-14 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow text-butter mb-6 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-butter/70" />
              Zenith Drive &mdash; Benin City
            </motion.p>

            <h1 className="font-display text-off-white leading-[0.95] text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
              {headline.map((word, i) => (
                <span key={word} className="inline-block overflow-hidden align-bottom mr-4">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-ash-light text-base md:text-lg mt-7 max-w-md leading-relaxed"
            >
              Discover vehicles designed to move you beyond expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Button href="/vehicles" variant="primary">Explore Vehicles</Button>
              <Button href="/test-drive" variant="secondary">Book a Test Drive</Button>
            </motion.div>
          </div>

          {/* Foreground featured-vehicle card, floats gently above the footage */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto max-w-sm w-full"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="card-elevated bg-off-white/95 backdrop-blur rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={featured.images[0]}
                  alt={`${featured.year} ${featured.brand} ${featured.model}`}
                  fill
                  sizes="400px"
                  className="object-cover"
                  priority
                />
                <span className="absolute top-3 left-3 eyebrow bg-charcoal/80 text-butter px-3 py-1.5 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-5">
                <p className="eyebrow text-butter-deep mb-1">{featured.year}</p>
                <h3 className="font-display text-lg text-brown">{featured.brand} {featured.model}</h3>
                <p className="font-display text-xl text-brown mt-2">{formatNaira(featured.price)}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="hidden md:flex items-center gap-3 mt-16 text-ash-light"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-butter to-transparent"
          />
          <span className="eyebrow">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
