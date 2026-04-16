"use client";

import { useRef, useEffect } from "react";
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
  const horizontalRef = useRef<HTMLDivElement>(null);
  const turnkeyWrappers = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. HERO TEXT REVEAL
    gsap.to(".split-word", {
      y: "0%",
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });

    // 2. PARALLAX IMAGERY (General rule for all parallax targets)
    const parallaxImages = gsap.utils.toArray(".parallax-img") as HTMLElement[];
    parallaxImages.forEach((img) => {
      gsap.to(img, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    // 3. SECTION 2 CLIP-PATH EXPANSION
    gsap.fromTo(".manifesto-img-wrapper", 
      { clipPath: "polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%)" },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#manifesto",
          start: "top center",
          end: "center center",
          scrub: true,
        }
      }
    );

    // 4. HORIZONTAL SCROLL (Section 3: Turnkey)
    const sections = gsap.utils.toArray(".turnkey-panel") as HTMLElement[];
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + horizontalRef.current?.offsetWidth
      }
    });

    // 5. DRAW SVG (Digital Atelier)
    const svgLines = gsap.utils.toArray(".draw-svg-path") as SVGPathElement[];
    svgLines.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      
      {/* GLOBAL HEADER: SVG Anchor (mix-blend-difference handles the strict inversion) */}
      <header className="fixed top-0 left-0 w-full z-50 p-8 mix-blend-difference text-white pointer-events-none flex justify-between items-start">
        <a href="/" className="pointer-events-auto">
          <svg viewBox="0 0 100 80" className="w-16 h-auto" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 28,0 25,80" fill="white" />
              <polygon points="28,0 50,40 25,80" fill="rgba(255,255,255,0.7)" />
              <polygon points="70,0 50,40 75,80" fill="rgba(255,255,255,0.4)" />
              <polygon points="70,0 100,0 75,80" fill="rgba(255,255,255,0.1)" />
          </svg>
        </a>
        <a href="#enquiry" className="pointer-events-auto font-mono text-[9px] uppercase tracking-[0.3em] font-bold border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors rounded-none">
          Initiate Advisory
        </a>
      </header>

      {/* 1. HERO: THE OPENING VOID */}
      <section className="relative w-full h-screen bg-pitch text-white flex flex-col justify-end pt-32 px-8 md:px-16 pb-16 overflow-hidden">
        
        {/* Full-bleed subtle background portrait */}
        <div className="absolute inset-0 z-0">
           <img 
              src="/Images/marc_editorial.png" 
              alt="Marc Webster Seated"
              className="w-full h-[120%] -top-[10%] object-cover grayscale contrast-125 opacity-40 parallax-img" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-pitch via-transparent to-pitch/50"></div>
        </div>

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
           <div className="col-span-1 md:col-span-8">
              <h1 className="text-title font-serif leading-[0.9]">
                 <SplitTextWordHelper text="Passion starts the movement. Strategy sustains the legacy." />
              </h1>
           </div>
           
           <div className="col-span-1 md:col-span-4 flex flex-col gap-8 pb-4">
             <div className="w-16 h-px bg-white/30"></div>
             <p className="font-sans text-[18px] leading-[1.8] tracking-[0.05em] text-white/80">
               Fifty years of operational mastery. From the established avenues of London and Paris to the emerging skylines of Dubai and Riyadh, we architect salon enterprises that outlast the trends. We don't just open doors; we ensure they never close.
             </p>
           </div>
        </div>
      </section>

      {/* 2. THE PRINCIPAL'S PERSPECTIVE (Bone White) */}
      <section id="manifesto" className="relative w-full min-h-screen bg-bone text-pitch py-40 px-8 md:px-16 flex flex-col items-center border-b border-pitch/10">
        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest opacity-40 mb-8 border-b border-pitch/10 pb-4 w-max">The Narrative</span>
              <h2 className="text-heading font-serif leading-[0.9] mb-12">The Principal's Perspective.</h2>
              <p className="font-sans text-[18px] leading-[1.8] tracking-[0.05em] opacity-80 max-w-lg mb-12">
                 Marc Webster understands creative ambition, but he understands structural weakness even better. After five decades at the helm of international salon operations, his role is to inform your decisions before they become expensive mistakes. This is the elimination of risk through measured judgement and clear numbers.
              </p>
              <h3 className="font-serif text-3xl italic opacity-90 max-w-sm">"Fifty years of operational mastery from London to Dubai."</h3>
            </div>

            <div className="w-full aspect-[3/4] relative overflow-hidden manifesto-img-wrapper">
               <img 
                 src="/Images/WhatsApp%20Image%202026-03-25%20at%2016.15.50%20(1).jpeg" 
                 alt="Marc Webster Standing"
                 className="w-full h-[120%] -top-[10%] object-cover grayscale contrast-[1.4] object-top parallax-img" 
               />
               {/* Heavy grain overlay specific to this image as requested */}
               <div className="absolute inset-0 bg-transparent mix-blend-overlay opacity-30 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"2\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }}></div>
            </div>

        </div>
      </section>

      {/* 3. THE TURNKEY MANDATE (Pitch Black + Horizontal) */}
      <section className="relative w-full h-screen bg-pitch text-white overflow-hidden" ref={horizontalRef}>
        
        {/* Absolute Left Anchor Background Text */}
        <div className="absolute left-8 md:left-16 top-32 z-10">
           <h2 className="text-heading font-serif leading-[0.9] text-white/20 whitespace-nowrap">Total Operational<br/>Sovereignty.</h2>
        </div>

        <div className="h-full w-[300vw] flex" ref={turnkeyWrappers}>
           
           {/* Intro Panel */}
           <div className="turnkey-panel w-screen h-full flex flex-col justify-end pb-32 px-8 md:px-16 pt-64 relative">
             <div className="max-w-2xl bg-pitch/80 backdrop-blur-sm p-8 border-l border-white/20">
               <span className="font-mono text-xs uppercase tracking-widest opacity-40 mb-4 block">The Lifecycle</span>
               <p className="font-sans text-[24px] leading-[1.8] opacity-90">
                 For the investor who demands a finished, high-performance asset. We provide a full turnkey solution for first-time owners and international backers.
               </p>
             </div>
           </div>

           {/* Phase 01 */}
           <div className="turnkey-panel w-screen h-full flex items-center justify-center relative border-l border-white/10">
             <div className="max-w-xl text-center">
               <span className="font-mono text-sm uppercase tracking-[0.3em] opacity-40 mb-8 block">Phase 01</span>
               <h3 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-8">Concept &amp; Curation.</h3>
               <p className="font-sans text-[18px] leading-[1.8] opacity-70">
                 Sourcing the soul of the brand and the physical real estate in premium global territories.
               </p>
             </div>
           </div>

           {/* Phase 02 */}
           <div className="turnkey-panel w-screen h-full flex items-center justify-center relative border-l border-white/10">
             <div className="max-w-xl text-center">
               <span className="font-mono text-sm uppercase tracking-[0.3em] opacity-40 mb-8 block">Phase 02</span>
               <h3 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-8">Structural Engineering.</h3>
               <p className="font-sans text-[18px] leading-[1.8] opacity-70">
                 Defining wage-to-revenue ratios and clinical labour sustainability models.
               </p>
             </div>
           </div>

           {/* Phase 03 */}
           <div className="turnkey-panel w-screen h-full flex items-center justify-center relative border-l border-white/10">
             <div className="max-w-xl text-center">
               <span className="font-mono text-sm uppercase tracking-[0.3em] opacity-40 mb-8 block">Phase 03</span>
               <h3 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-8">The Digital Launch.</h3>
               <p className="font-sans text-[18px] leading-[1.8] opacity-70">
                 Deploying the technical atelier—your integrated operational nervous system.
               </p>
             </div>
           </div>

        </div>
      </section>

      {/* 4. THE STRATEGIC AUDIT (Bone White + Hover Grid) */}
      <section className="relative w-full min-h-screen bg-bone text-pitch py-40 px-8 md:px-16">
         
         <div className="text-center mb-32 max-w-4xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest opacity-40 mb-8 block border-b border-pitch/10 pb-4 max-w-xs mx-auto">Assessment</span>
            <h2 className="text-heading font-serif leading-[0.9]">The Preventative Commercial Audit.</h2>
         </div>

         {/* Asymmetric Hover Grid */}
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-24 group/grid relative">
            
            <div className="col-span-1 md:col-span-5 flex flex-col gap-6 py-8 border-t border-pitch/20 group relative overflow-hidden transition-colors hover:bg-white hover:z-20 p-8 hover:-mt-8 hover:-ml-8 hover:-mr-8">
               <h3 className="text-3xl font-serif">Break-Even Accuracy</h3>
               <p className="font-sans text-[18px] leading-[1.8] opacity-70">Granular analysis of chair-hour profitability to find the precise moment of margin.</p>
               {/* Hover B&W Graphic logic pseudo-simulated by CSS visibility */}
               <div className="absolute inset-0 bg-pitch opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
            </div>
            
            <div className="col-span-1 md:col-span-7 flex flex-col gap-6 py-8 border-t border-pitch/20 group relative overflow-hidden transition-colors hover:bg-white hover:z-20 p-8 hover:-mt-8 hover:-ml-8 hover:-mr-8 md:mt-32">
               <h3 className="text-3xl font-serif">Lease Liability</h3>
               <p className="font-sans text-[18px] leading-[1.8] opacity-70">Strategic auditing of rental exposure and escalations in prime footprints.</p>
            </div>

            <div className="col-span-1 md:col-span-6 flex flex-col gap-6 py-8 border-t border-pitch/20 group relative overflow-hidden transition-colors hover:bg-white hover:z-20 p-8 hover:-mt-8 hover:-ml-8 hover:-mr-8">
               <h3 className="text-3xl font-serif">Cash Flow Resilience</h3>
               <p className="font-sans text-[18px] leading-[1.8] opacity-70">Stress-testing liquidity across peak and trough seasons to maintain investor confidence.</p>
            </div>

            <div className="col-span-1 md:col-span-6 flex flex-col gap-6 py-8 border-t border-pitch/20 group relative overflow-hidden transition-colors hover:bg-white hover:z-20 p-8 hover:-mt-8 hover:-ml-8 hover:-mr-8">
               <h3 className="text-3xl font-serif">Structural Viability</h3>
               <p className="font-sans text-[18px] leading-[1.8] opacity-70">Moving from a fragile creative collective to a stable commercial asset.</p>
            </div>

         </div>

      </section>

      {/* 5. THE DIGITAL NERVE CENTER (Pitch Black + DrawSVG Custom logic) */}
      <section className="relative w-full py-40 px-8 md:px-16 bg-pitch text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          <div className="col-span-1 lg:col-span-5">
             <span className="font-mono text-xs uppercase tracking-widest opacity-40 mb-8 block border-b border-white/10 pb-4">Infrastructure Suite</span>
             <h2 className="text-heading font-serif leading-[0.9] mb-12">The Digital Nerve Center.</h2>
          </div>

          <div className="col-span-1 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 gap-y-24">
             {/* Box 1 */}
             <div className="flex flex-col gap-6">
                <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-70">
                   <path className="draw-svg-path stroke-white" fill="none" strokeWidth="2" strokeLinecap="square" d="M10,90 L10,10 L90,10 L90,90 Z M10,30 L90,30 M40,90 L40,30" />
                </svg>
                <h3 className="text-2xl font-serif mt-4">Integrated CRM &amp; ERP</h3>
                <p className="font-sans text-[16px] leading-[1.8] opacity-60">Centralized data for absolute margin control.</p>
             </div>
             
             {/* Box 2 */}
             <div className="flex flex-col gap-6">
                <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-70">
                   <path className="draw-svg-path stroke-white" fill="none" strokeWidth="2" strokeLinecap="square" d="M10,90 L30,50 L50,70 L90,10 M70,10 L90,10 L90,30" />
                </svg>
                <h3 className="text-2xl font-serif mt-4">Revenue Capture Engine</h3>
                <p className="font-sans text-[16px] leading-[1.8] opacity-60">High-performance booking systems optimized for maximum yield.</p>
             </div>

             {/* Box 3 */}
             <div className="flex flex-col gap-6">
                <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-70">
                   <path className="draw-svg-path stroke-white" fill="none" strokeWidth="2" strokeLinecap="square" d="M30,10 L70,10 C75,10 80,15 80,20 L80,80 C80,85 75,90 70,90 L30,90 C25,90 20,85 20,80 L20,20 C20,15 25,10 30,10 Z M50,80 A5,5 0 1,1 50.1,80 Z" />
                </svg>
                <h3 className="text-2xl font-serif mt-4">Native Mobile Application</h3>
                <p className="font-sans text-[16px] leading-[1.8] opacity-60">Direct-to-consumer access for retention and brand loyalty.</p>
             </div>

             {/* Box 4 */}
             <div className="flex flex-col gap-6">
                <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-70">
                   <path className="draw-svg-path stroke-white" fill="none" strokeWidth="2" strokeLinecap="square" d="M10,20 L30,20 L40,70 L90,70 M40,70 L30,40 L90,40 M45,85 A5,5 0 1,1 45.1,85 M85,85 A5,5 0 1,1 85.1,85" />
                </svg>
                <h3 className="text-2xl font-serif mt-4">E-commerce Backbone</h3>
                <p className="font-sans text-[16px] leading-[1.8] opacity-60">Diversifying revenue through high-margin retail and payment automations.</p>
             </div>
          </div>

        </div>
      </section>

      {/* 6 & 7. INVESTORS & IN-DEPTH INTAKE (Bone White) */}
      <section id="enquiry" className="relative w-full py-40 px-8 md:px-16 bg-bone text-pitch shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
           
           {/* Section 6: Investors Core */}
           <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest opacity-40 mb-8 block border-b border-pitch/10 pb-4">Investors</span>
              <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-12">Independent Commercial Clarity.</h2>
              <p className="font-sans text-[18px] leading-[1.8] opacity-80 mb-16">
                 Confidential due diligence for providers of capital. We provide the realistic operating assumptions, risk isolation, and ongoing oversight required for institutional-grade salon investments.
              </p>
           </div>
           
           {/* Section 7: Enquiry Portal Form */}
           <div className="flex flex-col border-t border-pitch/20 pt-12 md:pt-0 md:border-none">
              <h2 className="text-[clamp(3.5rem,6vw,5rem)] font-serif leading-[0.9] mb-12">The Enquiry Portal.</h2>
              
              <form className="flex flex-col gap-12 font-sans w-full">
                 <input type="text" placeholder="Full Name & Current Enterprise" className="bg-transparent border-0 border-b border-pitch/20 p-4 pl-0 text-pitch font-serif text-2xl focus:ring-0 focus:outline-none focus:border-pitch transition-colors placeholder-pitch/30 rounded-none w-full"/>
                 
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Primary Location</label>
                   <select className="bg-transparent border-0 border-b border-pitch/20 p-4 pl-0 text-pitch font-serif text-2xl focus:ring-0 focus:outline-none focus:border-pitch transition-colors rounded-none appearance-none cursor-pointer">
                      <option value="none" disabled selected>Select Location...</option>
                      <option value="london">London</option>
                      <option value="europe">Europe</option>
                      <option value="middle-east">Middle East</option>
                   </select>
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Investment Profile</label>
                   <select className="bg-transparent border-0 border-b border-pitch/20 p-4 pl-0 text-pitch font-serif text-2xl focus:ring-0 focus:outline-none focus:border-pitch transition-colors rounded-none appearance-none cursor-pointer">
                      <option value="none" disabled selected>Select Profile...</option>
                      <option value="first">First-Time Owner</option>
                      <option value="portfolio">Portfolio Investor</option>
                      <option value="institution">Institution</option>
                   </select>
                 </div>

                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Project Scope</label>
                   <select className="bg-transparent border-0 border-b border-pitch/20 p-4 pl-0 text-pitch font-serif text-2xl focus:ring-0 focus:outline-none focus:border-pitch transition-colors rounded-none appearance-none cursor-pointer">
                      <option value="none" disabled selected>Select Scope...</option>
                      <option value="turnkey">Turnkey Build</option>
                      <option value="strategy">Strategy Review</option>
                      <option value="digital">Digital Infrastructure</option>
                   </select>
                 </div>

                 <input type="text" placeholder="Confidential Message Detail" className="bg-transparent border-0 border-b border-pitch/20 p-4 pl-0 text-pitch font-sans text-[18px] focus:ring-0 focus:outline-none focus:border-pitch transition-colors placeholder-pitch/30 rounded-none w-full mt-4"/>

                 <button type="submit" className="bg-pitch text-white px-12 py-6 text-[10px] tracking-[0.3em] uppercase font-bold border border-pitch hover:bg-transparent hover:text-pitch transition-colors duration-300 w-max mt-8 mt-12">
                   Submit Mandate
                 </button>
              </form>
           </div>

        </div>
      </section>

      {/* 8. GLOBAL FOOTER TICKER (Pitch Black) */}
      <footer className="w-full bg-pitch border-t border-white/10">
        <div className="marquee-container text-white py-12 uppercase tracking-[0.3em] font-sans text-[12px] md:text-sm">
           <div className="marquee-content flex gap-8 whitespace-nowrap items-center">
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

              <span>LONDON</span><span>•</span>
              <span>PARIS</span><span>•</span>
              <span>MILAN</span><span>•</span>
              <span>DUBAI</span><span>•</span>
              <span>RIYADH</span><span>•</span>
              <span className="font-serif italic font-bold">50 YEARS OF SOVEREIGNTY</span>
           </div>
        </div>
      </footer>

    </div>
  );
}
