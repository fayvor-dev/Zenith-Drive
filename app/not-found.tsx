import Link from "next/link";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28">
      <p className="eyebrow text-butter-deep mb-4">404</p>
      <h1 className="font-display text-4xl md:text-5xl text-brown mb-5">
        This road doesn&apos;t lead anywhere
      </h1>
      <p className="text-brown-light max-w-md mb-9">
        The page you&apos;re looking for may have moved. Head back to the showroom.
      </p>
      <div className="flex gap-4">
        <Button href="/" variant="primary">Back Home</Button>
        <Button href="/vehicles" variant="ghost">View Inventory</Button>
      </div>
    </div>
  );
}
