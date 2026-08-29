import { Vehicle } from "@/lib/vehicles";

export default function VehicleSpecs({ vehicle }: { vehicle: Vehicle }) {
  const rows: { label: string; value: string }[] = [
    { label: "Brand", value: vehicle.brand },
    { label: "Model", value: vehicle.model },
    { label: "Year", value: String(vehicle.year) },
    { label: "Mileage", value: vehicle.mileageKm ? `${vehicle.mileageKm.toLocaleString()} km` : "To be confirmed" },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Fuel Type", value: vehicle.fuel },
    { label: "Engine", value: vehicle.engine },
    { label: "Drivetrain", value: vehicle.drivetrain },
    { label: "Exterior Colour", value: vehicle.exteriorColour },
    { label: "Interior Colour", value: vehicle.interiorColour },
    { label: "Condition", value: vehicle.condition },
    { label: "Body Type", value: vehicle.bodyType },
    { label: "Availability", value: vehicle.availability },
  ];

  return (
    <div className="border border-brown/12 rounded-2xl overflow-hidden">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className={`flex items-center justify-between px-5 py-3.5 ${
            i % 2 === 0 ? "bg-off-white" : "bg-cream"
          }`}
        >
          <span className="eyebrow text-ash">{row.label}</span>
          <span className="font-mono text-sm text-brown text-right">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
