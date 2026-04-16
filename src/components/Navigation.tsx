"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
       document.body.style.overflow = 'hidden';
    } else {
       document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <button 
        onClick={toggleMenu}
        className={`fixed top-8 right-8 z-[150] font-mono text-xs md:text-sm tracking-widest uppercase transition-colors pointer-events-auto ${
          isOpen ? "text-white hover:text-white/50 mix-blend-normal" : "text-white mix-blend-difference hover:text-white/70"
        }`}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <div 
        className={`fixed inset-0 bg-pitch z-[100] flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-12"
        }`}
      >
         {/* Background Glow */}
         <div className="absolute inset-0 bg-[#0056B3] blur-[200px] opacity-[0.05] -z-10 pointer-events-none"></div>

         <nav className="flex flex-col gap-6 md:gap-10 text-center px-4 w-full h-[80vh] overflow-y-auto">
            <div className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold mb-4 font-mono">Digital Atelier Index</div>
            
            <a href="#principal" onClick={closeMenu} className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0056B3] hover:to-[#00BFFF] transition-all leading-[0.9]">
               The Principal
            </a>
            <a href="#mandate" onClick={closeMenu} className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0056B3] hover:to-[#00BFFF] transition-all leading-[0.9]">
               The Mandate
            </a>
            <a href="#audit" onClick={closeMenu} className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0056B3] hover:to-[#00BFFF] transition-all leading-[0.9]">
               The Audit
            </a>
            <a href="#ecosystem" onClick={closeMenu} className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0056B3] hover:to-[#00BFFF] transition-all leading-[0.9]">
               Infrastructure
            </a>
            <a href="#enquiry" onClick={closeMenu} className="text-5xl md:text-7xl lg:text-[8rem] font-serif text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0056B3] hover:to-[#00BFFF] transition-all leading-[0.9] mt-8">
               Enquiry Portal
            </a>
         </nav>
      </div>
    </>
  );
}
