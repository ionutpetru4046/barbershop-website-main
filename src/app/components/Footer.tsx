import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-6">
            <Image
              src="/logo.jpeg"
              alt="Josh's Turkish Barbers"
              width={72}
              height={72}
              className="rounded-full ring-2 ring-[var(--gold)]/40 object-cover shrink-0"
            />
            <div>
              <h2 className="font-display text-2xl font-semibold mb-3">
                Josh&apos;s Turkish Barbers
              </h2>
              <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                Modern cuts. Classic vibes. Your neighbourhood barber in
                Belmayne — precision, warmth, and style you can trust.
              </p>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Footer navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-4">
              Quick links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--gold)] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-sm text-white/70 hover:text-[var(--gold)] transition"
                >
                  Book online
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-4">
              Visit us
            </h3>
            <address className="not-italic text-sm text-white/70 space-y-2 leading-relaxed">
              <p>43a Main Street, Belmayne</p>
              <p>Dublin, Ireland D13 AH10</p>
              <p className="text-white/50">Next to Romayos</p>
              <p className="pt-2 text-[var(--gold)]/90">
                Open 7 days · Walk-ins welcome
              </p>
            </address>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--ink)] transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/josh_turkishbarber_d13/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--ink)] transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} Josh&apos;s Turkish Barber. All rights
            reserved.
          </p>
          <Link href="/booking" className="hover:text-[var(--gold)] transition">
            Book an appointment →
          </Link>
        </div>
      </div>
    </footer>
  );
}
