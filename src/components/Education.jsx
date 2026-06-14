import React from 'react';
import { motion } from 'framer-motion';

const EducationCard = ({ degree, school, duration, grade, details, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="bg-[#111111] border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-[#10b981]/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] transition-all duration-500 relative group"
    >
      {/* Hover glow gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

      <div className="flex gap-6 items-start">
        {/* Icon Container */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          {icon}
        </div>

        {/* Card Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#10b981] tracking-widest uppercase">
              {duration}
            </span>
            {grade && (
              <span className="inline-block self-start sm:self-auto text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] font-bold">
                {grade}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-tight leading-tight">
            {degree}
          </h3>
          <h4 className="text-sm md:text-base font-bold text-gray-400 mb-4 font-mono">
            {school}
          </h4>

          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            {details}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      school: "Vellore Institute of Technology (VIT)",
      duration: "2021 - 2025",
      grade: "CGPA: 8.82 / 10",
      details: "Specializing in software engineering, full-stack application development, and systems. Active participant in technical clubs and hackathons.",
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      degree: "Higher Secondary Education (Class XII - MPC)",
      school: "Aditya Junior College",
      duration: "2019 - 2021",
      grade: "Percentage: 98%",
      details: "Focused on Mathematics, Physics, and Chemistry (MPC stream). Developed strong logical and analytical problem-solving skills.",
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      degree: "Secondary School Certificate (Class X  - SSC)",
      school: "Narayana School",
      duration: "2018 - 2019",
      grade: "GPA: 10.0 / 10.0",
      details: "Completed secondary education with perfect academic scores, building a solid foundation in sciences and mathematics.",
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="education" 
      className="bg-[#0a0a0a] text-white pt-32 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]"
    >
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-950/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Heading and Summary */}
          <div data-aos="fade-right" className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-block border border-gray-800 rounded-full px-5 py-1.5 text-xs text-[#10b981] font-bold tracking-widest uppercase mb-6 shadow-md bg-[#111111]/80 backdrop-blur-sm">
              Academic Background
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              My <span className="text-[#10b981]">Education</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-md">
              A solid theoretical foundation in Computer Science and strong analytical reasoning back up my practical engineering expertise. Here is my academic timeline.
            </p>
          </div>

          {/* Right Column: Education Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {educationList.map((edu, idx) => (
              <EducationCard
                key={idx}
                delay={idx * 0.15}
                degree={edu.degree}
                school={edu.school}
                duration={edu.duration}
                grade={edu.grade}
                details={edu.details}
                icon={edu.icon}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
