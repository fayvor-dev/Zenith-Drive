import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import {
  Car,
  Globe2,
  Ship,
  ClipboardCheck,
  Repeat,
  Landmark,
  LifeBuoy,
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Vehicle Sales",
    description:
      "Browse new and foreign-used vehicles from our current Mercedes-Benz and Lexus collection, each fully inspected and priced transparently.",
  },
  {
    icon: Globe2,
    title: "Vehicle Sourcing",
    description:
      "Looking for something specific? We source vehicles matching your exact brand, trim and specification requirements.",
  },
  {
    icon: Ship,
    title: "Vehicle Importation",
    description:
      "We handle the importation process end-to-end, bringing your chosen vehicle into Nigeria with full documentation.",
  },
  {
    icon: ClipboardCheck,
    title: "Vehicle Inspection",
    description:
      "Every vehicle passing through Zenith Drive is inspected for mechanical, structural and cosmetic condition before listing.",
  },
  {
    icon: Repeat,
    title: "Trade-In Services",
    description:
      "Trade in your current vehicle toward your next purchase, with a fair, transparent valuation.",
  },
  {
    icon: Landmark,
    title: "Financing Assistance",
    description:
      "We work with financing partners to help structure a payment plan that fits your budget.",
  },
  {
    icon: LifeBuoy,
    title: "After-Sales Support",
    description:
      "Our relationship continues after the sale — reach out any time for service guidance and support.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <SectionHeading
          eyebrow="What We Offer"
          title="Full-service support, from search to after-sales"
          description="Zenith Drive does more than sell cars — we support you through the entire ownership journey."
        />
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              icon={<s.icon size={22} className="text-butter-deep" strokeWidth={1.75} />}
              title={s.title}
              description={s.description}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 mt-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-brown text-off-white px-8 md:px-16 py-14 md:py-16 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-butter/15 blur-[100px]" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="eyebrow text-butter mb-4">Talk to Us</p>
              <h2 className="font-display text-2xl md:text-3xl max-w-lg leading-tight">
                Need a service not listed here? Reach out — we&apos;ll find a way to help.
              </h2>
            </div>
            <Button href="/contact" variant="secondary">Contact Our Team</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
