"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import VehicleFilters, { Filters, emptyFilters } from "@/components/VehicleFilters";
import VehicleGrid from "@/components/VehicleGrid";
import { vehicles } from "@/lib/vehicles";

export default function VehiclesPage() {
  const [filters, setFilters] = useState<Filters>(emptyFilters);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      const matchesSearch =
        filters.search.trim() === "" ||
        `${v.brand} ${v.model}`.toLowerCase().includes(filters.search.toLowerCase());
      const matchesBrand = filters.brand === "All" || v.brand === filters.brand;
      const matchesBody = filters.bodyType === "All" || v.bodyType === filters.bodyType;
      const matchesTransmission = filters.transmission === "All" || v.transmission === filters.transmission;
      const matchesFuel = filters.fuel === "All" || v.fuel === filters.fuel;
      const matchesAvailability = filters.availability === "All" || v.availability === filters.availability;
      return (
        matchesSearch &&
        matchesBrand &&
        matchesBody &&
        matchesTransmission &&
        matchesFuel &&
        matchesAvailability
      );
    });
  }, [filters]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <p className="eyebrow text-butter-deep mb-4">Full Inventory</p>
        <h1 className="font-display text-4xl md:text-5xl text-brown leading-[1.05]">
          Every vehicle currently at Zenith Drive
        </h1>
        <p className="text-brown-light mt-5 leading-relaxed">
          Filter by brand, body type, transmission, fuel and availability to find your next vehicle.
        </p>
      </motion.div>

      <VehicleFilters vehicles={vehicles} filters={filters} onChange={setFilters} />

      <p className="text-sm text-ash mb-6">
        Showing {filtered.length} of {vehicles.length} vehicles
      </p>

      <VehicleGrid vehicles={filtered} />
    </div>
  );
}
