"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useStoryAnimation(sectionId: string) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = document.getElementById(sectionId);
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Find cards and character inside this section
      const cards = el.querySelectorAll(".story-card, .grid > div");
      const character = el.querySelector(".yasser-character, img");

      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        });
      }

      if (character) {
        gsap.from(character, {
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.2)",
        });
      }
    }, el);

    return () => ctx.revert();
  }, [sectionId]);

  return sectionRef;
}
