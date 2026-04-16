"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="relative w-full bg-background min-h-screen text-foreground overflow-hidden" ref={containerRef}>
      
      {/* 
        HEADER: SVG Logo Anchor
      */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference text-white pointer-events-none flex justify-between items-center px-8 py-8">
        <div className="flex items-center gap-3 pointer-events-auto">
            <motion.svg 
               style={{ rotate: logoRotate }}
               viewBox="0 0 100 80" 
               className="w-12 h-10" 
               xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="logoLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#d4d4d4" />
                    </linearGradient>
                    <linearGradient id="logoMidL" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d4d4d4" />
                        <stop offset="100%" stopColor="#a3a3a3" />
                    </linearGradient>
                    <linearGradient id="logoMidR" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a3a3a3" />
                        <stop offset="100%" stopColor="#737373" />
                    </linearGradient>
                    <linearGradient id="logoRight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#737373" />
                        <stop offset="100%" stopColor="#404040" />
                    </linearGradient>
                </defs>
                <polygon points="0,0 28,0 25,80" fill="url(#logoLeft)" />
                <polygon points="28,0 50,40 25,80" fill="url(#logoMidL)" />
                <polygon points="70,0 50,40 75,80" fill="url(#logoMidR)" />
                <polygon points="70,0 100,0 75,80" fill="url(#logoRight)" />
            </motion.svg>
            <div className="flex flex-col justify-center">
                <span className="text-[13px] font-bold tracking-[0.2em] text-white uppercase leading-[1.1] mb-[1px]">Webster</span>
                <span className="text-[6px] font-medium tracking-[0.3em] text-white/50 uppercase">Salon Advisory</span>
            </div>
        </div>

        <a href="#enquiry" className="pointer-events-auto bg-white text-black px-6 py-3 text-[10px] tracking-[0.2em] font-bold uppercase transition-colors hover:bg-black hover:text-white border border-white">
           Enquire
        </a>
      </header>

      {/* 
        1. HERO: THE GLOBAL STATEMENT
      */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center pt-24 md:pt-0 border-b border-black/10">
        
        {/* Left Side: 60% Image (Seated Portrait) */}
        <div className="w-full md:w-[60%] h-[50vh] md:h-full relative overflow-hidden border-r border-black/10 hidden md:block hover-trigger">
          <motion.img 
            style={{ y: y1 }}
            src="/Images/marc_editorial.png" 
            alt="Marc Webster Seated"
            className="absolute inset-0 w-full h-[120%] object-cover grayscale contrast-125 brightness-90 -top-[10%]" 
          />
        </div>

        {/* Right Side: 40% Text */}
        <div className="w-full md:w-[40%] h-full bg-background flex flex-col justify-center px-8 md:px-20 relative">
          
          {/* We'll re-add the image on mobile */}
          <div className="md:hidden w-full aspect-square relative overflow-hidden my-12 border border-black/10">
             <img src="/Images/marc_editorial.png" alt="Marc Webster" className="w-full h-full object-cover grayscale contrast-125 object-top" />
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-[clamp(3.5rem,7vw,6.5rem)] font-serif leading-[0.9] tracking-tighter mb-8"
          >
            Passion starts the movement. <br/> Strategy sustains the legacy.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="font-sans text-[18px] leading-[1.8] opacity-80 mb-12 max-w-sm"
          >
            Fifty years of operational mastery. From the established avenues of London and Paris to the emerging skylines of Dubai and Riyadh, we architect salon enterprises that outlast the trends. We don't just open doors; we ensure they never close.
          </motion.p>

          <motion.a 
            href="#enquiry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="bg-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold border border-black hover:bg-white hover:text-black transition-colors duration-300 w-max"
          >
            Initiate Advisory
          </motion.a>
        </div>
      </section>

      {/* 
        2. THE PRINCIPAL'S PERSPECTIVE
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex col-span-1 border-r border-black/10 h-full relative">
               <span className="sticky top-40 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap ml-4">The Narrative</span>
          </div>

          <div className="col-span-1 md:col-span-10 flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-1/2 overflow-hidden hover-trigger aspect-[4/5] relative">
               {/* Heavy film grain forced overlay */}
               <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>
               <motion.img 
                 style={{ y: y2 }}
                 src="/Images/WhatsApp%20Image%202026-03-25%20at%2016.15.50%20(1).jpeg" 
                 alt="Marc Webster Standing"
                 className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover grayscale contrast-[1.3] brightness-90" 
               />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center xl:pr-24">
              <span className="font-mono text-xs uppercase tracking-widest opacity-50 block mb-6">50 Years of Certainty</span>
              <h2 className="text-[clamp(4.5rem,7vw,7rem)] font-serif leading-[0.9] mb-12">The Principal’s Perspective.</h2>
              <p className="font-sans text-[18px] leading-[1.8] opacity-80">
                Marc Webster understands creative ambition, but he understands structural weakness even better. After five decades at the helm of international salon operations, his role is to inform your decisions before they become expensive mistakes. This is the elimination of risk through measured judgement and clear numbers.
              </p>
            </div>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        3. THE TURNKEY MANDATE: TOTAL OPERATIONAL SOVEREIGNTY
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10 bg-faint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex col-span-1 border-r border-black/10 h-full relative"></div>

          <div className="col-span-1 md:col-span-10">
            <h2 className="text-[clamp(4.5rem,8vw,8rem)] font-serif leading-[0.9] text-black tracking-tighter mb-12 max-w-5xl">Total Operational Sovereignty.</h2>
            <p className="font-sans text-[18px] leading-[1.8] opacity-80 max-w-2xl mb-24">
               For the investor who demands a finished, high-performance asset. We provide a full turnkey solution for first-time owners and international backers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black/20">
              <div className="flex flex-col relative p-12 border-b border-r border-black/20 group hover:bg-white transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase mb-6 font-bold opacity-40 group-hover:opacity-100">Phase 01</span>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-brandBlue">Concept &amp; Curation</h3>
                <p className="font-sans text-[18px] leading-[1.8] opacity-70">Sourcing the soul of the brand and the physical real estate in premium global territories.</p>
              </div>

              <div className="flex flex-col relative p-12 border-b border-r border-black/20 group hover:bg-white transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase mb-6 font-bold opacity-40 group-hover:opacity-100">Phase 02</span>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-brandBlue">Structural Engineering</h3>
                <p className="font-sans text-[18px] leading-[1.8] opacity-70">Defining wage-to-revenue ratios and clinical labour sustainability models.</p>
              </div>

              <div className="flex flex-col relative p-12 border-b border-r border-black/20 group hover:bg-white transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-widest uppercase mb-6 font-bold opacity-40 group-hover:opacity-100">Phase 03</span>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-brandBlue">The Digital Launch</h3>
                <p className="font-sans text-[18px] leading-[1.8] opacity-70">Deploying the technical atelier—your integrated operational nervous system.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        4. THE STRATEGIC AUDIT: FORENSIC CLARITY
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex col-span-1 border-r border-black/10 h-full relative">
               <span className="sticky top-40 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap ml-4">The Product</span>
          </div>

          <div className="col-span-1 md:col-span-10 flex flex-col lg:flex-row gap-20">
             <div className="w-full lg:w-5/12">
               <h2 className="text-[clamp(4.5rem,7vw,7rem)] font-serif leading-[0.9] mb-12 pr-8">The Preventative Commercial Audit.</h2>
               <p className="font-sans text-[18px] leading-[1.8] opacity-80 mb-12">
                 Opening a salon requires belief. Sustaining one requires a clinical understanding of margins. Our audit is a forensic examination of your business model.
               </p>
               <a href="#enquiry" className="inline-block bg-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold border border-black hover:bg-white hover:text-black transition-colors duration-300 w-max">
                 Book An Audit
               </a>
             </div>
             
             <div className="w-full lg:w-7/12 flex flex-col">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-black/20">
                 <div className="p-10 border-b border-r border-black/20 hover:bg-faint transition-colors duration-300">
                   <h3 className="text-2xl font-serif mb-4">Break-Even Accuracy</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Granular analysis of chair-hour profitability to find the precise moment of margin.</p>
                 </div>
                 <div className="p-10 border-b border-r border-black/20 hover:bg-faint transition-colors duration-300">
                   <h3 className="text-2xl font-serif mb-4">Lease Liability</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Strategic auditing of rental exposure and escalations in prime footprints.</p>
                 </div>
                 <div className="p-10 border-b border-r border-black/20 hover:bg-faint transition-colors duration-300">
                   <h3 className="text-2xl font-serif mb-4">Cash Flow Resilience</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Stress-testing liquidity across peak and trough seasons to maintain investor confidence.</p>
                 </div>
                 <div className="p-10 border-b border-r border-black/20 hover:bg-faint transition-colors duration-300">
                   <h3 className="text-2xl font-serif mb-4">Structural Viability</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Moving from a fragile creative collective to a stable commercial asset.</p>
                 </div>
               </div>
             </div>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        5. THE TECHNICAL ATELIER
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex col-span-1 border-r border-white/20 h-full relative">
               <span className="sticky top-40 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap ml-4">The Infrastructure</span>
          </div>

          <div className="col-span-1 md:col-span-10">
            <h2 className="text-[clamp(4.5rem,8vw,8rem)] font-serif leading-[0.9] mb-12">The Digital Nerve Center.</h2>
            <p className="font-sans text-[18px] leading-[1.8] opacity-80 max-w-2xl mb-24">
              Strategy is nothing without the tools of execution. Our website advisory division builds bespoke operational architecture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20">
               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">Integrated CRM &amp; ERP</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">Centralized data for absolute margin control.</p>
               </div>
               
               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">Revenue Capture Engine</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">High-performance booking systems optimized for maximum yield.</p>
               </div>

               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">Native Mobile Application</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">Direct-to-consumer access for retention and brand loyalty.</p>
               </div>

               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">E-commerce Backbone</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">Diversifying revenue through high-margin retail and payment automations.</p>
               </div>
            </div>
          </div>

          <div className="hidden md:block col-span-1 border-l border-white/20"></div>
        </div>
      </section>

      {/* 
        6. INVESTOR PROTOCOL
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex col-span-1 border-r border-black/10 h-full relative"></div>

          <div className="col-span-1 md:col-span-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto min-h-[30vh]">
             <h2 className="text-[clamp(4.5rem,6vw,7rem)] font-serif leading-[0.9] mb-12">Independent Commercial Clarity.</h2>
             <p className="font-sans text-[18px] leading-[1.8] opacity-80 mb-16">
               Confidential due diligence for providers of capital. We provide the realistic operating assumptions, risk isolation, and ongoing oversight required for institutional-grade salon investments.
             </p>
             <a href="#enquiry" className="bg-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold border border-black hover:bg-white hover:text-black transition-colors duration-300 w-max">
               Request Confidential Briefing
             </a>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        7. THE ENQUIRY PORTAL
      */}
      <section id="enquiry" className="relative w-full py-40 px-6 md:px-16 border-b border-black/10 bg-[#050505] text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex col-span-1 border-r border-white/10 h-full relative">
             <span className="sticky top-40 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap ml-4">The Portal</span>
          </div>

          <div className="col-span-1 md:col-span-10 max-w-4xl pt-12">
            <h2 className="text-[clamp(4.5rem,6vw,7rem)] font-serif leading-[0.9] mb-8">The Enquiry Portal.</h2>
            <p className="font-sans text-[18px] leading-[1.8] opacity-70 mb-20">
               Official intake architecture for Turnkey and Capital protocol mandates. All submissions are processed dynamically with absolute privacy.
            </p>

            <form className="flex flex-col gap-12 font-sans text-[16px]">
               {/* Full Name & Enterprise */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12">
                 <div className="flex flex-col">
                   <label className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50 mb-4 border-l border-brandBlue pl-3">Full Name</label>
                   <input type="text" placeholder="John Doe" className="bg-transparent border-none outline-none focus:ring-0 placeholder-white/20 p-0 text-white font-serif text-3xl"/>
                 </div>
                 <div className="flex flex-col">
                   <label className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50 mb-4 border-l border-brandBlue pl-3">Current Enterprise</label>
                   <input type="text" placeholder="Company Name" className="bg-transparent border-none outline-none focus:ring-0 placeholder-white/20 p-0 text-white font-serif text-3xl"/>
                 </div>
               </div>

               {/* Primary Location */}
               <div className="border-t border-white/20 pt-12">
                 <label className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50 mb-6 block border-l border-brandBlue pl-3">Primary Location</label>
                 <select className="bg-transparent border-none outline-none focus:ring-0 text-white font-serif text-3xl p-0 w-full cursor-pointer opacity-80 appearance-none">
                    <option className="bg-[#050505]" value="london">London</option>
                    <option className="bg-[#050505]" value="paris">Paris</option>
                    <option className="bg-[#050505]" value="milan">Milan</option>
                    <option className="bg-[#050505]" value="dubai">Dubai</option>
                    <option className="bg-[#050505]" value="riyadh">Riyadh</option>
                    <option className="bg-[#050505]" value="other">Other</option>
                 </select>
               </div>

               {/* Investment Profile */}
               <div className="border-t border-white/20 pt-12">
                 <label className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50 mb-6 block border-l border-brandBlue pl-3">Investment Profile</label>
                 <select className="bg-transparent border-none outline-none focus:ring-0 text-white font-serif text-3xl p-0 w-full cursor-pointer opacity-80 appearance-none">
                    <option className="bg-[#050505]" value="first">First-Time Owner</option>
                    <option className="bg-[#050505]" value="portfolio">Portfolio Investor</option>
                    <option className="bg-[#050505]" value="institution">Institution</option>
                 </select>
               </div>

               {/* Project Scope */}
               <div className="border-t border-white/20 pt-12">
                 <label className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50 mb-6 block border-l border-brandBlue pl-3">Project Scope</label>
                 <select className="bg-transparent border-none outline-none focus:ring-0 text-white font-serif text-3xl p-0 w-full cursor-pointer opacity-80 appearance-none">
                    <option className="bg-[#050505]" value="turnkey">Turnkey Build</option>
                    <option className="bg-[#050505]" value="strategy">Strategy Review</option>
                    <option className="bg-[#050505]" value="digital">Digital Infrastructure</option>
                 </select>
               </div>

               {/* Message Detail */}
               <div className="border-t border-b border-white/20 py-12">
                 <label className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-50 mb-6 block border-l border-brandBlue pl-3">Confidential Message Detail</label>
                 <textarea rows={4} placeholder="Begin typing..." className="bg-transparent border-none outline-none focus:ring-0 placeholder-white/20 p-0 text-white font-sans text-xl w-full resize-none leading-relaxed"></textarea>
               </div>

               <button type="submit" className="bg-white text-black px-12 py-6 text-[12px] tracking-[0.3em] uppercase font-bold border border-white hover:bg-transparent hover:text-white transition-colors duration-300 w-max mt-8">
                 Submit Mandate
               </button>
            </form>
          </div>

          <div className="hidden md:block col-span-1 border-l border-white/10"></div>
        </div>
      </section>

      {/* FOOTER TICKER */}
      <footer className="w-full">
        <div className="marquee-container bg-background text-foreground py-10 uppercase tracking-[0.3em] font-sans text-sm">
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
