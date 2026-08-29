"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gauge, Fuel, Settings2 } from "lucide-react";
import { Vehicle, formatNaira } from "@/lib/vehicles";

export default function VehicleCard({ vehicle, index = 0 }: { vehicle: Vehicle; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-elevated rounded-2xl overflow-hidden group flex flex-col"
    >
      <Link href={`/vehicles/${vehicle.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-ash-light/20">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {vehicle.availability !== "Available" && (
            <span className="eyebrow bg-charcoal/85 text-off-white px-3 py-1.5 rounded-full">
              {vehicle.availability}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow text-butter-deep mb-1">{vehicle.year} &middot; {vehicle.condition}</p>
            <h3 className="font-display text-xl text-brown leading-tight">
              {vehicle.brand} {vehicle.model}
            </h3>
          </div>
        </div>

        <div className="mt-3">
          <p className="font-display text-2xl text-brown">{formatNaira(vehicle.price)}</p>
          {!vehicle.priceConfirmed && (
            <p className="text-[11px] text-ash mt-0.5">Price to be confirmed</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-brown-light">
          <div className="flex items-center gap-1.5">
            <Gauge size={14} className="text-butter-deep shrink-0" />
            <span>{vehicle.mileageKm ? `${(vehicle.mileageKm / 1000).toFixed(0)}k km` : "TBC"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings2 size={14} className="text-butter-deep shrink-0" />
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel size={14} className="text-butter-deep shrink-0" />
            <span>{vehicle.fuel}</span>
          </div>
        </div>

        <p className="text-sm text-brown-light/90 mt-4 line-clamp-2">{vehicle.description}</p>

        <div className="hairline my-4" />

        <div className="flex gap-2 mt-auto">
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className="flex-1 text-center text-xs font-medium tracking-wide px-4 py-2.5 rounded-full border border-brown/20 text-brown hover:bg-brown hover:text-off-white transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/test-drive?vehicle=${vehicle.slug}`}
            className="flex-1 text-center text-xs font-medium tracking-wide px-4 py-2.5 rounded-full bg-brown text-off-white hover:bg-butter-deep hover:text-charcoal transition-colors"
          >
            Book Test Drive
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
