"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import EcosystemStack from "../components/EcosystemStack";
import Navigation from "../components/Navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// SplitTextWordHelper for robust masking
const SplitTextWordHelper = ({ text }: { text: string }) => {
  return (
    <span aria-label={text} className="inline-block relative">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em] align-top pb-[0.1em]">
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle"|"success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 4000); // reset visual state
    }, 1500);
  };

  useGSAP(() => {
    // 1. HERO STAGGERED REVEAL
    gsap.to(".split-word", {
      y: "0%",
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out",
      delay: 0.2
    });

    // Sub-header staggered mask reveals
    const subHeaders = gsap.utils.toArray(".sub-header-mask") as HTMLElement[];
    subHeaders.forEach((header) => {
      gsap.to(header.querySelectorAll(".split-word"), {
        y: "0%",
        duration: 1.5,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
        }
      });
    });

    // 2. PARALLAX FLOATING IMAGES & SMOOTH IN-FADES
    const floatImages = gsap.utils.toArray(".float-img-wrapper") as HTMLElement[];
    floatImages.forEach((img) => {
      gsap.fromTo(img, 
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
             trigger: img,
             start: "top 85%",
          }
        }
      );
      
      gsap.to(img.querySelector("img"), {
        yPercent: 12,
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
        LOGOMARK
      */}
      <header className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-start pointer-events-none drop-shadow-[0_0_20px_rgba(0,191,255,0.2)]">
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
        <div className="pointer-events-auto flex items-center pr-20 md:pr-24">
           <a href="#enquiry" className="font-mono text-xs uppercase tracking-[0.2em] px-6 py-3 border border-white/20 text-white hover:bg-white hover:text-pitch transition-colors mix-blend-difference hidden md:block">
              Book a Strategy Call
           </a>
        </div>
      </header>

      <Navigation />

      {/* 
        1. THE GLOBAL STATEMENT (Pitch Black - Elevated Legibility) 
      */}
      <div className="relative">
          <section className="relative w-full min-h-[140vh] bg-pitch text-white flex flex-col pt-56 px-8 md:px-24 overflow-hidden z-10">
            
            {/* The Atmosphere (Controlled size, strong shadow, deep Z) */}
            <div className="absolute right-0 md:right-16 top-64 w-[85vw] md:w-[35vw] h-[70vh] md:h-[90vh] float-img-wrapper z-0">
               <div className="absolute inset-0 bg-[#0056B3] blur-[120px] opacity-20 -z-10 scale-125 translate-y-12"></div>
               {/* Image Cropper Wrapper */}
               <div className="w-full h-full relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] rounded-sm">
                 <img 
                    src="/Images/marc_editorial.png" 
                    alt="Marc Webster Seated"
                    className="w-full h-[120%] -top-[10%] mb-[15vw] absolute object-cover grayscale contrast-[1.3] brightness-90 scale-[1.06]" 
                 />
               </div>
            </div>

            {/* The Law (Highest Z, Mix Blend for overlap) */}
            <div className="relative z-30 w-full flex flex-col mix-blend-difference pointer-events-none">
               <h1 className="text-[clamp(4.5rem,10vw,12rem)] font-serif leading-[0.9] max-w-6xl pointer-events-auto selection:bg-white selection:text-black">
                  <SplitTextWordHelper text="Passion opens salons. Strategy keeps them open." />
               </h1>
               
               {/* Anchored Sub-copy - structured cleanly beneath the header */}
               <div className="mt-16 md:mt-24 w-full md:w-[45vw] flex flex-col gap-8 md:pl-2 pointer-events-auto">
                 <p className="font-sans text-[26px] leading-[1.6] font-light text-white/90">
                   Independent commercial oversight for the modern salon era. We translate five decades of industry legacy into the structural discipline required for 2026.
                 </p>
                 <div className="flex gap-4 items-center">
                    <a href="#enquiry" className="font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 bg-white text-pitch hover:bg-white/80 transition-colors">
                       Book a Strategy Call
                    </a>
                    <a href="#audit" className="font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition-colors">
                       Explore the Audit
                    </a>
                 </div>
               </div>
            </div>

            <div className="relative mt-auto mb-12 w-full md:pl-[5vw] z-10 pointer-events-none opacity-20 pt-32 hidden md:block">
               <h2 className="text-[clamp(10rem,20vw,26rem)] font-serif leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF]">
                 50<br/>YEARS
               </h2>
            </div>
            
          </section>

          {/* 
            2. THE COMMERCIAL REALITY
            Concept: Asymmetric Content Block for "The Friction of Growth"
          */}
          <section id="reality" className="relative w-full bg-bone text-pitch py-40 z-20 flex flex-col md:flex-row gap-16 px-8 md:px-24">
             <div className="w-full md:w-[45%] flex flex-col md:pt-16">
                 <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-serif leading-[0.9] mb-12 sub-header-mask">
                    <SplitTextWordHelper text="The Friction of Growth." />
                 </h2>
                 <p className="font-sans text-[22px] leading-[1.8] font-light opacity-[0.85] max-w-xl text-pitch">
                    Opening a salon requires belief. Sustaining one requires discipline. In an era where labor costs climb toward 50% and the "freelance shift" disrupts traditional loyalty, creative brilliance is no longer a safety net.
                 </p>
             </div>
             
             <div className="w-full md:w-[50%] flex flex-col gap-16 md:pt-40 md:pl-16 md:border-l border-pitch/10 max-md:mt-16">
                 <div>
                    <h3 className="text-3xl font-serif mb-4 text-pitch">The Wage Trap</h3>
                    <p className="font-sans text-[18px] opacity-70 font-light">Navigating the £12.71+ National Living Wage while maintaining profit.</p>
                 </div>
                 <div>
                    <h3 className="text-3xl font-serif mb-4 text-pitch">The Hybrid Shift</h3>
                    <p className="font-sans text-[18px] opacity-70 font-light">Balancing stylist autonomy with business security.</p>
                 </div>
                 <div>
                    <h3 className="text-3xl font-serif mb-4 text-pitch">Lease Exposure</h3>
                    <p className="font-sans text-[18px] opacity-70 font-light">Protecting capital from aggressive "Schedule of Condition" clauses.</p>
                 </div>
                 <div>
                    <h3 className="text-3xl font-serif mb-4 text-pitch">System Over Personality</h3>
                    <p className="font-sans text-[18px] opacity-70 font-light">Moving from individual-led to system-driven operations.</p>
                 </div>
             </div>
          </section>
      </div>

      {/* 3. THE TURNKEY MANDATE */}
      <section id="mandate" className="relative w-full py-56 bg-pitch text-white overflow-hidden px-8 md:px-24 z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-pitch via-pitch to-pitch/80 z-0 pointer-events-none"></div>

        <div className="max-w-[90vw] mx-auto mb-40 flex flex-col items-center text-center relative z-20">
            <h2 className="text-[clamp(4.5rem,10vw,8rem)] font-serif leading-[0.9] mb-12 sub-header-mask min-h-[1.5em] pb-4">
              <SplitTextWordHelper text="Total Operational Sovereignty." />
            </h2>
            <div className="w-24 h-[1px] bg-white opacity-40 mb-12"></div>
            <p className="font-sans text-[22px] leading-[1.8] font-light text-white/90 max-w-3xl">
              For investors and founders at the point of inception. We manage the full turnkey lifecycle to ensure your vision opens as a high-performance asset.
            </p>
        </div>

        {/* Aligned Grid Layout */}
        <div className="max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 w-full">
           
           <div className="relative w-full bg-black/60 backdrop-blur-md p-12 lg:p-16 float-img-wrapper shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 rounded-sm flex flex-col justify-start">
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-8 block">Phase 01</span>
             <h3 className="text-4xl font-serif leading-[1.1] mb-6">Concept &amp; Curation</h3>
             <p className="font-sans opacity-70 text-lg font-light leading-relaxed">Sourcing prime real estate and defining the brand’s creative DNA.</p>
           </div>

           <div className="relative w-full bg-black/60 backdrop-blur-md p-12 lg:p-16 float-img-wrapper shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 rounded-sm flex flex-col justify-start">
             {/* 10% Radial Glow applied to cards for subtle depth */}
             <div className="absolute inset-0 bg-[#0056B3] blur-[150px] opacity-[0.05] -z-10 rounded-full scale-150"></div>
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-8 block">Phase 02</span>
             <h3 className="text-4xl font-serif leading-[1.1] mb-6">Structural Engineering</h3>
             <p className="font-sans opacity-70 text-lg font-light leading-relaxed">Defining wage-to-revenue ratios and clinical labour sustainability models.</p>
           </div>

           <div className="relative w-full bg-black/60 backdrop-blur-md p-12 lg:p-16 float-img-wrapper shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 rounded-sm flex flex-col justify-start">
             <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-8 block">Phase 03</span>
             <h3 className="text-4xl font-serif leading-[1.1] mb-6">The Digital Launch</h3>
             <p className="font-sans opacity-70 text-lg font-light leading-relaxed">Deploying the full A-Z salon operating system.</p>
           </div>

        </div>
      </section>

      {/* 4. THE STRATEGIC AUDIT & DIGITAL NERVE CENTER */}
      <section id="audit" className="relative w-full py-40 px-8 md:px-24 bg-bone text-pitch z-10 font-light">
         
         {/* Preventative Commercial Audit */}
         <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row gap-24 mb-56 pt-24 border-t border-pitch/10">
            <div className="w-full md:w-[45%] flex flex-col">
               <h2 className="text-[clamp(4.5rem,8vw,7rem)] font-serif leading-[0.9] mb-12 sub-header-mask pb-4 min-h-[4em]">
                 <SplitTextWordHelper text="The Preventative Commercial Audit." />
               </h2>
               <div className="w-16 h-[2px] bg-pitch mb-8"></div>
               <p className="font-sans text-[22px] leading-[1.8] opacity-90 max-w-md">
                 For established businesses seeking commercial clarity. We strip away emotional bias to isolate the variables silently eroding your profitability.
               </p>
            </div>
            
            <div className="w-full md:w-[50%] ml-auto flex flex-col gap-12 float-img-wrapper mt-auto">
               <div className="border-b border-pitch/20 pb-8 group cursor-default">
                 <h3 className="text-3xl font-serif mb-4 group-hover:text-[#0056B3] transition-colors">Financial Resilience</h3>
                 <p className="font-sans text-[18px] opacity-70 font-light">Break-even accuracy and 2026 tax alignment.</p>
               </div>
               <div className="border-b border-pitch/20 pb-8 group cursor-default">
                 <h3 className="text-3xl font-serif mb-4 group-hover:text-[#0056B3] transition-colors">Structural Viability</h3>
                 <p className="font-sans text-[18px] opacity-70 font-light">Sustainable commission tiers and employment modeling.</p>
               </div>
               <div className="border-b border-pitch/20 pb-8 group cursor-default">
                 <h3 className="text-3xl font-serif mb-4 group-hover:text-[#0056B3] transition-colors">Liability Shield</h3>
                 <p className="font-sans text-[18px] opacity-70 font-light">Lease break-choice reviews and operational risk assessment.</p>
               </div>
               <div className="border-b border-pitch/20 pb-8 group cursor-default">
                 <h3 className="text-3xl font-serif mb-4 group-hover:text-[#0056B3] transition-colors">The Output</h3>
                 <p className="font-sans text-[18px] opacity-70 font-light">A comprehensive Strategy Report with defined financial benchmarks.</p>
               </div>
            </div>
         </div>
      </section>

      {/* NEW 3D STACK SECTION (Pitch Black to highlight the isometric lighting) */}
      <section id="ecosystem" className="relative w-full overflow-hidden bg-pitch text-white py-40 z-10 border-t border-white/10">
         
         <div className="max-w-[90vw] mx-auto flex flex-col items-center text-center pb-24">
            <span className="font-mono text-sm uppercase font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF] mb-6 block drop-shadow-[0_0_10px_rgba(0,191,255,0.4)]">Digital Infrastructure</span>
            <h2 className="text-[clamp(4.5rem,10vw,7rem)] font-serif leading-[0.9] mb-12 sub-header-mask text-white">
              <SplitTextWordHelper text="The Digital Nerve Center." />
            </h2>
            <div className="w-24 h-[1px] bg-white opacity-40 mb-8 mx-auto"></div>
            <p className="font-sans text-[22px] leading-[1.8] font-light max-w-2xl text-white/80">
              We engineer the complete operational brain of the modern salon. A bespoke, full turn-key ecosystem designed specifically for high-volume, high-margin management.
            </p>
         </div>

         <div className="w-full pb-32">
            <EcosystemStack />
         </div>
      </section>

      {/* 5. THE ENQUIRY PORTAL (Extreme Minimalist White) */}
      <section id="enquiry" className="relative w-full pt-40 pb-56 px-8 md:px-24 bg-white text-pitch z-20">
        <div className="max-w-5xl mx-auto flex flex-col">
           
           <h2 className="text-[clamp(5rem,10vw,8rem)] font-serif leading-[0.9] mb-8 sub-header-mask min-h-[3em] md:min-h-[2em] pb-4">
              <SplitTextWordHelper text="Independent Oversight for Salon Capital." />
           </h2>
           <p className="font-sans text-[22px] leading-[1.8] font-light opacity-[0.65] mb-24 max-w-2xl">
              We act as your Commercial Concierge, ensuring break-even accuracy and asset protection for private and family-backed ventures.
           </p>

           <form onSubmit={handleSubmit} className="flex flex-col gap-24 font-sans w-full max-w-4xl">
              
              <input 
                 type="text" 
                 placeholder="Full Name & Current Enterprise" 
                 className="bg-transparent border-0 border-b-[1px] border-[#0056B3]/30 p-6 pl-0 text-pitch font-serif text-4xl focus:ring-0 focus:outline-none focus:border-[#0056B3] transition-all placeholder-pitch/10 rounded-none w-full"
              />
              
              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-pitch/40 mb-2">Investment Profile</label>
                <div className="flex flex-wrap gap-4">
                   {["First-Time Owner", "Investor", "Institution"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setProfile(chip)}
                         className={`px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           profile === chip 
                             ? "bg-gradient-to-r from-[#0056B3] to-[#00BFFF] text-white border-transparent shadow-[0_10px_20px_-5px_rgba(0,191,255,0.4)]" 
                             : "bg-transparent text-pitch/40 border-pitch/10 hover:border-[#0056B3]/40"
                         }`}
                      >
                         {chip}
                      </button>
                   ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <label className="text-[10px] uppercase font-bold tracking-widest text-pitch/40 mb-2">Project Scope</label>
                <div className="flex flex-wrap gap-4">
                   {["Turnkey", "Audit", "Infrastructure"].map((chip) => (
                      <button 
                         key={chip}
                         type="button"
                         onClick={() => setScope(chip)}
                         className={`px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                           scope === chip 
                             ? "bg-gradient-to-r from-[#0056B3] to-[#00BFFF] text-white border-transparent shadow-[0_10px_20px_-5px_rgba(0,191,255,0.4)]" 
                             : "bg-transparent text-pitch/40 border-pitch/10 hover:border-[#0056B3]/40"
                         }`}
                      >
                         {chip}
                      </button>
                   ))}
                </div>
              </div>

              <textarea 
                 rows={2}
                 placeholder="Details..." 
                 className="bg-transparent border-0 border-b-[1px] border-[#0056B3]/30 p-6 pl-0 text-pitch font-sans text-2xl font-light focus:ring-0 focus:outline-none focus:border-[#0056B3] transition-all placeholder-pitch/10 rounded-none w-full mt-4 resize-none"
              />

              <button 
                type="submit" 
                disabled={isSubmitting || submitStatus === "success"}
                className={`px-16 py-6 rounded-none text-[12px] tracking-[0.3em] uppercase font-bold shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-700 w-max mt-8 relative overflow-hidden ${
                  submitStatus === "success" 
                    ? "bg-[#0056B3] text-white cursor-default"
                    : isSubmitting
                    ? "bg-pitch/20 text-pitch/50 cursor-wait"
                    : "bg-pitch text-white hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#0056B3] hover:to-[#00BFFF] hover:shadow-[0_40px_80px_-15px_rgba(0,86,179,0.7)]"
                }`}
              >
                {submitStatus === "success" ? "Mandate Received" : isSubmitting ? "Processing..." : "Submit Mandate"}
              </button>

           </form>
        </div>
      </section>

      {/* BRANDING & IDENTITY */}
      <section className="relative w-full bg-bone text-pitch py-40 border-t border-pitch/10 z-20 px-8 md:px-24 flex flex-col md:flex-row items-center gap-16 float-img-wrapper overflow-hidden">
          <div className="w-full md:w-[50%] flex flex-col shrink-0">
             <h2 className="text-[clamp(4.5rem,8vw,7rem)] font-serif leading-[0.9] mb-8 sub-header-mask pb-4 min-h-[3em] md:min-h-auto">
                <SplitTextWordHelper text="Branding with Substance." />
             </h2>
             <p className="font-sans text-[22px] leading-[1.8] opacity-90 max-w-xl font-light mb-12">
                We refine your brand architecture to resonate with high-net-worth demographics and attract the top 5% of talent.
             </p>
             <div className="flex flex-col gap-4 font-mono text-xs tracking-widest text-[#0056B3] uppercase">
                <span>• Strategic Positioning</span>
                <span>• Employer Branding</span>
                <span>• Omnichannel Consistency</span>
             </div>
          </div>
          <div className="w-[85vw] md:w-[40vw] ml-auto h-[60vh] float-img-wrapper z-40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-pitch/5 relative mt-16 md:mt-0">
             <img src="/Images/WhatsApp%20Image%202026-03-25%20at%2016.15.50%20(1).jpeg" alt="Webster Branding" className="w-full h-[120%] -top-[10%] absolute object-cover grayscale contrast-[1.3] object-top" />
          </div>
      </section>

      {/* THE PRINCIPAL */}
      <section id="principal" className="relative w-full bg-pitch text-white py-40 border-t border-[#0056B3]/30 z-20 px-8 md:px-24 flex flex-col items-center text-center">
         <h2 className="text-[clamp(4.5rem,10vw,8rem)] font-serif leading-[0.9] mb-12 sub-header-mask text-center min-h-[1.5em] pb-4">
            <SplitTextWordHelper text="Five Decades. Zero Fluff." />
         </h2>
         <p className="font-sans text-[22px] leading-[1.8] font-light text-white/80 max-w-3xl mb-16">
            Marc Webster is a practitioner, not a coach. From the 1970s to the AI-driven landscape of 2026, he has navigated every economic cycle.
         </p>
         <blockquote className="font-serif text-3xl md:text-5xl leading-[1.4] max-w-5xl mx-auto italic text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF]">
            "My role is to ensure that experience informs your decisions before they become expensive."
         </blockquote>
      </section>

      {/* 6. GLOBAL FOOTER (Pitch Black with Scroll Ticker) */}
      <footer className="w-full bg-pitch text-white border-t-[1px] border-[#0056B3]/30 relative z-30 pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-32 flex flex-col items-center pointer-events-auto">
             <h3 className="font-serif text-5xl md:text-7xl mb-8 leading-[1.2]">Experience is expensive.<br/>Hindsight is free.</h3>
             <p className="font-sans text-xl opacity-70 font-light mb-12 max-w-xl mx-auto">Don't wait for a crisis to check your foundations.</p>
             <a href="#enquiry" className="font-mono text-xs tracking-[0.2em] font-bold text-pitch bg-white uppercase px-12 py-6 shadow-[0_20px_40px_-5px_rgba(255,255,255,0.2)] hover:scale-[1.03] transition-transform w-max inline-block">SECURE YOUR STRATEGY REVIEW</a>
             <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mt-16 block">Confidentiality Guaranteed for Investors and Founders.</span>
        </div>
        
        <div className="w-full flex justify-center mb-16 px-8 pointer-events-auto">
          <svg viewBox="0 0 100 80" className="w-[80px] md:w-[120px] h-auto drop-shadow-[0_0_30px_rgba(0,191,255,0.4)]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <linearGradient id="logoLeftF" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0b1338" />
                      <stop offset="100%" stopColor="#0056B3" />
                  </linearGradient>
                  <linearGradient id="logoMidLF" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0056B3" />
                      <stop offset="100%" stopColor="#00BFFF" />
                  </linearGradient>
                  <linearGradient id="logoMidRF" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0056B3" />
                      <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                  <linearGradient id="logoRightF" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00BFFF" />
                      <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
              </defs>
              <polygon points="0,0 28,0 25,80" fill="url(#logoLeftF)" />
              <polygon points="28,0 50,40 25,80" fill="url(#logoMidLF)" />
              <polygon points="70,0 50,40 75,80" fill="url(#logoMidRF)" />
              <polygon points="70,0 100,0 75,80" fill="url(#logoRightF)" />
          </svg>
        </div>
        <div className="marquee-container py-12 uppercase tracking-[0.3em] font-sans text-[16px] md:text-xl border-y border-[#0056B3]/10">
           <div className="marquee-content flex gap-8 whitespace-nowrap items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#00BFFF]">
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
