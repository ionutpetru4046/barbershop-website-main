"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[var(--background)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Get in touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)]">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-[var(--sand)]">
            <p className="text-[var(--muted)] mb-8">
              Questions or want to book? Send us a message and we&apos;ll reply
              as soon as we can.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="input-modern"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  className="input-modern"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="input-modern resize-none"
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send message
              </button>
            </form>

            <ul className="mt-10 pt-8 border-t border-[var(--sand)] space-y-4 text-sm">
              <li className="flex items-start gap-3 text-[var(--muted)]">
                <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                <span>
                  43a Main Street, Belmayne, Dublin D13 AH10
                  <br />
                  <span className="text-[var(--foreground)]/70">
                    Next to Romayos · Radiance Hair and Beauty
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3 text-[var(--muted)]">
                <Phone className="w-5 h-5 text-[var(--gold)] shrink-0" />
                Walk-ins welcome — open 7 days a week
              </li>
              <li className="flex items-center gap-3 text-[var(--muted)]">
                <Mail className="w-5 h-5 text-[var(--gold)] shrink-0" />
                Message us using the form above
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--sand)] min-h-[400px] lg:min-h-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1753029818439!6m8!1m7!1scMdOTH0W7LRjpsdACN7DVQ!2m2!1d53.35825188033954!2d-6.254883884615186!3f145.12629982936903!4f-13.609449192005613!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ minHeight: "420px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Josh's Turkish Barber location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
