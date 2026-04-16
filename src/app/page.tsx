"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative w-full bg-background min-h-screen text-foreground overflow-hidden" ref={containerRef}>
      
      {/* 
        HEADER: Logo Anchor
      */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference text-white pointer-events-none">
        <nav className="flex justify-center w-full px-8 py-8 border-b border-white/20">
          <div className="text-sm font-bold tracking-[0.3em] uppercase pointer-events-auto cursor-pointer hover:opacity-50 transition-opacity">
            Webster Salon Advisory.
          </div>
        </nav>
      </header>

      {/* 
        1. HERO: THE OPENING STATEMENT
      */}
      <section className="relative w-full min-h-screen flex flex-col pt-32 px-6 md:px-16 pb-20 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full flex-grow">
          
          {/* Vertical Architectural Line */}
          <div className="hidden md:block col-span-1 border-r border-black/10"></div>

          {/* Main Content Area */}
          <div className="col-span-1 md:col-span-10 flex flex-col justify-center relative">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(4.5rem,10vw,8rem)] font-serif leading-[0.9] tracking-tighter mb-12 max-w-5xl"
            >
              Passion starts the movement. <br/> Strategy sustains the legacy.
            </motion.h1>
            
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-auto pt-20">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="font-sans text-[18px] leading-[1.8] opacity-80 max-w-xl"
              >
                Fifty years of operational mastery. From the established avenues of London and Paris to the emerging skylines of Dubai and Riyadh, we architect salon enterprises that outlast the trends. We don't just open doors; we ensure they never close.
              </motion.p>
              
              <motion.button 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1.2, delay: 1 }}
                 className="bg-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold border border-black hover:bg-white hover:text-black transition-colors duration-300 w-max"
              >
                Initiate Advisory
              </motion.button>
            </div>
          </div>

          {/* Vertical Architectural Line */}
          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        2. THE MANIFESTO: 50 YEARS OF CERTAINTY
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:block col-span-1 border-r border-black/10 relative">
             <div className="sticky top-40 -ml-3 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap">01 — The Manifesto</div>
          </div>

          <div className="col-span-1 md:col-span-10 flex flex-col md:flex-row gap-20">
            <div className="w-full md:w-1/2 overflow-hidden hover-trigger aspect-[3/4]">
               <img 
                 src="/Images/WhatsApp%20Image%202026-03-25%20at%2016.15.50%20(1).jpeg" 
                 alt="Marc Webster"
                 className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-[2s] ease-out object-top" 
               />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-serif leading-[0.9] mb-12">The Principal’s Perspective.</h2>
              <p className="font-sans text-[18px] leading-[1.8] opacity-80 max-w-md">
                Marc Webster understands creative ambition, but he understands structural weakness even better. After five decades at the helm of international salon operations, his role is to inform your decisions before they become expensive mistakes. This is the elimination of risk through measured judgement and clear numbers.
              </p>
            </div>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        3. THE GLOBAL TURNKEY MANDATE
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10 bg-faint">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex flex-col col-span-1 border-r border-black/10 items-start pt-12 relative">
            <div className="sticky top-40 -ml-3 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap">02 — Mandate</div>
          </div>

          <div className="col-span-1 md:col-span-10">
            <h2 className="text-[clamp(4rem,7vw,6.5rem)] font-serif leading-[0.9] mb-12 max-w-4xl">Total Operational Sovereignty.</h2>
            <p className="font-sans text-[18px] leading-[1.8] opacity-80 max-w-2xl mb-24">
              For the investor who demands a finished, high-performance asset. We provide a full turnkey solution for first-time owners and international backers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col relative pt-12 border-t border-black/20">
                <span className="font-mono text-sm tracking-widest uppercase mb-6 font-bold">Phase 01</span>
                <h3 className="text-2xl font-serif mb-4">Concept &amp; Curation</h3>
                <p className="font-sans text-[18px] leading-[1.8] opacity-70">Sourcing the soul of the brand and the physical real estate.</p>
              </div>

              <div className="flex flex-col relative pt-12 border-t border-black/20">
                <span className="font-mono text-sm tracking-widest uppercase mb-6 font-bold">Phase 02</span>
                <h3 className="text-2xl font-serif mb-4">Structural Engineering</h3>
                <p className="font-sans text-[18px] leading-[1.8] opacity-70">Defining wage-to-revenue ratios and labour sustainability models.</p>
              </div>

              <div className="flex flex-col relative pt-12 border-t border-black/20">
                <span className="font-mono text-sm tracking-widest uppercase mb-6 font-bold">Phase 03</span>
                <h3 className="text-2xl font-serif mb-4">The Digital Launch</h3>
                <p className="font-sans text-[18px] leading-[1.8] opacity-70">Deploying the technical atelier—your integrated CRM, ERP, and Revenue Capture engines.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        4. THE STRATEGIC AUDIT: RISK ISOLATION
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex flex-col col-span-1 border-r border-black/10 items-start pt-12 relative">
             <div className="sticky top-40 -ml-3 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap">03 — Risk Isolation</div>
          </div>

          <div className="col-span-1 md:col-span-10 flex flex-col md:flex-row gap-20">
             <div className="w-full md:w-5/12">
               <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-serif leading-[0.9] mb-12 pr-8">The Preventative Commercial Audit.</h2>
               <p className="font-sans text-[18px] leading-[1.8] opacity-80 mb-12">
                 Opening a salon requires belief. Sustaining one requires a clinical understanding of margins. Our audit is a forensic examination of your business model.
               </p>
               <button className="bg-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold border border-black hover:bg-white hover:text-black transition-colors duration-300 w-max">
                 Book An Audit
               </button>
             </div>
             
             <div className="w-full md:w-7/12 flex flex-col">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 py-12 border-t border-black/20">
                 <div>
                   <h3 className="text-2xl font-serif mb-4">Break-Even Accuracy</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Granular analysis of chair-hour profitability.</p>
                 </div>
                 <div>
                   <h3 className="text-2xl font-serif mb-4">Lease Liability</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Strategic auditing of rental exposure in premium territories.</p>
                 </div>
                 <div className="pt-8 border-t border-black/10">
                   <h3 className="text-2xl font-serif mb-4">Cash Flow Resilience</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Stress-testing liquidity against seasonal volatility.</p>
                 </div>
                 <div className="pt-8 border-t border-black/10">
                   <h3 className="text-2xl font-serif mb-4">Structural Viability</h3>
                   <p className="font-sans text-[18px] leading-[1.8] opacity-70">Ensuring the business is a stable commercial entity, not a fragile creative collective.</p>
                 </div>
               </div>
             </div>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        5. THE DIGITAL ATELIER: TECHNICAL INFRASTRUCTURE
      */}
      <section className="relative w-full py-40 px-6 md:px-16 border-b border-black/10 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="hidden md:flex flex-col col-span-1 border-r border-white/20 items-start pt-12 relative">
             <div className="sticky top-40 -ml-3 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap">04 — Infrastructure</div>
          </div>

          <div className="col-span-1 md:col-span-10">
            <h2 className="text-[clamp(4.5rem,8vw,7.5rem)] font-serif leading-[0.9] mb-12">The Digital Nerve Center.</h2>
            <p className="font-sans text-[18px] leading-[1.8] opacity-80 max-w-2xl mb-24">
              Strategy is nothing without the tools of execution. Our website advisory division builds bespoke operational architecture.
            </p>

            {/* Brutalist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20">
               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">Integrated CRM &amp; ERP</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">Centralized data for absolute margin control.</p>
               </div>
               
               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">Revenue Capture Engine</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">High-performance booking systems optimized for yield.</p>
               </div>

               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">Native Mobile Application</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">Direct client retention infrastructure.</p>
               </div>

               <div className="p-12 border-b border-r border-white/20 hover:bg-white hover:text-black transition-colors duration-500 group min-h-[350px] flex flex-col justify-between">
                 <h3 className="text-3xl font-serif mb-8 group-hover:text-black">E-commerce Backbone</h3>
                 <p className="font-sans text-[18px] leading-[1.8] opacity-70 group-hover:opacity-100">Diversifying revenue through high-margin retail integrations.</p>
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
          <div className="hidden md:flex flex-col col-span-1 border-r border-black/10 items-start pt-12 relative">
             <div className="sticky top-40 -ml-3 transform -rotate-90 origin-left text-[10px] tracking-widest uppercase font-mono opacity-40 whitespace-nowrap">05 — Investor Auth</div>
          </div>

          <div className="col-span-1 md:col-span-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto min-h-[40vh]">
             <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-serif leading-[0.9] mb-12">Independent Commercial Clarity.</h2>
             <p className="font-sans text-[18px] leading-[1.8] opacity-80 mb-16">
               Confidential due diligence for providers of capital. We provide the realistic operating assumptions and risk isolation required for institutional-grade investments.
             </p>
             <button className="bg-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold border border-black hover:bg-white hover:text-black transition-colors duration-300 w-max">
               Request Confidential Briefing
             </button>
          </div>

          <div className="hidden md:block col-span-1 border-l border-black/10"></div>
        </div>
      </section>

      {/* 
        FOOTER WITH TICKER
      */}
      <footer className="pt-20 overflow-hidden relative border-t-[8px] border-black">
        <div className="max-w-7xl mx-auto px-6 text-center pb-20 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h2 className="text-[clamp(3rem,8vw,6rem)] font-serif tracking-tighter hover-trigger cursor-pointer uppercase">
                  Webster
              </h2>
              <p className="font-mono text-xs opacity-50 uppercase tracking-widest mt-4">Clinical Salon Strategy</p>
            </div>
            
            <div className="flex flex-col md:items-end justify-center">
              <form className="w-full max-w-sm flex border-b-2 border-black pb-4 mb-12">
                  <input type="email" placeholder="ENTER EMAIL FOR ADVISORY" className="bg-transparent border-none outline-none focus:ring-0 flex-grow text-xs font-sans tracking-[0.2em] uppercase placeholder-black/50 p-0 text-right pr-4"/>
                  <button type="submit" className="font-mono text-xs font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-colors">Submit</button>
              </form>
            </div>
        </div>

        {/* Endless CSS Marquee */}
        <div className="marquee-container bg-black text-white py-6 mt-12 uppercase tracking-[0.3em] font-sans text-sm">
           <div className="marquee-content flex gap-8 whitespace-nowrap">
              <span>LONDON</span><span>•</span>
              <span>PARIS</span><span>•</span>
              <span>MILAN</span><span>•</span>
              <span>DUBAI</span><span>•</span>
              <span>RIYADH</span><span>•</span>
              <span className="font-serif italic font-bold">50 YEARS OF SOVEREIGNTY</span><span>•</span>

              {/* Repeat for endless scroll logic */}
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
