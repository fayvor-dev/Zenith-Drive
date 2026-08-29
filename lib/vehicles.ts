export type Vehicle = {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  price: number; // NGN, placeholder — confirm before launch
  priceConfirmed: boolean;
  mileageKm: number | null; // null = to be confirmed
  transmission: "Automatic" | "Manual";
  fuel: "Petrol" | "Diesel" | "Hybrid" | "Electric";
  engine: string;
  drivetrain: "AWD" | "RWD" | "FWD" | "4MATIC";
  exteriorColour: string;
  interiorColour: string;
  condition: "Brand New" | "Foreign Used" | "Nigerian Used";
  bodyType: "Sedan" | "SUV" | "Coupe";
  availability: "Available" | "Reserved" | "Sold";
  featured: boolean;
  description: string;
  features: string[];
  images: string[]; // ordered gallery, first image = primary listing photo
  specNote?: string; // flags placeholder data pending confirmation
};

export const vehicles: Vehicle[] = [
  {
    id: "v1",
    slug: "mercedes-benz-s500-4matic-widebody",
    brand: "Mercedes-Benz",
    model: "S500 4MATIC Widebody",
    year: 2023,
    price: 165000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "3.0L Inline-6 Turbo Mild-Hybrid",
    drivetrain: "4MATIC",
    exteriorColour: "Olive Bronze",
    interiorColour: "Black",
    condition: "Foreign Used",
    bodyType: "Sedan",
    availability: "Available",
    featured: true,
    description:
      "A widebody S-Class finished in a rare olive-bronze wrap, sitting on a forged custom wheel set with a full carbon aero package. Built for presence as much as pace — this is the flagship of the current Zenith Drive collection.",
    features: [
      "Widebody aero kit",
      "Forged custom wheels",
      "Carbon-fibre diffuser",
      "4MATIC all-wheel drive",
      "Panoramic sunroof",
      "Burmester surround sound",
    ],
    images: [
      "/vehicles/mercedes-s500-widebody-1.jpg",
      "/vehicles/mercedes-s500-widebody-2.jpg",
      "/vehicles/mercedes-s500-widebody-3.jpg",
      "/vehicles/mercedes-s500-widebody-4.jpg",
      "/vehicles/mercedes-s500-widebody-5.jpg",
    ],
    specNote: "Price, mileage and exact trim to be confirmed by the dealership before launch.",
  },
  {
    id: "v2",
    slug: "mercedes-benz-s580-4matic",
    brand: "Mercedes-Benz",
    model: "S580 4MATIC",
    year: 2023,
    price: 155000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "4.0L V8 Biturbo",
    drivetrain: "4MATIC",
    exteriorColour: "Selenite Grey",
    interiorColour: "Black",
    condition: "Foreign Used",
    bodyType: "Sedan",
    availability: "Available",
    featured: true,
    description:
      "The S580 in factory Selenite Grey — Mercedes-Benz's flagship saloon with V8 reserve power and the marque's most complete cabin. Quiet, commanding, and immaculately kept.",
    features: [
      "V8 Biturbo powertrain",
      "MBUX infotainment suite",
      "Adaptive air suspension",
      "Ambient lighting, 64 colours",
      "Rear executive seating package",
    ],
    images: [
      "/vehicles/mercedes-s580-1.jpg",
      "/vehicles/mercedes-s580-2.jpg",
    ],
    specNote: "Price and mileage to be confirmed by the dealership before launch.",
  },
  {
    id: "v3",
    slug: "mercedes-benz-e-class-amg-line",
    brand: "Mercedes-Benz",
    model: "E-Class AMG Line",
    year: 2024,
    price: 98000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "2.0L Turbo Inline-4",
    drivetrain: "RWD",
    exteriorColour: "Emerald Green",
    interiorColour: "Black",
    condition: "Foreign Used",
    bodyType: "Sedan",
    availability: "Available",
    featured: true,
    description:
      "The latest-generation E-Class in a striking emerald finish with AMG Line styling. A daily-luxury sedan that balances efficiency with unmistakable road presence.",
    features: [
      "AMG Line body styling",
      "Dual 12.3-inch MBUX displays",
      "LED Digital Light headlamps",
      "Multibeam LED tail lamps",
    ],
    images: ["/vehicles/mercedes-e-class-1.jpg"],
    specNote: "Price and mileage to be confirmed by the dealership before launch.",
  },
  {
    id: "v4",
    slug: "mercedes-benz-e-class-performance-sedan",
    brand: "Mercedes-Benz",
    model: "E-Class Performance Sedan",
    year: 2022,
    price: 95000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "3.0L V6 Turbo",
    drivetrain: "AWD",
    exteriorColour: "Selenite Grey",
    interiorColour: "Black",
    condition: "Foreign Used",
    bodyType: "Sedan",
    availability: "Available",
    featured: false,
    description:
      "A lowered, widebody performance build finished in matte-flecked grey on gloss-black forged wheels — for the buyer who wants sedan practicality with genuine road-hugging stance.",
    features: [
      "Lowered performance suspension",
      "Forged black wheels",
      "AMG-styled aero kit",
      "Red brake calipers",
    ],
    images: ["/vehicles/mercedes-amg-sedan-1.jpg"],
    specNote: "Price, mileage and exact trim to be confirmed by the dealership before launch.",
  },
  {
    id: "v5",
    slug: "lexus-lc-coupe",
    brand: "Lexus",
    model: "LC Coupe",
    year: 2022,
    price: 115000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "5.0L V8",
    drivetrain: "RWD",
    exteriorColour: "Obsidian Black",
    interiorColour: "Tan / Black",
    condition: "Foreign Used",
    bodyType: "Coupe",
    availability: "Available",
    featured: true,
    description:
      "Lexus's flagship grand tourer — a hand-finished coupe with a naturally aspirated V8 and a cabin that trades screens for craft. Sculptural inside and out.",
    features: [
      "Naturally aspirated V8",
      "Spindle grille design",
      "Sport driving modes",
      "Tan leather cabin",
    ],
    images: [
      "/vehicles/lexus-lc-coupe-1.jpg",
      "/vehicles/lexus-lc-coupe-2.jpg",
    ],
    specNote: "Price, mileage and exact trim to be confirmed by the dealership before launch.",
  },
  {
    id: "v6",
    slug: "lexus-lx-suv",
    brand: "Lexus",
    model: "LX SUV",
    year: 2022,
    price: 125000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "3.5L Twin-Turbo V6",
    drivetrain: "AWD",
    exteriorColour: "Sand Beige",
    interiorColour: "Tan Leather",
    condition: "Foreign Used",
    bodyType: "SUV",
    availability: "Available",
    featured: true,
    description:
      "A full-size Lexus SUV finished in sand beige with a black-badge front kit and gloss-black wheels. Spacious, capable and finished in premium tan leather throughout.",
    features: [
      "Black-badge exterior kit",
      "Three-row tan leather cabin",
      "Adaptive variable suspension",
      "Mark Levinson audio",
    ],
    images: [
      "/vehicles/lexus-lx-suv-1.jpg",
      "/vehicles/lexus-lx-suv-2.jpg",
      "/vehicles/lexus-lx-suv-3.jpg",
    ],
    specNote: "Exact model/trim, price and mileage to be confirmed by the dealership before launch.",
  },
  {
    id: "v7",
    slug: "lexus-rx-suv",
    brand: "Lexus",
    model: "RX SUV",
    year: 2023,
    price: 88000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "2.4L Turbo",
    drivetrain: "AWD",
    exteriorColour: "To be confirmed",
    interiorColour: "Rioja Red",
    condition: "Foreign Used",
    bodyType: "SUV",
    availability: "Available",
    featured: false,
    description:
      "A Lexus mid-size SUV with a striking Rioja red leather cabin and Apple CarPlay-equipped infotainment. Exterior photography for this listing is pending — interior condition shown is representative.",
    features: [
      "Rioja red leather interior",
      "Wireless Apple CarPlay / Android Auto",
      "Heated and ventilated seats",
    ],
    images: ["/vehicles/lexus-rx-suv-1.jpg"],
    specNote: "Exterior photos, exact trim, price and mileage still to be confirmed — interior only, pending full listing.",
  },
  {
    id: "v8",
    slug: "lamborghini-urus",
    brand: "Lamborghini",
    model: "Urus",
    year: 2023,
    price: 285000000,
    priceConfirmed: false,
    mileageKm: null,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "4.0L Twin-Turbo V8",
    drivetrain: "AWD",
    exteriorColour: "To be confirmed",
    interiorColour: "Black Alcantara",
    condition: "Foreign Used",
    bodyType: "SUV",
    availability: "Reserved",
    featured: true,
    description:
      "The super-SUV benchmark. This Urus arrives with a full black Alcantara cabin and the Lamborghini driving-mode selector on the console. Exterior photography is pending — currently listed by special enquiry only.",
    features: [
      "4.0L Twin-Turbo V8",
      "ANIMA driving mode selector",
      "Black Alcantara cabin",
      "Carbon-ceramic brakes",
    ],
    images: ["/vehicles/lamborghini-urus-1.jpg"],
    specNote: "Exterior photos, exact price and mileage pending — by special enquiry while listing is finalised.",
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.featured);
}

export function formatNaira(amount: number): string {
  return "\u20A6" + amount.toLocaleString("en-NG");
}
