"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"]
  });

  // Parallax for the hero image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="relative w-full bg-background min-h-screen text-foreground overflow-hidden" ref={containerRef}>
      
      {/* 
        Minimalist Header 
      */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference text-white">
        <nav className="flex justify-between items-center w-full px-8 md:px-16 py-8">
          <div className="text-[12px] font-bold tracking-[0.3em] uppercase">
            Webster
          </div>
          <div className="hidden md:flex gap-16 text-[10px] uppercase font-bold tracking-[0.2em]">
            <a href="#reality" className="hover:opacity-50 transition-opacity">Reality</a>
            <a href="#audit" className="hover:opacity-50 transition-opacity">The Audit</a>
            <a href="#atelier" className="hover:opacity-50 transition-opacity">Atelier</a>
          </div>
          <button className="text-[10px] tracking-widest font-bold uppercase transition-all border-b border-transparent hover:border-white">
            Enquire
          </button>
        </nav>
      </header>

      {/* 
        HERO SECTION: 60/40 Asymmetric Split 
      */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center pt-20 md:pt-0">
        
        {/* Left Side: 60% Image (Full bleed height) */}
        <div className="w-full md:w-[60%] h-[50vh] md:h-full relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative group hover-trigger"
          >
            <motion.img 
              style={{ y }}
              src="/Images/marc_editorial.png" 
              alt="Marc Webster"
              className="absolute inset-0 w-full h-[120%] object-cover grayscale brightness-90 -top-[10%]" 
            />
          </motion.div>
        </div>

        {/* Right Side: 40% Negative Space */}
        <div className="w-full md:w-[40%] h-[50vh] md:h-full bg-background flex flex-col justify-end p-8 md:p-24">
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="font-serif text-2xl md:text-5xl italic text-foreground max-w-md leading-tight mb-12"
          >
            "Passion opens salons. <br /> Structure keeps them open."
          </motion.p>
          <motion.button 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="btn-liquid w-max px-12 py-5 border border-foreground text-[10px] tracking-[0.3em] uppercase font-bold text-foreground transition-colors duration-500 hover:text-white"
          >
            Book Strategy
          </motion.button>
        </div>

        {/* Absolute Typography Overlapping Both Halves */}
        <div className="absolute top-1/2 left-4 md:left-16 -translate-y-[60%] z-10 pointer-events-none w-full mix-blend-difference pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-super font-serif text-white uppercase"
          >
            Webster
          </motion.h1>
          <motion.h2 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
             className="text-title font-serif text-white uppercase ml-0 md:ml-32 opacity-80"
          >
            Advisory.
          </motion.h2>
        </div>

      </section>

      {/* 
        COMMERCIAL REALITY SECTION: Hollow Numbering
      */}
      <section className="py-40 px-6 md:px-16" id="reality">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-serif mb-4">The Commercial Reality</h2>
            <div className="w-[100px] h-px bg-black opacity-20"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-24">
             {/* Left Text */}
             <div className="w-full md:w-1/3">
               <p className="text-xl md:text-2xl font-light leading-relaxed opacity-70">
                 We strip away the emotional bias of creative management, isolating the commercial vulnerabilities that silently erode profitability.
               </p>
             </div>
             
             {/* Right Hollow List */}
             <div className="w-full md:w-2/3 flex flex-col gap-12">
               
               <div className="flex flex-col md:flex-row gap-6 md:items-center group">
                 <span className="text-hollow text-[5rem] md:text-[8rem] font-serif leading-none group-hover:text-black transition-colors duration-500">01</span>
                 <div className="pt-2 md:pt-12">
                   <h3 className="text-xl md:text-3xl font-serif mb-2">Unoptimized Labour</h3>
                   <p className="text-sm uppercase tracking-widest font-bold opacity-50">Utilization Metrics</p>
                 </div>
               </div>

               <div className="flex flex-col md:flex-row gap-6 md:items-center group border-t border-black/5 pt-12">
                 <span className="text-hollow text-[5rem] md:text-[8rem] font-serif leading-none group-hover:text-black transition-colors duration-500">02</span>
                 <div className="pt-2 md:pt-12">
                   <h3 className="text-xl md:text-3xl font-serif mb-2">Escalating Occupancy</h3>
                   <p className="text-sm uppercase tracking-widest font-bold opacity-50">Vulnerability Audit</p>
                 </div>
               </div>

               <div className="flex flex-col md:flex-row gap-6 md:items-center group border-t border-black/5 pt-12">
                 <span className="text-hollow text-[5rem] md:text-[8rem] font-serif leading-none group-hover:text-black transition-colors duration-500">03</span>
                 <div className="pt-2 md:pt-12">
                   <h3 className="text-xl md:text-3xl font-serif mb-2">System Asynchrony</h3>
                   <p className="text-sm uppercase tracking-widest font-bold opacity-50">Talent Retention</p>
                 </div>
               </div>

             </div>
          </div>
        </div>
      </section>

      {/* 
        THE STRATEGIC AUDIT 
      */}
      <section className="py-32 bg-faint" id="audit">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="text-center mb-24">
            <span className="text-[10px] tracking-[0.4em] font-bold uppercase block mb-6 opacity-50">Framework</span>
            <h2 className="text-5xl md:text-7xl font-serif">The Strategic Audit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest opacity-30 mb-8 border-b border-black/10 pb-4">PART I</span>
              <h3 className="text-3xl font-serif mb-6">Break-Even Isolation</h3>
              <p className="text-sm leading-loose opacity-70 mb-12">Granular analysis of fixed &amp; variable costs. We find the precise moment of profitability per chair, per hour.</p>
              <div className="mt-auto hover-trigger">
                <img src="/Images/marc_editorial.png" alt="Detail 1" className="w-full aspect-[4/5] object-cover grayscale" />
              </div>
            </div>

            <div className="flex flex-col md:mt-32">
              <span className="text-[10px] font-bold tracking-widest opacity-30 mb-8 border-b border-black/10 pb-4">PART II</span>
              <h3 className="text-3xl font-serif mb-6">Lease Architecture</h3>
              <p className="text-sm leading-loose opacity-70 mb-12">Evaluating escalations and turnover clauses ensures your footprint isn't a financial anchor.</p>
              <div className="mt-auto hover-trigger">
                <img src="/Images/WhatsApp Image 2026-03-25 at 16.15.50 (1).jpeg" alt="Detail 2" className="w-full aspect-square object-cover grayscale object-top" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest opacity-30 mb-8 border-b border-black/10 pb-4">PART III</span>
              <h3 className="text-3xl font-serif mb-6">Liquidity Sync</h3>
              <p className="text-sm leading-loose opacity-70 mb-12">Forecasting liquidity across peak and trough seasons to maintain stability and investor confidence.</p>
              <div className="mt-auto h-64 bg-black flex items-center justify-center p-8 hover-trigger">
                 <p className="text-white text-xs uppercase tracking-widest text-center leading-loose">"Discipline outlasts inspiration."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        THE TECHNICAL ATELIER (Zero Border Bento Grid)
      */}
      <section className="py-40 bg-charcoal text-white" id="atelier">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <span className="text-[10px] tracking-[0.4em] font-bold uppercase block mb-6 text-brand Blue">Digital Protocol</span>
              <h2 className="text-5xl md:text-7xl font-serif max-w-xl">The Technical Atelier</h2>
            </div>
            <p className="max-w-md text-sm leading-loose opacity-70 mt-8 md:mt-0">
               Highly customized operational frameworks bridging your CRM, CMS, ERP, and payment automations flawlessly into Webster principles.
            </p>
          </div>

          {/* Bento Grid using negative CSS space (gap) instead of borders */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
             
             {/* Big Feature Block */}
             <div className="md:col-span-2 md:row-span-2 bg-black/40 p-12 flex flex-col justify-between hover:bg-black/60 transition-colors">
               <h3 className="text-3xl font-serif">Brand, UI/UX &amp; Storytelling</h3>
               <p className="text-xs uppercase tracking-widest font-bold opacity-50 mt-8">Phase 01</p>
               <div className="mt-auto pt-16">
                 <p className="text-sm leading-loose opacity-70 max-w-sm">Strategic brand identity, interface design and user experience foundation defining the salon's digital footprint.</p>
               </div>
             </div>

             {/* Standard Blocks */}
             <div className="bg-black/40 p-8 flex flex-col justify-between hover:bg-black/60 transition-colors h-64 md:h-auto">
               <h3 className="text-xl font-serif">CMS Content Engine</h3>
               <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mt-4">Phase 02</p>
             </div>

             <div className="bg-brandBlue p-8 flex flex-col justify-between hover:bg-blue-900 transition-colors h-64 md:h-auto">
               <h3 className="text-xl font-serif">CRM &amp; Lead Flow</h3>
               <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mt-4">Phase 03</p>
             </div>

             <div className="bg-white/5 p-8 flex flex-col justify-between hover:bg-white/10 transition-colors h-64 md:h-auto">
               <h3 className="text-xl font-serif">ERP Core</h3>
               <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mt-4">Phase 04</p>
             </div>

             <div className="bg-black/40 p-8 flex flex-col justify-between hover:bg-black/60 transition-colors h-64 md:h-auto">
               <h3 className="text-xl font-serif">Platform Integrations</h3>
               <p className="text-[10px] uppercase tracking-widest font-bold opacity-50 mt-4">Phase 05</p>
             </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-32 px-6 md:px-16 text-center border-t border-black/10">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl md:text-[8rem] font-serif mb-24 tracking-tighter mix-blend-difference hover-trigger cursor-pointer">
                Webster
            </h2>
            
            <form className="w-full max-w-md flex border-b border-black pb-4 mb-24">
                <input type="email" placeholder="ENTER EMAIL FOR ADVISORY" className="bg-transparent border-none outline-none focus:ring-0 flex-grow text-[9px] tracking-[0.2em] uppercase font-bold text-center placeholder-black/50 p-0"/>
                <button type="submit" className="text-[9px] font-bold uppercase tracking-[0.2em] hover:opacity-50 transition-colors pl-4">Submit</button>
            </form>
            
            <div className="flex flex-wrap gap-8 md:gap-16 text-[9px] uppercase tracking-[0.2em] font-bold opacity-50 justify-center mb-16">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Methodology</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Capital Oversight</a>
            </div>
            
            <p className="text-[8px] opacity-30 uppercase tracking-[0.3em]">© 2026 Webster Advisory. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
