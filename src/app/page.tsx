"use client";

import Navbar from "./components/Navbar";
import ScrollWrapper from "./components/ScrollWrapper";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Link from "next/link";
import Gallery from "./components/Gallery";
import AboutUs from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Wrap main content inside ScrollWrapper if intended */}
      <ScrollWrapper>
        <main className="bg-gray-100 text-gray-800 pt-20">
          {/* Hero Section with Video Background */}
          <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 overflow-hidden"
            aria-label="Hero section"
          >
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="absolute top-0 left-0 w-full h-full object-cover z-11"
            >
              <source src="/baerber-pole-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

            {/* Hero Content */}
            <div className="relative z-20 text-white max-w-xl sm:max-w-2xl md:max-w-3xl animate-fade-in-up px-4 sm:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 drop-shadow-lg">
                ✂️ Josh’s Turkish Barbers
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-light mb-6 bg-white/10 px-3 py-2 rounded-full inline-block backdrop-blur-sm shadow-sm max-w-md mx-auto">
                <span className="text-white/90">Modern Cuts</span> ·{" "}
                <span className="text-white/70">Classic Vibes</span>
              </p>
              <Link href="/booking" passHref>
                <button
                  type="button"
                  className="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-3 cursor-pointer ml-4 px-6 rounded-lg shadow-md transition"
                  aria-label="Book your style"
                >
                  Book Your Style
                </button>
              </Link>
            </div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            data-aos="fade-up"
            className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white"
            aria-labelledby="services-heading"
          >
            <h2
              id="services-heading"
              className="scroll-offset text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-10"
            >
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              <ServiceCard
                title="Classic Haircut"
                description="A clean, sharp look with scissors and clippers."
                price="$25"
                serviceType="haircut"
              />
              <ServiceCard
                title="Beard Trim"
                description="Line-up, trim, and shave for any beard style."
                price="$15"
                serviceType="shave"
              />
              <ServiceCard
                title="Full Package"
                description="Haircut, beard trim, and hot towel treatment."
                price="$40"
                serviceType="color"
              />
              <ServiceCard
                title="Skin Fade"
                description="Modern skin fade for a sharp and fresh look."
                price="$30"
                serviceType="skinfade"
              />
              <ServiceCard
                title="Kids Cut"
                description="Stylish, quick, and comfortable haircuts for kids."
                price="$20"
                serviceType="kids"
              />
              <ServiceCard
                title="Hot Towel Shave"
                description="Traditional straight razor shave with hot towel finish."
                price="$20"
                serviceType="shave"
              />
            </div>
          </section>

          {/* Booking Section with placeholder content */}
          <section
            id="booking"
            className="bg-gray-100 px-4 sm:px-6 md:px-12 py-12 sm:py-16 text-center"
            aria-label="Booking section"
          >
            <h2 className="text-3xl font-semibold mb-4">
              Book Your Appointment
            </h2>
            <p className="max-w-xl mx-auto text-gray-600">
              Ready for your next style? Use our booking page or contact us to
              schedule your appointment.
            </p>
            <Link href="/booking" passHref>
              <button
                type="button"
                className="mt-6 bg-gray-600 hover:bg-gray-800 text-white cursor-pointer font-semibold py-3 px-6 rounded-lg shadow-md transition"
                aria-label="Go to booking page"
              >
                Book Now
              </button>
            </Link>
          </section>

          {/* Gallery Section */}
          <section
            id="gallery"
            aria-label="Gallery section"
            className="px-4 sm:px-6 md:px-12 py-12 sm:py-16"
          >
            <Gallery />
          </section>
        </main>
        <AboutUs />
        <Contact />
        <Footer />

        {/* Global smooth scroll style: move to your global CSS */}
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </ScrollWrapper>
    </>
  );
}
