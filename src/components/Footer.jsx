import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-gray-900 relative">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold mb-2 uppercase text-[11px] tracking-wider">Services</p>
          <p>Full Stack Web Development</p>
          <p>MERN Stack & Rest APIs</p>
          <p>n8n Workflow Automation</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-white font-bold mb-2 uppercase text-[11px] tracking-wider">Explore</p>
          <a href="#projects" className="underline hover:text-[#10b981] transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
          <a href="#experience" className="underline hover:text-[#10b981] transition-colors mt-1 underline-offset-4 decoration-1">Work History</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-white font-bold mb-2 uppercase text-[11px] tracking-wider">Status</p>
          <p>Available for Opportunities</p>
          <p>Worldwide / Remote</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden relative group">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#171717] w-full text-center transition-colors duration-500 group-hover:text-emerald-950/20">
          aditya
        </h2>
        {/* Floating text overlay on hover */}
        <div className="absolute text-center text-xs md:text-sm font-sans font-bold text-[#10b981] tracking-[0.4em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          Let's build something epic
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-4">
          <a href="#contact" className="underline hover:text-[#10b981] transition-colors underline-offset-4 decoration-1 font-bold text-xs uppercase tracking-widest text-white">Contact Me</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px] tracking-normal">
            &copy; {new Date().getFullYear()} Aditya. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:msadityavardhan18@gmail.com" className="underline hover:text-[#10b981] transition-colors underline-offset-4 decoration-1 lowercase text-sm tracking-normal">
            msadityavardhan18@gmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-6 md:justify-end">
          <a 
            href="https://github.com/aditya180604" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#10b981] transition-colors uppercase tracking-widest text-[11px] font-bold"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/satya-aditya-vardhan-m-17a1a7227/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#10b981] transition-colors uppercase tracking-widest text-[11px] font-bold"
          >
            LinkedIn
          </a>
          <a 
            href="https://wa.me/919392584546" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#25D366] transition-colors uppercase tracking-widest text-[11px] font-bold text-[#25D366]"
          >
            WhatsApp
          </a>
          <a 
            href="#home" 
            className="hover:text-[#10b981] transition-colors uppercase tracking-widest text-[11px] font-bold flex items-center gap-1.5"
          >
            Top 
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
