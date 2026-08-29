import Image from "next/image";
import { ShieldCheck, Gem, Eye, Heart, Award, Lock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { vehicles } from "@/lib/vehicles";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Transparent pricing and honest vehicle histories, every time." },
  { icon: Gem, title: "Quality", desc: "Every vehicle is inspected before it earns a place in our collection." },
  { icon: Eye, title: "Transparency", desc: "No hidden fees, no surprises — what you see is what you get." },
  { icon: Heart, title: "Customer Satisfaction", desc: "Your experience with us doesn't end at the sale." },
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the same standard as the cars we sell." },
  { icon: Lock, title: "Reliability", desc: "A dealership Benin City can depend on, sale after sale." },
];

export default function AboutPage() {
  const feature = vehicles.find((v) => v.slug === "mercedes-benz-s580-4matic") ?? vehicles[0];

  return (
    <div className="pt-28">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionHeading
          eyebrow="Who We Are"
          title="A dealership built on trust, based in Benin City"
        />
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-14 mt-12 items-center">
          <AnimatedSection>
            <p className="text-brown-light leading-relaxed text-base md:text-lg">
              Zenith Drive is a motor dealership in Ugbowo, Benin City, offering new and
              used vehicle sales alongside sourcing, importation, inspection, trade-in and
              financing services. We work with a curated collection of Mercedes-Benz and
              Lexus vehicles, each one inspected and documented before it reaches our
              showroom floor.
            </p>
            <p className="text-brown-light leading-relaxed text-base md:text-lg mt-5">
              Our name reflects our standard: Zenith, the highest point. Every vehicle we
              sell, and every client we serve, is held to that peak.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-elevated">
              <Image
                src={feature.images[0]}
                alt={`${feature.brand} ${feature.model}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-charcoal text-off-white py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">
          <AnimatedSection>
            <p className="eyebrow text-butter mb-4">Mission</p>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              To connect Nigerian drivers with vehicles of genuine quality, sold with
              complete transparency.
            </h3>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="eyebrow text-butter mb-4">Vision</p>
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              To be the region&apos;s most trusted name in luxury and performance
              automobiles.
            </h3>
          </AnimatedSection>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <SectionHeading eyebrow="Our Values" title="What guides every deal we make" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.07}>
              <div className="card-elevated rounded-2xl p-7 h-full">
                <v.icon size={22} className="text-butter-deep mb-4" strokeWidth={1.75} />
                <h4 className="font-display text-lg text-brown mb-2">{v.title}</h4>
                <p className="text-sm text-brown-light leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
