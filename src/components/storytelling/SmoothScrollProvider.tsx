"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Register GSAP ScrollTrigger plugin on client
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Initialize Lenis smooth scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      // Synchronize Lenis scroll with GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      // Tell GSAP to use requestAnimationFrame from Lenis
      const updateGsapTicker = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateGsapTicker);
      gsap.ticker.lagSmoothing(0);

      // Handle window resize
      const handleResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        gsap.ticker.remove(updateGsapTicker);
        window.removeEventListener("resize", handleResize);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return <>{children}</>;
}
