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

  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [scope, setScope] = useState("");

  useGSAP(() => {
    // 1. HERO STAGGERED REVEAL
    gsap.to(".split-word", {
      y: "0%",
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });

    // 2. PARALLAX FLOATING IMAGES & SMOOTH IN-FADES
    const floatImages = gsap.utils.toArray(".float-img-wrapper") as HTMLElement[];
    floatImages.forEach((img) => {
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
    <div className="relative w-full overflow-hidden bg-bone text-pitch" ref={containerRef}>
      
      {/* 
        LOGOMARK: Acting as a "light source" 
        Blue geometric 'W' anchored in the top left, throwing a strong blue glow 
      */}
      <header className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-start pointer-events-none drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">
        <a href="/" className="pointer-events-auto group">
          <svg viewBox="0 0 100 80" className="w-16 h-auto transition-transform duration-700 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <linearGradient id="logoLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0b1338" />
                      <stop offset="100%" stopColor="#0056B3" />
                  </linearGradient>
                  <linearGradient id="logoMidL" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0056B3" />
                      <stop offset="100%" stopColor="#00BFFF" />
                  </linearGradient>
                  <linearGradient id="logoMidR" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0056B3" />
                      <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                  <linearGradient id="logoRight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00BFFF" />
                      <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
              </defs>
              <polygon points="0,0 28,0 25,80" fill="url(#logoLeft)" />
              <polygon points="28,0 50,40 25,80" fill="url(#logoMidL)" />
              <polygon points="70,0 50,40 75,80" fill="url(#logoMidR)" />
              <polygon points="70,0 100,0 75,80" fill="url(#logoRight)" />
          </svg>
        </a>
      </header>

      {/* 
        1. THE GLOBAL STATEMENT (Pitch Black) 
      */}
      <div className="relative">
          <section className="relative w-full min-h-[120vh] bg-pitch text-white flex flex-col pt-40 px-8 md:px-16 overflow-hidden z-10">
            
            <div className="relative z-30 w-full grid grid-cols-1 md:grid-cols-12 gap-8">
               <div className="col-span-1 md:col-span-12">
                  <h1 className="text-[clamp(4.5rem,10vw,10rem)] font-serif leading-[0.9] max-w-6xl">
                     <SplitTextWordHelper text="Passion starts the movement. Strategy sustains the legacy." />
                  </h1>
               </div>
               
               <div className="col-span-1 md:col-span-8 flex flex-col gap-8 pt-12">
                 <div className="w-16 h-[2px] bg-gradient-to-r from-[#0056B3] to-[#00BFFF]"></div>
                 <p className="font-sans text-[22px] leading-[1.8] font-light text-white/80 max-w-2xl">
                   Fifty years of operational mastery. We architect salon enterprises across London, Paris, and Dubai that outlast the trends.
                 </p>
               </div>
            </div>

            {/* Massively scaled Typography Highlights overlapping BGs */}
            <div className="absolute left-8 md:left-16 bottom-[10vh] z-20 pointer-events-none opacity-20">
               <h2 className="text-[clamp(10rem,25vw,30rem)] font-serif leading-[0.7] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF]">
                 50<br/>YEARS
               </h2>
            </div>
            
            {/* The Blueprint Portrait floating freely to destroy the boxed look */}
            <div className="absolute right-0 md:right-16 md:top-40 w-[90%] md:w-[45%] h-[80vh] float-img-wrapper z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
               {/* Radial Blue Glow */}
               <div className="absolute inset-0 bg-[#0056B3] blur-3xl opacity-30 -z-10 scale-125 translate-y-12"></div>
               <img 
                  src="/Images/marc_editorial.png" 
                  alt="Marc Webster Seated"
                  className="w-full h-[120%] -top-[10%] absolute object-cover grayscale contrast-[1.3] brightness-90" 
               />
            </div>
            
          </section>

          {/* 
            2. THE PRINCIPAL'S PERSPECTIVE
            The portrait floating aggressively halfway across the section boundary
          */}
          <div className="absolute left-[5%] md:left-[10%] top-[95vh] w-[80%] md:w-[35%] aspect-[3/4] float-img-wrapper z-40 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
             {/* Radial Blue Glow */}
             <div className="absolute inset-0 bg-[#00BFFF] blur-[120px] opacity-40 -z-10 scale-110 translate-y-24 translate-x-12 mix-blend-screen"></div>
             <img 
               src="/Images/WhatsApp%20Image%202026-03-25%20at%2016.15.50%20(1).jpeg" 
               alt="Marc Webster Standing"
               className="w-full h-[120%] -top-[10%] absolute object-cover grayscale contrast-[1.4] object-top" 
             />
          </div>

          <section className="relative w-full min-h-[80vh] bg-bone text-pitch pt-64 pb-32 px-8 md:px-16 flex flex-col items-end z-0">
             <div className="w-full md:w-[50%] flex flex-col right-0">
               <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-12">The Principal's Perspective.</h2>
               <p className="font-sans text-[20px] leading-[1.8] font-light opacity-80 mb-12">
                  Marc Webster understands creative ambition, but he understands structural weakness even better. We inform decisions before they become expensive mistakes.
               </p>
             </div>
          </section>
      </div>

      {/* 3. THE TURNKEY MANDATE */}
      <section className="relative w-full py-40 bg-pitch text-white overflow-hidden px-8 md:px-16 z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-pitch via-pitch to-pitch/80 z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto mb-32 flex flex-col items-center text-center relative z-10">
            <h2 className="text-[clamp(5rem,10vw,8rem)] font-serif leading-[0.9] mb-8">Total Operational Sovereignty.</h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-8"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
           
           <div className="relative w-full bg-black/40 backdrop-blur-md p-16 float-img-wrapper shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-none">
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-8 block">Phase 01</span>
             <h3 className="text-4xl font-serif leading-[0.9]">Concept &amp; Curation.</h3>
           </div>

           <div className="relative w-full bg-black/40 backdrop-blur-md p-16 float-img-wrapper shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-none md:mt-16">
             <div className="absolute inset-0 bg-[#0056B3] blur-[100px] opacity-20 -z-10 rounded-full scale-150"></div>
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-8 block">Phase 02</span>
             <h3 className="text-4xl font-serif leading-[0.9]">Structural Engineering.</h3>
           </div>

           <div className="relative w-full bg-black/40 backdrop-blur-md p-16 float-img-wrapper shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-none md:mt-32">
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-8 block">Phase 03</span>
             <h3 className="text-4xl font-serif leading-[0.9]">The Digital Launch.</h3>
           </div>

        </div>
      </section>

      {/* 4. THE STRATEGIC AUDIT & DIGITAL NERVE CENTER */}
      <section className="relative w-full py-40 px-8 md:px-16 bg-bone text-pitch z-10">
         
         {/* Strategic Audit */}
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 mb-40 border-t border-pitch/10 pt-24">
            <div className="w-full lg:w-[40%] flex flex-col">
               <h2 className="text-[clamp(4.5rem,8vw,7rem)] font-serif leading-[0.9] mb-12">The Preventative Commercial Audit.</h2>
               <div className="w-16 h-[2px] bg-gradient-to-r from-[#0056B3] to-[#00BFFF]"></div>
            </div>
            
            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-16 float-img-wrapper bg-white p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-sm">
               <h3 className="text-2xl font-serif">Break-Even Accuracy</h3>
               <h3 className="text-2xl font-serif">Lease Liability</h3>
               <h3 className="text-2xl font-serif">Cash Flow Resilience</h3>
               <h3 className="text-2xl font-serif">Structural Viability</h3>
            </div>
         </div>

         {/* Digital Nerve Center */}
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 border-t border-pitch/10 pt-24">
            <div className="w-full lg:w-[40%] flex flex-col">
               <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#0056B3] mb-6">Digital Infrastructure</span>
               <h2 className="text-[clamp(4.5rem,8vw,7rem)] font-serif leading-[0.9] mb-12">The Digital Nerve Center.</h2>
               <p className="font-sans text-[20px] leading-[1.8] font-light opacity-80 mb-12">
                 Full-service integration of CRM, ERP, and Native Mobile Applications.
               </p>
               <div className="w-16 h-[2px] bg-gradient-to-r from-[#0056B3] to-[#00BFFF]"></div>
            </div>
            
            <div className="w-full lg:w-[60%] float-img-wrapper bg-white p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-sm flex flex-col gap-12">
               <h3 className="text-4xl font-serif border-b border-pitch/10 pb-6 hover:text-[#0056B3] transition-colors">Integrated CRM</h3>
               <h3 className="text-4xl font-serif border-b border-pitch/10 pb-6 hover:text-[#0056B3] transition-colors">ERP Ecosystem</h3>
               <h3 className="text-4xl font-serif pb-6 hover:text-[#0056B3] transition-colors">Native Mobile App</h3>
            </div>
         </div>

      </section>

      {/* 5. THE ENQUIRY PORTAL */}
      <section id="enquiry" className="relative w-full py-40 px-8 md:px-16 bg-white text-pitch shadow-[0_-30px_80px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-5xl mx-auto flex flex-col">
           
           <h2 className="text-[clamp(5rem,10vw,8rem)] font-serif leading-[0.9] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF]">
              Independent Commercial Clarity.
           </h2>
           <p className="font-sans text-[20px] leading-[1.8] font-light opacity-70 mb-20 text-pitch/60">
              The Enquiry Portal. Secure intake for global mandates.
           </p>

           <form className="flex flex-col gap-16 font-sans w-full">
              
              <input 
                 type="text" 
                 placeholder="Full Name & Current Enterprise" 
                 className="bg-transparent border-0 border-b-[1px] border-[#0056B3]/60 p-4 pl-0 text-pitch font-serif text-3xl focus:ring-0 focus:outline-none focus:border-[#0056B3] transition-colors placeholder-pitch/20 rounded-none w-full"
              />
              
              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0056B3]">Investment Profile</label>
                <div className="flex flex-wrap gap-4">
                   {["First-Time Owner", "Portfolio Investor", "Institution"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setProfile(chip)}
                         className={`px-8 py-4 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           profile === chip 
                             ? "bg-gradient-to-r from-[#0056B3] to-[#00BFFF] text-white border-transparent shadow-[0_10px_30px_-10px_rgba(0,191,255,0.6)]" 
                             : "bg-transparent text-pitch/50 border-pitch/10 hover:border-[#0056B3] hover:text-[#0056B3]"
                         }`}
                      >
                         {chip}
                      </button>
                   ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0056B3]">Target Location</label>
                <div className="flex flex-wrap gap-4">
                   {["London", "Europe", "Middle East"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setLocation(chip)}
                         className={`px-8 py-4 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           location === chip 
                             ? "bg-gradient-to-r from-[#0056B3] to-[#00BFFF] text-white border-transparent shadow-[0_10px_30px_-10px_rgba(0,191,255,0.6)]" 
                             : "bg-transparent text-pitch/50 border-pitch/10 hover:border-[#0056B3] hover:text-[#0056B3]"
                         }`}
                      >
                         {chip}
                      </button>
                   ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-[#0056B3]">Project Scope</label>
                <div className="flex flex-wrap gap-4">
                   {["Turnkey Build", "Strategy Review", "Digital Infrastructure"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setScope(chip)}
                         className={`px-8 py-4 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           scope === chip 
                             ? "bg-gradient-to-r from-[#0056B3] to-[#00BFFF] text-white border-transparent shadow-[0_10px_30px_-10px_rgba(0,191,255,0.6)]" 
                             : "bg-transparent text-pitch/50 border-pitch/10 hover:border-[#0056B3] hover:text-[#0056B3]"
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
                 className="bg-transparent border-0 border-b-[1px] border-[#0056B3]/60 p-4 pl-0 text-pitch font-sans text-xl font-light focus:ring-0 focus:outline-none focus:border-[#0056B3] transition-colors placeholder-pitch/20 rounded-none w-full mt-4 resize-none"
              />

              <button type="submit" className="bg-pitch text-white px-12 py-6 rounded-none text-[12px] tracking-[0.3em] uppercase font-bold shadow-2xl hover:-translate-y-2 hover:bg-[#0056B3] transition-all duration-500 w-max mt-8 relative overflow-hidden">
                Submit Mandate
              </button>

           </form>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER (Pitch Black) */}
      <footer className="w-full bg-pitch text-white border-t-[4px] border-[#0056B3] relative z-30 pt-16">
        <div className="marquee-container py-12 uppercase tracking-[0.3em] font-sans text-[16px] md:text-xl">
           <div className="marquee-content flex gap-8 whitespace-nowrap items-center font-bold text-[#0056B3]">
              <span>LONDON</span><span>•</span>
              <span>PARIS</span><span>•</span>
              <span>MILAN</span><span>•</span>
              <span>DUBAI</span><span>•</span>
              <span>RIYADH</span><span>•</span>
              <span className="font-serif italic font-bold">50 YEARS OF SOVEREIGNTY</span><span>•</span>

              <span>LONDON</span><span>•</span>
              <span>PARIS</span><span>•</span>
              <span>MILAN</span><span>•</span>
              <span>DUBAI</span><span>•</span>
              <span>RIYADH</span><span>•</span>
              <span className="font-serif italic font-bold">50 YEARS OF SOVEREIGNTY</span><span>•</span>
              
              <span>LONDON</span><span>•</span>
              <span>PARIS</span><span>•</span>
              <span>MILAN</span><span>•</span>
              <span>DUBAI</span><span>•</span>
              <span>RIYADH</span><span>•</span>
              <span className="font-serif italic font-bold">50 YEARS OF SOVEREIGNTY</span><span>•</span>
           </div>
        </div>
      </footer>

    </div>
  );
}
