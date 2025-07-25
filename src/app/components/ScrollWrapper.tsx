"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return <>{children}</>;
}
