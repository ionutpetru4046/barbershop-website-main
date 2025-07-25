// components/Footer.tsx

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand with Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.jpeg"
            alt="Josh’s Turkish Barber"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-3">Josh’s Turkish Barbers</h2>
            <p className="text-sm text-white/60 max-w-xs">
              Modern cuts. Classic vibes. Book your next style with confidence.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3 justify-center">
          <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
          <a
            href="#"
            className="hover:text-yellow-400 transition text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-yellow-400 transition text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#booking"
            className="hover:text-yellow-400 transition text-sm font-medium"
          >
            Booking
          </a>
          <a
            href="#gallery"
            className="hover:text-yellow-400 transition text-sm font-medium"
          >
            Gallery
          </a>
          <a
            href="#about"
            className="hover:text-yellow-400 transition text-sm font-medium"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition text-sm font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Contact + Social */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Contact</h3>
          <h2 className="text-lg font-bold">Josh’s Barbers</h2>
          <p className="text-sm font-semibold">Barber Shop</p>
          <p className="text-sm">
            ⏰ <span className="italic">Open 7 days a week</span>
          </p>
          <p className="text-sm max-w-xs">
            📍 43a Main Street, Belmayne (Next to Romayos)
          </p>
          <p className="text-sm font-semibold">📞 We take walk-ins</p>
          <p className="text-sm">🏬 Radiance Hair and Beauty</p>
          <p className="text-sm max-w-xs">
            43a Main Street Belmayne, Dublin, Ireland D13AH10
          </p>

          <div className="flex space-x-6 mt-4 text-xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/josh_turkishbarber_d13/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Josh’s Turkish Barber. All rights reserved.
      </div>
    </footer>
  );
}
