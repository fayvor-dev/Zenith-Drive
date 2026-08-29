"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type FormState = { name: string; email: string; phone: string; message: string };
const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-cream border rounded-xl px-4 py-3 text-sm text-brown placeholder:text-ash outline-none transition-colors ${
      errors[field] ? "border-red-400" : "border-brown/15 focus:border-butter-deep"
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-10"
      >
        <div className="w-16 h-16 rounded-full bg-butter/25 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={30} className="text-butter-deep" />
        </div>
        <h3 className="font-display text-2xl text-brown mb-3">Message sent</h3>
        <p className="text-brown-light text-sm max-w-sm mx-auto">
          Thanks, {form.name.split(" ")[0]} — our team will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="eyebrow text-ash block mb-2">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass("name")}
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label className="eyebrow text-ash block mb-2">Phone (optional)</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputClass("phone")}
            placeholder="0916 720 2140"
          />
        </div>
      </div>
      <div>
        <label className="eyebrow text-ash block mb-2">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className={inputClass("email")}
          placeholder="you@email.com"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
      </div>
      <div>
        <label className="eyebrow text-ash block mb-2">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          rows={5}
          className={inputClass("message")}
          placeholder="How can we help?"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-brown text-off-white rounded-full py-3.5 text-sm font-medium tracking-wide hover:bg-butter-deep hover:text-charcoal transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
