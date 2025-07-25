"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
      data-aos="fade-up"
    >
      {/* Left side image */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/barbershop.jpg"
          alt="Our barbershop team"
          width={600}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 text-gray-900">
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="mb-6 text-lg leading-relaxed">
          At Josh's Turkish Barbers, we believe a haircut is more than just a service — it’s an experience. 
          Founded in 2010 by master barber Alex Josh's, our shop has grown from a small Neighborhood 
          spot into a community favorite known for precision, style, and care.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Our team combines traditional barbering techniques with modern trends, ensuring every client 
          leaves looking and feeling their best. Whether you want a classic cut, a bold skin fade, or a 
          relaxing hot towel shave, we treat you like family.
        </p>

        <Link href="/booking">
          <button className="bg-black text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Book an Appointment
          </button>
        </Link>
      </div>
    </section>
  );
}
