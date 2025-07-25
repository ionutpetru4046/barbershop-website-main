"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "../ui/Lightbox"; // adjust the path if needed

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
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center mt-4 mb-8 p-2">
        Check Our Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {imageList.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setLightboxIndex(index)}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
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
