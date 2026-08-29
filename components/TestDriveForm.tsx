"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { vehicles } from "@/lib/vehicles";

type FormState = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  date: string;
  time: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  date: "",
  time: "",
  message: "",
};

export default function TestDriveForm({ preselectedVehicle = "" }: { preselectedVehicle?: string }) {
  const [form, setForm] = useState<FormState>({ ...initialState, vehicle: preselectedVehicle });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!/^[0-9+()\-\s]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.vehicle) next.vehicle = "Please select a vehicle.";
    if (!form.date) next.date = "Preferred date is required.";
    if (!form.time) next.time = "Preferred time is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-off-white border rounded-xl px-4 py-3 text-sm text-brown placeholder:text-ash outline-none transition-colors ${
      errors[field] ? "border-red-400" : "border-brown/15 focus:border-butter-deep"
    }`;

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="card-elevated rounded-2xl p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-butter/25 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={30} className="text-butter-deep" />
        </div>
        <h3 className="font-display text-2xl text-brown mb-3">Test drive request received</h3>
        <p className="text-brown-light text-sm max-w-sm mx-auto leading-relaxed">
          Thank you, {form.name.split(" ")[0]}. Our team will contact you shortly at{" "}
          {form.phone} to confirm your {form.date} appointment.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="mt-7 text-sm font-medium text-brown border border-brown/20 rounded-full px-6 py-2.5 hover:bg-brown hover:text-off-white transition-colors"
        >
          Book another test drive
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-elevated rounded-2xl p-6 md:p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="eyebrow text-ash block mb-2">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputClass("name")}
            placeholder="Adaeze Okafor"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label className="eyebrow text-ash block mb-2">Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputClass("phone")}
            placeholder="0916 720 2140"
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>}
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
        <label className="eyebrow text-ash block mb-2">Vehicle</label>
        <select
          value={form.vehicle}
          onChange={(e) => set("vehicle", e.target.value)}
          className={inputClass("vehicle") + " appearance-none"}
        >
          <option value="">Select a vehicle&hellip;</option>
          {vehicles.map((v) => (
            <option key={v.slug} value={v.slug}>
              {v.year} {v.brand} {v.model}
            </option>
          ))}
        </select>
        {errors.vehicle && <p className="text-xs text-red-500 mt-1.5">{errors.vehicle}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="eyebrow text-ash block mb-2">Preferred Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
            className={inputClass("date")}
          />
          {errors.date && <p className="text-xs text-red-500 mt-1.5">{errors.date}</p>}
        </div>
        <div>
          <label className="eyebrow text-ash block mb-2">Preferred Time</label>
          <input
            type="time"
            value={form.time}
            onChange={(e) => set("time", e.target.value)}
            className={inputClass("time")}
          />
          {errors.time && <p className="text-xs text-red-500 mt-1.5">{errors.time}</p>}
        </div>
      </div>

      <div>
        <label className="eyebrow text-ash block mb-2">Message (optional)</label>
        <textarea
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          rows={4}
          className={inputClass("message")}
          placeholder="Anything you'd like us to know ahead of your visit&hellip;"
        />
      </div>

      <AnimatePresence>
        {Object.values(errors).some(Boolean) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-500"
          >
            Please correct the highlighted fields above.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        className="w-full bg-brown text-off-white rounded-full py-3.5 text-sm font-medium tracking-wide hover:bg-butter-deep hover:text-charcoal transition-colors"
      >
        Request Test Drive
      </button>
    </form>
  );
}
