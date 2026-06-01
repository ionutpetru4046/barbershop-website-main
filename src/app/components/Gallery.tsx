"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "../ui/Lightbox";

const imageList = [
  "/gallery/haircutdemo1.jpg",
  "/gallery/haircutdemo2.jpg",
  "/gallery/haircutdemo3.jpg",
  "/gallery/haircutdemo4.jpg",
  "/gallery/haircutdemo5.jpg",
  "/gallery/haircutdemo6.jpg",
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="section-label">Our work</span>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-[var(--ink)]">
          Gallery
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Tap any photo to view full size
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {imageList.map((src, index) => (
          <button
            key={src}
            type="button"
            className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2"
            onClick={() => setLightboxIndex(index)}
            aria-label={`View gallery image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`Barbershop work sample ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[var(--ink)]/0 group-hover:bg-[var(--ink)]/30 transition-colors duration-300 flex items-end justify-center pb-6">
              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={imageList}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
