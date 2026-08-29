import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="font-display text-2xl">Zenith</span>
              <span className="eyebrow text-butter">Drive</span>
            </div>
            <p className="text-ash-light text-sm leading-relaxed max-w-xs">
              Peak performance, unmatched luxury. A premium motor dealership
              in Benin City sourcing, selling and servicing the region&apos;s
              finest vehicles.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-ash-light hover:text-butter transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ash-light hover:text-butter transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ash-light hover:text-butter transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-butter mb-5">Navigate</p>
            <ul className="space-y-3 text-sm text-ash-light">
              <li><Link href="/" className="hover:text-off-white transition-colors">Home</Link></li>
              <li><Link href="/vehicles" className="hover:text-off-white transition-colors">Vehicles</Link></li>
              <li><Link href="/about" className="hover:text-off-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-off-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-off-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-butter mb-5">Services</p>
            <ul className="space-y-3 text-sm text-ash-light">
              <li>Vehicle Sales</li>
              <li>Vehicle Sourcing</li>
              <li>Vehicle Importation</li>
              <li>Trade-In</li>
              <li>Financing Assistance</li>
              <li>After-Sales Support</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-butter mb-5">Visit Us</p>
            <ul className="space-y-4 text-sm text-ash-light">
              <li className="flex gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-butter" />
                <span>Ugbowo, Uniben, Benin City, Edo State, Nigeria</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="shrink-0 mt-0.5 text-butter" />
                <a href="tel:+2349167202140" className="hover:text-off-white transition-colors">
                  0916 720 2140
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="shrink-0 mt-0.5 text-butter" />
                <a href="mailto:samprec133@gmail.com" className="hover:text-off-white transition-colors break-all">
                  samprec133@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14 mb-6 opacity-20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ash-light">
          <p>&copy; {year} Zenith Drive. All rights reserved.</p>
          <p className="eyebrow">Peak Performance, Unmatched Luxury</p>
        </div>
      </div>
    </footer>
  );
}
