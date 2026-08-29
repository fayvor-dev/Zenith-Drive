"use client";

import { Search } from "lucide-react";
import { Vehicle } from "@/lib/vehicles";

export type Filters = {
  search: string;
  brand: string;
  bodyType: string;
  transmission: string;
  fuel: string;
  availability: string;
};

export const emptyFilters: Filters = {
  search: "",
  brand: "All",
  bodyType: "All",
  transmission: "All",
  fuel: "All",
  availability: "All",
};

function unique(values: string[]): string[] {
  return ["All", ...Array.from(new Set(values))];
}

export default function VehicleFilters({
  vehicles,
  filters,
  onChange,
}: {
  vehicles: Vehicle[];
  filters: Filters;
  onChange: (f: Filters) => void;
}) {
  const brands = unique(vehicles.map((v) => v.brand));
  const bodyTypes = unique(vehicles.map((v) => v.bodyType));
  const transmissions = unique(vehicles.map((v) => v.transmission));
  const fuels = unique(vehicles.map((v) => v.fuel));
  const availabilities = unique(vehicles.map((v) => v.availability));

  const set = (key: keyof Filters, value: string) => onChange({ ...filters, [key]: value });

  const selectClass =
    "w-full appearance-none bg-off-white border border-brown/15 rounded-full px-4 py-2.5 text-sm text-brown focus:border-butter-deep outline-none transition-colors";

  return (
    <div className="card-elevated rounded-2xl p-5 md:p-6 mb-10">
      <div className="relative mb-4">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ash" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => set("search", e.target.value)}
          placeholder="Search by brand or model&hellip;"
          className="w-full bg-off-white border border-brown/15 rounded-full pl-11 pr-4 py-3 text-sm text-brown placeholder:text-ash focus:border-butter-deep outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div>
          <label className="eyebrow text-ash block mb-1.5">Brand</label>
          <select className={selectClass} value={filters.brand} onChange={(e) => set("brand", e.target.value)}>
            {brands.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="eyebrow text-ash block mb-1.5">Body Type</label>
          <select className={selectClass} value={filters.bodyType} onChange={(e) => set("bodyType", e.target.value)}>
            {bodyTypes.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="eyebrow text-ash block mb-1.5">Transmission</label>
          <select className={selectClass} value={filters.transmission} onChange={(e) => set("transmission", e.target.value)}>
            {transmissions.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="eyebrow text-ash block mb-1.5">Fuel</label>
          <select className={selectClass} value={filters.fuel} onChange={(e) => set("fuel", e.target.value)}>
            {fuels.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="eyebrow text-ash block mb-1.5">Availability</label>
          <select className={selectClass} value={filters.availability} onChange={(e) => set("availability", e.target.value)}>
            {availabilities.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
