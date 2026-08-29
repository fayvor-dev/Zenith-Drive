import { Vehicle } from "@/lib/vehicles";
import VehicleCard from "./VehicleCard";

export default function VehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="font-display text-2xl text-brown mb-2">No vehicles match your filters</p>
        <p className="text-brown-light text-sm">Try widening your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {vehicles.map((vehicle, i) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
      ))}
    </div>
  );
}
