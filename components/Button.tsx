import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-full";

  const variants: Record<string, string> = {
    primary:
      "bg-brown text-off-white hover:bg-butter-deep hover:text-charcoal",
    secondary:
      "bg-transparent text-off-white border border-off-white/30 hover:border-butter hover:text-butter",
    ghost:
      "bg-transparent text-brown border border-brown/25 hover:bg-brown hover:text-off-white",
  };

  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </Link>
  );
}
