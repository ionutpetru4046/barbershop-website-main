/* eslint-disable react-hooks/exhaustive-deps */
// components/Lightbox.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [zoomed, setZoomed] = useState(false);

  // Handle keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  const nextImage = () => {
    setZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
        >
          {/* Image */}
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={1000}
            height={1000}
            className={`rounded-lg object-contain max-h-[90vh] transition-transform duration-300 ${
              zoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={() => setZoomed(!zoomed)}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 text-xl hover:bg-black"
          >
            ✕
          </button>

          {/* Prev/Next Arrows */}
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl p-2 hover:scale-110"
            onClick={prevImage}
          >
            ‹
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl p-2 hover:scale-110"
            onClick={nextImage}
          >
            ›
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
