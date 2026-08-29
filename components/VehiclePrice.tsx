import { formatNaira, Vehicle } from "@/lib/vehicles";

export default function VehiclePrice({
  vehicle,
  size = "md",
}: {
  vehicle: Vehicle;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <div>
      <p className={`font-display ${sizes[size]} text-brown`}>
        {formatNaira(vehicle.price)}
      </p>
      {!vehicle.priceConfirmed && (
        <p className="eyebrow text-ash mt-1">Price to be confirmed</p>
      )}
    </div>
  );
}
