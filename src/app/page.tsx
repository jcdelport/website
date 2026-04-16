"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const SplitTextWordHelper = ({ text }: { text: string }) => {
  return (
    <span aria-label={text} className="inline-block relative">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em] align-top pb-2">
          <span className="inline-block split-word translate-y-[120%]">{word}</span>
        </span>
      ))}
    </span>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Form State for Chips
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [scope, setScope] = useState("");

  useGSAP(() => {
    // 1. HERO TEXT REVEAL
    gsap.to(".split-word", {
      y: "0%",
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });

    // 2. PARALLAX FLOATING IMAGES (1.2s ease-out float in on scroll)
    const floatImages = gsap.utils.toArray(".float-img-wrapper") as HTMLElement[];
    floatImages.forEach((img) => {
      // Entrance Float
      gsap.fromTo(img, 
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          }
        }
      );
      
      // Continued Parallax
      gsap.to(img.querySelector("img"), {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div className="relative w-full overflow-hidden bg-bone" ref={containerRef}>
      
      {/* GLOBAL HEADER: SVG Anchor with Blue Gradient & Pulse */}
      <header className="fixed top-0 left-0 w-full z-50 p-8 mix-blend-difference text-white pointer-events-none flex justify-between items-start">
        <a href="/" className="pointer-events-auto group">
          <svg viewBox="0 0 100 80" className="w-16 h-auto transition-transform duration-700 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <linearGradient id="logoLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0b1338" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                  <linearGradient id="logoMidL" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <linearGradient id="logoMidR" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                  <linearGradient id="logoRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#bae6fd" />
                      <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
              </defs>
              <polygon points="0,0 28,0 25,80" fill="url(#logoLeft)" />
              <polygon points="28,0 50,40 25,80" fill="url(#logoMidL)" />
              <polygon points="70,0 50,40 75,80" fill="url(#logoMidR)" />
              <polygon points="70,0 100,0 75,80" fill="url(#logoRight)" />
              
              {/* Subtle Glowing Pulse ring on hover */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
          </svg>
        </a>
        <a href="#enquiry" className="pointer-events-auto font-mono text-[9px] uppercase tracking-[0.3em] font-bold px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-webster-blue hover:text-white transition-colors rounded-full border border-white/20">
          Book Advisory
        </a>
      </header>

      {/* 
        1. HERO: THE OPENING VOID (Pitch Black) 
        and overlapping 2. PRINCIPAL'S PERSPECTIVE
      */}
      <div className="relative">
          <section className="relative w-full h-[110vh] bg-pitch text-white flex flex-col pt-40 px-8 md:px-16 overflow-hidden z-10">
            
            <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-12 gap-8">
               <div className="col-span-1 md:col-span-12">
                  <h1 className="text-title font-serif leading-[0.9] max-w-6xl">
                     <SplitTextWordHelper text="Passion starts the movement. Strategy sustains the legacy." />
                  </h1>
               </div>
               
               <div className="col-span-1 md:col-span-8 flex flex-col gap-8 pt-12">
                 <div className="w-16 h-[2px] bg-webster-blue"></div>
                 <p className="font-sans text-[22px] leading-[1.8] font-light text-white/80 max-w-3xl">
                   Fifty years of operational mastery. From the established avenues of London and Paris to the emerging skylines of Dubai and Riyadh, we architect salon enterprises that outlast the trends.
                 </p>
               </div>
            </div>

            {/* Float B&W Portrait 1: Left Aligned Hero Anchor */}
            <div className="absolute right-0 md:right-16 md:top-64 w-[90%] md:w-[45%] aspect-[5/6] float-img-wrapper z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
               <div className="absolute inset-0 bg-webster-blue blur-3xl opacity-20 -z-10 scale-110 translate-y-12 rounded-full"></div>
               <img 
                  src="/Images/marc_editorial.png" 
                  alt="Marc Webster Seated"
                  className="w-full h-[120%] -top-[10%] absolute object-cover grayscale contrast-125 brightness-90" 
               />
               <div className="absolute inset-0 bg-transparent mix-blend-overlay opacity-30 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"2\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}></div>
            </div>
            
          </section>

          {/* 
            Overlap Anchor: The Principal's standing portrait literally floats across the Black/White boundary.
            It sits partly in the bottom of the Hero, and partly in the top of the Manifesto.
          */}
          <div className="absolute left-[5%] md:left-[10%] top-[90vh] w-[80%] md:w-[35%] aspect-[3/4] float-img-wrapper z-30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
             {/* Radial Blue Glow */}
             <div className="absolute inset-0 bg-webster-blue blur-3xl opacity-40 -z-10 scale-100 translate-y-12 translate-x-12 rounded-full mix-blend-screen"></div>
             <img 
               src="/Images/WhatsApp%20Image%202026-03-25%20at%2016.15.50%20(1).jpeg" 
               alt="Marc Webster Standing"
               className="w-full h-[120%] -top-[10%] absolute object-cover grayscale contrast-[1.3] object-top" 
             />
          </div>

          <section id="manifesto" className="relative w-full min-h-[80vh] bg-bone text-pitch pt-64 pb-32 px-8 md:px-16 flex flex-col items-end z-0">
             
             <div className="w-full md:w-[50%] flex flex-col right-0">
               <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-12">The Principal's Perspective.</h2>
               <p className="font-sans text-[20px] leading-[1.8] font-light opacity-80 mb-12">
                  Marc Webster understands creative ambition, but he understands structural weakness even better. After five decades at the helm of international salon operations, his role is to inform your decisions before they become expensive mistakes.
               </p>
               <h3 className="font-serif text-3xl italic opacity-90 border-l-[2px] border-webster-blue pl-6 py-2">"Fifty years of operational mastery from London to Dubai."</h3>
             </div>

          </section>
      </div>

      {/* 3. THE TURNKEY MANDATE (Pitch Black + Vertical Masonry Float) */}
      <section className="relative w-full py-40 bg-pitch text-white overflow-hidden px-8 md:px-16 z-20">
        
        <div className="max-w-7xl mx-auto mb-32 flex flex-col items-center text-center">
            <h2 className="text-heading font-serif leading-[0.9] mb-8">Total Operational Sovereignty.</h2>
            <div className="w-16 h-[2px] bg-webster-blue mb-8"></div>
            <p className="font-sans text-[20px] leading-[1.8] opacity-80 max-w-2xl font-light">
               For the investor who demands a finished, high-performance asset. We provide a full turnkey solution for first-time owners and international backers.
            </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-32">
           
           {/* Phase 01 */}
           <div className="relative w-full md:w-[70%] ml-auto bg-black/40 backdrop-blur-md p-16 float-img-wrapper z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5">
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-webster-blue mb-8 block">Phase 01</span>
             <h3 className="text-[clamp(3rem,5vw,4rem)] font-serif leading-[0.9] mb-6">Concept &amp; Curation.</h3>
             <p className="font-sans text-[18px] leading-[1.8] font-light opacity-70">
               Sourcing the soul of the brand and the physical real estate in premium global territories.
             </p>
           </div>

           {/* Phase 02 */}
           <div className="relative w-full md:w-[70%] mr-auto bg-black/40 backdrop-blur-md p-16 float-img-wrapper z-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5 md:-mt-16">
             <div className="absolute inset-0 bg-webster-blue blur-3xl opacity-10 -z-10 rounded-full scale-150"></div>
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-webster-blue mb-8 block">Phase 02</span>
             <h3 className="text-[clamp(3rem,5vw,4rem)] font-serif leading-[0.9] mb-6">Structural Engineering.</h3>
             <p className="font-sans text-[18px] leading-[1.8] font-light opacity-70">
               Defining wage-to-revenue ratios and clinical labour sustainability models.
             </p>
           </div>

           {/* Phase 03 */}
           <div className="relative w-full md:w-[70%] ml-auto bg-black/40 backdrop-blur-md p-16 float-img-wrapper z-30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5 md:-mt-16">
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-webster-blue mb-8 block">Phase 03</span>
             <h3 className="text-[clamp(3rem,5vw,4rem)] font-serif leading-[0.9] mb-6">The Digital Launch.</h3>
             <p className="font-sans text-[18px] leading-[1.8] font-light opacity-70">
               Deploying the technical atelier—your integrated operational nervous system.
             </p>
           </div>

        </div>
      </section>

      {/* 4. THE STRATEGIC AUDIT & DIGITAL NERVE CENTER (Bone White) */}
      <section className="relative w-full py-40 px-8 md:px-16 bg-bone text-pitch z-10">
         
         {/* Strategic Audit */}
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 mb-40">
            <div className="w-full lg:w-[40%] flex flex-col">
               <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-webster-blue mb-6">Assessment Context</span>
               <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-12">The Preventative Commercial Audit.</h2>
               <div className="w-16 h-[2px] bg-webster-blue mb-8"></div>
            </div>
            
            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-16 float-img-wrapper">
               <div className="flex flex-col">
                  <h3 className="text-2xl font-serif mb-4">Break-Even Accuracy</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">Granular analysis of chair-hour profitability to find the precise moment of margin.</p>
               </div>
               <div className="flex flex-col">
                  <h3 className="text-2xl font-serif mb-4">Lease Liability</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">Strategic auditing of rental exposure and escalations in prime footprints.</p>
               </div>
               <div className="flex flex-col">
                  <h3 className="text-2xl font-serif mb-4">Cash Flow Resilience</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">Stress-testing liquidity across peak and trough seasons to maintain investor confidence.</p>
               </div>
               <div className="flex flex-col">
                  <h3 className="text-2xl font-serif mb-4">Structural Viability</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">Moving from a fragile creative collective to a stable commercial asset.</p>
               </div>
            </div>
         </div>

         {/* Digital Nerve Center */}
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
            <div className="w-full lg:w-[40%] flex flex-col">
               <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-webster-blue mb-6">Operational Tech</span>
               <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-12">The Digital Nerve Center.</h2>
               <div className="w-16 h-[2px] bg-webster-blue mb-8"></div>
            </div>
            
            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-16 float-img-wrapper">
               <div className="flex flex-col bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-4">Integrated CRM &amp; ERP</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">Centralized data for absolute margin control.</p>
               </div>
               <div className="flex flex-col bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-4">Revenue Capture Engine</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">High-performance booking systems optimized for maximum yield.</p>
               </div>
               <div className="flex flex-col bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-4">Native Mobile Application</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">Direct-to-consumer access for retention and brand loyalty.</p>
               </div>
               <div className="flex flex-col bg-white p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-serif mb-4">E-commerce Backbone</h3>
                  <p className="font-sans text-[16px] leading-[1.8] font-light opacity-70">Diversifying revenue through high-margin retail and payment automations.</p>
               </div>
            </div>
         </div>

      </section>

      {/* 5. THE ENQUIRY PORTAL (Full Width White) */}
      <section id="enquiry" className="relative w-full py-40 px-8 md:px-16 bg-white text-pitch shadow-[0_-30px_80px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-5xl mx-auto flex flex-col">
           
           <h2 className="text-[clamp(4.5rem,8vw,7rem)] font-serif leading-[0.9] mb-6">
              The Enquiry <span className="text-webster-blue italic">Portal.</span>
           </h2>
           <p className="font-sans text-[20px] leading-[1.8] font-light opacity-70 mb-20">
              Official intake architecture for Turnkey and Capital protocol mandates.
           </p>

           <form className="flex flex-col gap-16 font-sans w-full">
              
              <input 
                 type="text" 
                 placeholder="Full Name & Current Enterprise" 
                 className="bg-transparent border-0 border-b-[1px] border-webster-blue/50 p-4 pl-0 text-pitch font-serif text-3xl focus:ring-0 focus:outline-none focus:border-webster-blue transition-colors placeholder-pitch/20 rounded-none w-full"
              />
              
              {/* Profile Chips */}
              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-webster-blue">Investment Profile</label>
                <div className="flex flex-wrap gap-4">
                   {["First-Time Owner", "Portfolio Investor", "Institution"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setProfile(chip)}
                         className={`px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           profile === chip 
                             ? "bg-webster-blue text-white border-webster-blue shadow-[0_10px_30px_-10px_rgba(0,86,179,0.6)] scale-105" 
                             : "bg-transparent text-pitch/50 border-pitch/10 hover:border-webster-blue hover:text-webster-blue"
                         }`}
                      >
                         {chip}
                      </button>
                   ))}
                </div>
              </div>

              {/* Location Chips */}
              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-webster-blue">Target Location</label>
                <div className="flex flex-wrap gap-4">
                   {["London", "Europe", "Middle East"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setLocation(chip)}
                         className={`px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           location === chip 
                             ? "bg-webster-blue text-white border-webster-blue shadow-[0_10px_30px_-10px_rgba(0,86,179,0.6)] scale-105" 
                             : "bg-transparent text-pitch/50 border-pitch/10 hover:border-webster-blue hover:text-webster-blue"
                         }`}
                      >
                         {chip}
                      </button>
                   ))}
                </div>
              </div>

              {/* Scope Chips */}
              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-webster-blue">Project Scope</label>
                <div className="flex flex-wrap gap-4">
                   {["Turnkey Build", "Strategy Review", "Digital Infrastructure"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setScope(chip)}
                         className={`px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           scope === chip 
                             ? "bg-webster-blue text-white border-webster-blue shadow-[0_10px_30px_-10px_rgba(0,86,179,0.6)] scale-105" 
                             : "bg-transparent text-pitch/50 border-pitch/10 hover:border-webster-blue hover:text-webster-blue"
                         }`}
                      >
                         {chip}
                      </button>
                   ))}
                </div>
              </div>

              <textarea 
                 rows={3}
                 placeholder="Message Detail..." 
                 className="bg-transparent border-0 border-b-[1px] border-webster-blue/50 p-4 pl-0 text-pitch font-sans text-xl font-light focus:ring-0 focus:outline-none focus:border-webster-blue transition-colors placeholder-pitch/20 rounded-none w-full mt-4 resize-none"
              />

              <button type="submit" className="bg-webster-blue text-white px-12 py-6 rounded-full text-[12px] tracking-[0.3em] uppercase font-bold shadow-[0_20px_40px_-10px_rgba(0,86,179,0.5)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,86,179,0.7)] transition-all duration-500 w-max mt-8 relative overflow-hidden group">
                <span className="relative z-10">Submit Mandate</span>
                <div className="absolute inset-0 bg-pitch opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"></div>
              </button>

           </form>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER (Pitch Black) */}
      <footer className="w-full bg-pitch text-white border-t-[4px] border-webster-blue relative z-30">
        <div className="max-w-7xl mx-auto py-24 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-12">
           <h3 className="text-4xl font-serif italic text-webster-blue leading-none">Independent<br/><span className="text-white text-5xl">Commercial Clarity.</span></h3>
           <p className="font-mono text-xs uppercase tracking-widest opacity-40">© 2026 Webster Advisory</p>
        </div>

        <div className="marquee-container py-12 uppercase tracking-[0.3em] font-sans text-[12px] border-t border-white/10">
           <div className="marquee-content flex gap-8 whitespace-nowrap items-center font-bold">
              <span>LONDON</span><span className="text-webster-blue">•</span>
              <span>PARIS</span><span className="text-webster-blue">•</span>
              <span>MILAN</span><span className="text-webster-blue">•</span>
              <span>DUBAI</span><span className="text-webster-blue">•</span>
              <span>RIYADH</span><span className="text-webster-blue">•</span>
              <span className="text-webster-blue">50 YEARS OF SOVEREIGNTY</span><span className="text-webster-blue">•</span>

              <span>LONDON</span><span className="text-webster-blue">•</span>
              <span>PARIS</span><span className="text-webster-blue">•</span>
              <span>MILAN</span><span className="text-webster-blue">•</span>
              <span>DUBAI</span><span className="text-webster-blue">•</span>
              <span>RIYADH</span><span className="text-webster-blue">•</span>
              <span className="text-webster-blue">50 YEARS OF SOVEREIGNTY</span><span className="text-webster-blue">•</span>
              
              <span>LONDON</span><span className="text-webster-blue">•</span>
              <span>PARIS</span><span className="text-webster-blue">•</span>
              <span>MILAN</span><span className="text-webster-blue">•</span>
              <span>DUBAI</span><span className="text-webster-blue">•</span>
              <span>RIYADH</span><span className="text-webster-blue">•</span>
              <span className="text-webster-blue">50 YEARS OF SOVEREIGNTY</span><span className="text-webster-blue">•</span>
           </div>
        </div>
      </footer>

    </div>
  );
}
