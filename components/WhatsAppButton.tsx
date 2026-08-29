"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349167202140"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zenith Drive on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform duration-200"
    >
      <MessageCircle size={26} strokeWidth={2} fill="white" className="text-[#25D366]" />
    </a>
  );
}
