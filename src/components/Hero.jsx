import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroBg from '../assets/herosection1.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section id="home" className="relative w-full h-screen min-h-screen flex flex-col md:flex-row bg-[#030d0a] overflow-y-auto md:overflow-hidden">
      
      {/* Left Column: Text Panel */}
      <div className="relative w-full md:w-[45%] lg:w-[42%] min-h-[55vh] md:h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 md:py-0 bg-gradient-to-b from-[#061a13] via-[#030d0a] to-[#04120d] z-20 order-2 md:order-1 border-r border-[#10b981]/10">
        
        {/* Subtle grid pattern background with emerald lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:16px_28px] pointer-events-none z-0"></div>
        
        {/* Decorative Radial Glowing Blobs for portfolio depth */}
        <div className="absolute -top-[10%] -right-[10%] w-96 h-96 bg-[#10b981]/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute -bottom-[20%] -left-[20%] w-96 h-96 bg-teal-500/10 rounded-full blur-[130px] pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col items-start w-full">
          {/* Badge */}
          <div 
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-[#10b981] text-[10px] md:text-xs font-bold mb-6 uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.05)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            Available for Opportunities
          </div>

          {/* Heading */}
          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 tracking-tight leading-tight"
          >
            Hi, I’m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#10b981] to-teal-400 font-extrabold pr-2 drop-shadow-sm">
              Aditya
            </span> <br /> 
            <span className="text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:1.5px_white] font-black tracking-wide block mt-1 uppercase text-3xl md:text-3.5xl lg:text-4.5xl xl:text-5.5xl">
              Full Stack Developer
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-400 text-sm md:text-base lg:text-lg mb-6 max-w-md font-normal leading-relaxed"
          >
            I build fast, scalable, and modern web applications using the MERN stack and automate workflows with n8n.
          </p>

          {/* Core Tech Stack Mini-Badges */}
          <div 
            data-aos="fade-up"
            data-aos-delay="250"
            className="flex flex-wrap gap-2 mb-8"
          >
            {['React.js', 'Node.js', 'MongoDB', 'n8n Automation', 'Express'].map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-emerald-500/5 border border-emerald-500/10 text-emerald-400/80 font-medium tracking-wide">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons & Social Row */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href="#projects"
              className="px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#contact"
              className="px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              Contact Me
            </a>

            {/* Resume Button */}
            <a 
              href="https://drive.google.com/file/d/11fCsaAYJdbIJsAXO-YvVAz9s-PhYGy6O/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 md:px-8 md:py-3 text-xs md:text-sm rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[#10b981] font-bold hover:bg-[#10b981] hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>

            {/* Micro Social icons inside Hero */}
            <div className="flex items-center gap-3 ml-2 md:ml-4 border-l border-white/10 pl-4 py-1">
              <a 
                href="https://github.com/aditya180604" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#10b981] transition-colors"
                title="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/satya-aditya-vardhan-m-17a1a7227/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#10b981] transition-colors"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:msadityavardhan18@gmail.com" 
                className="text-gray-400 hover:text-[#10b981] transition-colors"
                title="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator (desktop only) */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="500"
          className="hidden md:flex absolute bottom-8 left-12 lg:left-16 z-20 pointer-events-none items-center gap-3 text-gray-500"
        >
          <div className="flex flex-col items-center justify-center w-5 h-9 border-2 border-gray-600 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-bounce"></span>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-semibold font-mono">Scroll Down</span>
        </div>

        {/* Thin vertical glowing thread at the right edge (desktop only) */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#10b981]/30 to-transparent z-30 hidden md:block"></div>

      </div>

      {/* Right Column: Image Panel */}
      <div className="relative w-full md:w-[55%] lg:w-[58%] h-[45vh] md:h-full overflow-hidden order-1 md:order-2 z-10 bg-black">
        <img
          src={heroBg}
          alt="Aditya - Full Stack Developer"
          className="w-full h-full object-cover object-center z-0"
        />

        {/* Desktop Side Fade Gradient: blend photo background into the deep green panel */}
        <div className="hidden md:block absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#030d0a] to-transparent z-10 pointer-events-none"></div>

        {/* Mobile Bottom Fade Gradient: blend photo background into the bottom deep green panel */}
        <div className="block md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030d0a] to-transparent z-10 pointer-events-none"></div>
      </div>

    </section>
  );
};

export default Hero;
