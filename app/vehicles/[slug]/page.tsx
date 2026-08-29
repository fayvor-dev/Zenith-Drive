import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, ChevronLeft } from "lucide-react";
import { getVehicleBySlug, vehicles } from "@/lib/vehicles";
import VehicleGallery from "@/components/VehicleGallery";
import VehicleSpecs from "@/components/VehicleSpecs";
import VehiclePrice from "@/components/VehiclePrice";
import Button from "@/components/Button";
import AnimatedSection from "@/components/AnimatedSection";
import VehicleGrid from "@/components/VehicleGrid";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.year} ${vehicle.brand} ${vehicle.model} | Zenith Drive`,
    description: vehicle.description,
  };
}

export default function VehicleDetailPage({ params }: { params: { slug: string } }) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) notFound();

  const related = vehicles
    .filter((v) => v.slug !== vehicle.slug && (v.brand === vehicle.brand || v.bodyType === vehicle.bodyType))
    .slice(0, 3);

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Link
          href="/vehicles"
          className="inline-flex items-center gap-1.5 text-sm text-brown-light hover:text-brown transition-colors mb-8"
        >
          <ChevronLeft size={16} /> Back to Inventory
        </Link>

        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12">
          <AnimatedSection>
            <VehicleGallery images={vehicle.images} title={`${vehicle.brand} ${vehicle.model}`} />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="eyebrow text-butter-deep mb-2">
              {vehicle.year} &middot; {vehicle.condition} &middot; {vehicle.bodyType}
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-brown leading-tight mb-5">
              {vehicle.brand} {vehicle.model}
            </h1>

            <VehiclePrice vehicle={vehicle} size="lg" />

            {vehicle.specNote && (
              <div className="flex gap-2.5 mt-5 p-4 rounded-xl bg-butter/15 border border-butter/40">
                <AlertTriangle size={16} className="text-butter-deep shrink-0 mt-0.5" />
                <p className="text-xs text-brown-light leading-relaxed">{vehicle.specNote}</p>
              </div>
            )}

            <p className="text-brown-light leading-relaxed mt-6">{vehicle.description}</p>

            <div className="hairline my-7" />

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={`/test-drive?vehicle=${vehicle.slug}`} variant="primary" className="flex-1 justify-center">
                Book Test Drive
              </Button>
              <Button href={`/contact?vehicle=${vehicle.slug}`} variant="ghost" className="flex-1 justify-center">
                Enquire
              </Button>
            </div>
            <a
              href={`https://wa.me/2349167202140?text=${encodeURIComponent(
                `Hi Zenith Drive, I'm interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm text-[#25D366] font-medium mt-4 hover:underline"
            >
              Ask about this vehicle on WhatsApp
            </a>

            <div className="mt-9">
              <p className="eyebrow text-ash mb-4">Features</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {vehicle.features.map((f) => (
                  <li key={f} className="text-sm text-brown-light flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-butter-deep mt-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-20" delay={0.1}>
          <p className="eyebrow text-ash mb-5">Full Specification</p>
          <div className="max-w-2xl">
            <VehicleSpecs vehicle={vehicle} />
          </div>
        </AnimatedSection>

        {related.length > 0 && (
          <div className="mt-24">
            <p className="eyebrow text-butter-deep mb-3">You May Also Like</p>
            <h2 className="font-display text-3xl text-brown mb-10">Similar vehicles</h2>
            <VehicleGrid vehicles={related} />
          </div>
        )}
      </div>
    </div>
  );
}
