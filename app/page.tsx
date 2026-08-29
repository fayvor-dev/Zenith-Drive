import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import VehicleCard from "@/components/VehicleCard";
import Button from "@/components/Button";
import { getFeaturedVehicles, vehicles } from "@/lib/vehicles";
import { ShieldCheck, Globe2, HandCoins, Wrench } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const featured = getFeaturedVehicles().slice(0, 4);
  const heroFeatured = featured[0] ?? vehicles[0];

  return (
    <>
      <Hero featured={heroFeatured} />

      {/* Featured Inventory */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Featured Inventory"
            title="This week's showroom highlights"
            description="A rotating selection from the current Zenith Drive collection — real inventory, priced and specified for immediate viewing."
          />
          <Button href="/vehicles" variant="ghost">View Full Inventory</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {featured.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </div>
      </section>

      {/* Inventory Showcase — editorial, foreground cards, no bg imagery */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-charcoal text-off-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Collection"
            title="Every vehicle, held to one standard"
            description="From performance sedans to full-size luxury SUVs, each vehicle in the Zenith Drive collection is inspected, documented and priced with full transparency."
            dark
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { stat: "8", label: "Vehicles currently listed" },
              { stat: "2", label: "Brands represented: Mercedes-Benz &amp; Lexus" },
              { stat: "100%", label: "Inspected before listing" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="border-t border-off-white/15 pt-6">
                  <p className="font-display text-5xl text-butter mb-3">{item.stat}</p>
                  <p
                    className="text-ash-light text-sm"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-16">
            <div className="grid md:grid-cols-2 gap-6">
              {featured.slice(0, 2).map((v) => (
                <div key={v.id} className="relative rounded-2xl overflow-hidden aspect-[16/10] group">
                  <Image
                    src={v.images[0]}
                    alt={`${v.brand} ${v.model}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <p className="eyebrow text-butter mb-1">{v.year}</p>
                      <p className="font-display text-xl">{v.brand} {v.model}</p>
                    </div>
                    <Button href={`/vehicles/${v.slug}`} variant="secondary" className="!py-2 !px-4 text-xs">
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Beyond the Sale"
          title="Full-service support, start to finish"
          description="Sourcing, importation, inspection, trade-in and financing — Zenith Drive supports you long after the keys change hands."
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {[
            { icon: Globe2, title: "Sourcing & Importation", desc: "We locate and import the exact vehicle you're after." },
            { icon: ShieldCheck, title: "Vehicle Inspection", desc: "Every listing is inspected before it reaches the showroom." },
            { icon: HandCoins, title: "Trade-In & Financing", desc: "Trade your current vehicle or arrange flexible financing." },
            { icon: Wrench, title: "After-Sales Support", desc: "Ongoing service and support well past the point of sale." },
          ].map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <div className="p-1">
                <s.icon size={24} className="text-butter-deep mb-4" strokeWidth={1.75} />
                <h3 className="font-display text-lg text-brown mb-2">{s.title}</h3>
                <p className="text-sm text-brown-light leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/services" variant="ghost">Explore All Services</Button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto rounded-3xl bg-brown text-off-white px-8 md:px-16 py-16 md:py-20 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-butter/15 blur-[100px]" />
          <div className="relative max-w-xl">
            <p className="eyebrow text-butter mb-5">Visit the Showroom</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
              Ready to find your next vehicle?
            </h2>
            <p className="text-ash-light mb-9 leading-relaxed">
              Book a test drive or reach out to our team in Ugbowo, Benin City &mdash; we&apos;ll have your vehicle ready when you arrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/test-drive" variant="secondary">Book a Test Drive</Button>
              <Button href="/contact" variant="secondary">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
