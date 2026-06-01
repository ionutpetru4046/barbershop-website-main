"use client";

import Navbar from "./components/Navbar";
import ScrollWrapper from "./components/ScrollWrapper";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Link from "next/link";
import Gallery from "./components/Gallery";
import AboutUs from "./components/About";
import { ArrowRight, MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <ScrollWrapper>
        <main className="bg-[var(--background)] text-[var(--foreground)]">
          {/* Hero */}
          <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
            aria-label="Hero section"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/baerber-pole-background.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/80 via-[var(--ink)]/65 to-[var(--ink)]/90" />

            <div className="relative z-10 max-w-3xl mx-auto animate-fade-in-up">
              <span className="section-label text-[var(--gold)]">
                Belmayne, Dublin
              </span>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                Josh&apos;s Turkish Barbers
              </h1>
              <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay">
                Precision cuts, traditional hot towel shaves, and a welcome
                you&apos;ll feel the moment you walk in.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay">
                <Link href="/booking" className="btn-primary">
                  Book your style
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#services" className="btn-outline">
                  View services
                </a>
              </div>
              <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--gold)]" />
                  Open 7 days a week
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--gold)]" />
                  Walk-ins welcome
                </span>
              </div>
            </div>

            <a
              href="#services"
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition text-xs tracking-widest uppercase"
              aria-label="Scroll to services"
            >
              Scroll
            </a>
          </section>

          {/* Services */}
          <section
            id="services"
            data-aos="fade-up"
            className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-white"
            aria-labelledby="services-heading"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <span className="section-label">What we offer</span>
                <h2
                  id="services-heading"
                  className="scroll-offset font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)]"
                >
                  Our Services
                </h2>
                <p className="mt-4 text-[var(--muted)] max-w-lg mx-auto">
                  From classic scissor cuts to sharp skin fades — every service
                  is tailored to you.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <ServiceCard
                  title="Classic Haircut"
                  description="A clean, sharp look with scissors and clippers."
                  price="€25"
                  serviceType="haircut"
                />
                <ServiceCard
                  title="Beard Trim"
                  description="Line-up, trim, and shave for any beard style."
                  price="€15"
                  serviceType="shave"
                />
                <ServiceCard
                  title="Full Package"
                  description="Haircut, beard trim, and hot towel treatment."
                  price="€40"
                  serviceType="color"
                />
                <ServiceCard
                  title="Skin Fade"
                  description="Modern skin fade for a sharp and fresh look."
                  price="€30"
                  serviceType="skinfade"
                />
                <ServiceCard
                  title="Kids Cut"
                  description="Stylish, quick, and comfortable haircuts for kids."
                  price="€20"
                  serviceType="kids"
                />
                <ServiceCard
                  title="Hot Towel Shave"
                  description="Traditional straight razor shave with hot towel finish."
                  price="€20"
                  serviceType="shave"
                />
              </div>
            </div>
          </section>

          {/* Booking CTA */}
          <section
            id="booking"
            className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 overflow-hidden"
            aria-label="Booking section"
          >
            <div className="absolute inset-0 bg-[var(--charcoal)]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--gold)_0%,_transparent_50%)]" />

            <div className="relative max-w-3xl mx-auto text-center">
              <span className="section-label">Reserve your chair</span>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-4">
                Book Your Appointment
              </h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Ready for your next look? Pick a time online or drop in — we
                take walk-ins every day of the week.
              </p>
              <Link href="/booking" className="btn-primary">
                Book now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Gallery */}
          <section
            id="gallery"
            aria-label="Gallery section"
            className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[var(--cream)]"
          >
            <Gallery />
          </section>
        </main>

        <AboutUs />
        <Contact />
        <Footer />
      </ScrollWrapper>
    </>
  );
}
