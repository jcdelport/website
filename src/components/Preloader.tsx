"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Prevent scrolling during load
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        setIsMounted(false);
      }
    });

    // Fade logo in
    tl.fromTo(
      ".preloader-logo",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    // Hold briefly, then fade out logo while zooming slightly
    .to(".preloader-logo", { 
        opacity: 0, 
        scale: 1.1, 
        duration: 0.6, 
        ease: "power3.in", 
        delay: 0.6 
    })
    // Slide entire preloader background up to reveal the site smoothly
    .to(".preloader-container", { 
        yPercent: -100, 
        duration: 0.9, 
        ease: "expo.inOut" 
    }, "-=0.2");

  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-pitch flex items-center justify-center preloader-container pointer-events-auto">
      <svg className="preloader-logo" width="120" height="120" viewBox="0 0 100 100" fill="none">
         <defs>
            <linearGradient id="blue-grad-preloader" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#0056B3" />
               <stop offset="100%" stopColor="#00BFFF" />
            </linearGradient>
         </defs>
         <path 
            d="M10 10 L35 90 L50 40 L65 90 L90 10" 
            stroke="url(#blue-grad-preloader)" 
            strokeWidth="7" 
            strokeLinejoin="miter" 
            strokeMiterlimit="2" 
            fill="none" 
            style={{ filter: "drop-shadow(0 0 15px rgba(0,191,255,0.4))" }}
         />
      </svg>
    </div>
  );
}
