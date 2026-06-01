"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/barbershop.jpg"
            alt="Inside Josh's Turkish Barbers"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
        </div>

        <div>
          <span className="section-label">Since 2010</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)] mb-6">
            Our Story
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-5">
            At Josh&apos;s Turkish Barbers, a haircut is more than a service —
            it&apos;s an experience. What started as a neighbourhood spot has
            become a Belmayne favourite for precision, style, and genuine care.
          </p>
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            Our team blends traditional Turkish barbering with modern trends.
            Whether you want a classic cut, a bold skin fade, or a relaxing hot
            towel shave, you&apos;re treated like family.
          </p>
          <Link href="/booking" className="btn-primary">
            Book an appointment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
