"use client";

import { useState } from "react";
import { whatsappLink } from "../lib/site";

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/15";

// Sends the enquiry straight to the business WhatsApp with the details prefilled.
export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Namaste Makkhan Gold! 🙏",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `City: ${data.get("city")}`,
      `I am a: ${data.get("type")}`,
      `Message: ${data.get("message") || "-"}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-medium text-ink/80">
        Full name
        <input name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink/80">
        Phone
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          pattern="[0-9+\s\-]{10,15}"
          placeholder="+91 98765 43210"
          className={inputClass}
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink/80">
        City
        <input name="city" required placeholder="Your city" className={inputClass} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink/80">
        I am a
        <select name="type" className={inputClass} defaultValue="Customer">
          <option>Customer</option>
          <option>Retailer / Shop owner</option>
          <option>Distributor</option>
          <option>Hotel / Café / Office</option>
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium text-ink/80 sm:col-span-2">
        Message
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us what you need — pack sizes, quantity, etc."
          className={`${inputClass} resize-none`}
        />
      </label>
      <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-masala px-8 py-3.5 font-semibold text-white shadow-lg shadow-masala/30 transition hover:-translate-y-0.5 hover:bg-masala-dark"
        >
          Send on WhatsApp
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {sent && (
          <p className="text-sm font-medium text-leaf" role="status">
            Thank you! WhatsApp opened with your enquiry.
          </p>
        )}
      </div>
    </form>
  );
}
