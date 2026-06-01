"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [confirmedName, setConfirmedName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !date || !time) {
      return;
    }

    setConfirmedName(name);
    setSubmitted(true);
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setMessage("");
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle2 className="w-16 h-16 text-[var(--gold)] mx-auto mb-6" />
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] mb-3">
          You&apos;re booked!
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-sm mx-auto">
          Thanks, {confirmedName}! We&apos;ll confirm your appointment
          shortly. See you at the shop.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <span className="section-label">Appointments</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--ink)]">
          Book Your Visit
        </h2>
        <p className="mt-3 text-[var(--muted)] text-sm">
          Fill in your details and we&apos;ll hold your slot.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
            Full name
          </label>
          <input
            id="booking-name"
            type="text"
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-modern"
            required
          />
        </div>

        <div>
          <label htmlFor="booking-email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
            Email
          </label>
          <input
            id="booking-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-modern"
            required
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="booking-date" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Date
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-modern"
              required
            />
          </div>
          <div>
            <label htmlFor="booking-time" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
              Time
            </label>
            <input
              id="booking-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="input-modern"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="booking-notes" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
            Notes <span className="text-[var(--muted)] font-normal">(optional)</span>
          </label>
          <textarea
            id="booking-notes"
            placeholder="Preferred service, special requests..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-modern resize-none"
            rows={3}
          />
        </div>

        <button type="submit" className="btn-primary w-full mt-2">
          <Calendar className="w-4 h-4" />
          Confirm booking
        </button>
      </form>

      <p className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--gold)] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </p>
    </>
  );
}
