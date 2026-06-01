"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--ink)]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 z-20">
          <Image
            src="/logo.jpeg"
            alt="Josh's Turkish Barbers"
            width={48}
            height={48}
            className="rounded-full ring-2 ring-[var(--gold)]/50 object-cover"
            priority
          />
          <span className="hidden sm:block font-display text-lg font-semibold text-white tracking-wide">
            Josh&apos;s Turkish Barbers
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-[var(--gold)] transition-colors rounded-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <Link href="/booking" className="btn-primary text-sm !py-2.5 !px-5">
              Book now
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="lg:hidden z-20 p-2 text-white rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-0 z-10 bg-[var(--ink)]/98 backdrop-blur-lg pt-24 px-6 pb-8">
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 text-xl font-display text-white border-b border-white/10 hover:text-[var(--gold)] transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center"
              >
                Book now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
