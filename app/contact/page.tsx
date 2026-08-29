import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Zenith Drive",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Visit us in Benin City, or reach out online"
      />

      <div className="grid lg:grid-cols-2 gap-14 mt-14">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-butter/25 flex items-center justify-center shrink-0">
                <MapPin size={19} className="text-butter-deep" />
              </div>
              <div>
                <p className="eyebrow text-ash mb-1">Address</p>
                <p className="text-brown">Ugbowo, Uniben, Benin City, Edo State, Nigeria</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-butter/25 flex items-center justify-center shrink-0">
                <Phone size={19} className="text-butter-deep" />
              </div>
              <div>
                <p className="eyebrow text-ash mb-1">Phone / WhatsApp</p>
                <a href="tel:+2349167202140" className="text-brown hover:text-butter-deep transition-colors">
                  0916 720 2140
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-butter/25 flex items-center justify-center shrink-0">
                <Mail size={19} className="text-butter-deep" />
              </div>
              <div>
                <p className="eyebrow text-ash mb-1">Email</p>
                <a href="mailto:samprec133@gmail.com" className="text-brown hover:text-butter-deep transition-colors break-all">
                  samprec133@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full bg-butter/25 flex items-center justify-center shrink-0">
                <Clock size={19} className="text-butter-deep" />
              </div>
              <div>
                <p className="eyebrow text-ash mb-1">Showroom Hours</p>
                <p className="text-brown">Mon &ndash; Sat, 9:00am &ndash; 6:00pm</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-brown/12 bg-ash-light/20 flex items-center justify-center">
            <div className="text-center px-6">
              <MapPin size={28} className="text-ash mx-auto mb-3" />
              <p className="eyebrow text-ash">Map — Ugbowo, Uniben, Benin City</p>
              <p className="text-xs text-ash mt-1">Embed a live Google Map here before launch</p>
            </div>
          </div>
        </div>

        <div className="card-elevated rounded-2xl p-6 md:p-8">
          <p className="eyebrow text-butter-deep mb-2">Send an Enquiry</p>
          <h3 className="font-display text-2xl text-brown mb-6">We&apos;ll respond within one business day</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
