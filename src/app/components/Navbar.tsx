"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-lg bg-white/10 text-white fixed w-full top-0 z-50 shadow-lg border-b border-white/20 px-6 py-4 flex items-center justify-between h-40 md:h-32">
      {/* Logo */}
      <Link href="/" className="flex items-center z-20">
        <Image
          src="/logo.jpeg"
          alt="SharpEdge Logo"
          width={120}
          height={120}
          className="rounded-full"
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 z-20">
        {["Home", "Services", "Booking", "Gallery", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-900 transition-colors duration-300 text-white font-medium shadow-sm whitespace-nowrap"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L12 14.83l-6.29 6.3-1.42-1.42L9.17 12 2.88 5.71l1.42-1.42L12 9.17l6.29-6.3 1.42 1.42z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full backdrop-blur-lg bg-white/80 text-black flex flex-col space-y-4 px-6 py-4 z-10">
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
