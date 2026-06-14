import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ role, company, duration, description, isLeft }) => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-stretch w-full mb-16 relative z-10 ${
      isLeft ? 'md:flex-row-reverse' : ''
    }`}>
      {/* Empty space/balance for desktop */}
      <div className="hidden md:block w-[45%]" />

      {/* Timeline Bullet Node */}
      <div className="absolute left-4 md:left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0a0a0a] bg-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.8)] z-20 flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[45%] pl-12 md:pl-0"
      >
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-[#10b981]/50 hover:shadow-[0_15px_45px_rgba(16,185,129,0.06)] transition-all duration-500 relative group">
          {/* Subtle hover gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
          
          <span className="text-xs font-bold text-[#10b981] tracking-widest uppercase mb-2 block font-mono">
            {duration}
          </span>
          
          <h3 className="text-2xl font-black text-white mb-1 tracking-tight leading-tight">
            {role}
          </h3>
          
          <h4 className="text-md font-bold text-gray-400 mb-6 font-mono">
            {company}
          </h4>

          <ul className="space-y-4 text-gray-400 text-sm font-medium leading-relaxed">
            {description.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#10b981] mt-1.5 select-none font-bold">&#9642;</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web Development Engineer",
      company: "B2B InfoTech (Ai1 Shopping)",
      duration: "Oct 2025 - Present",
      description: [
        "Designed and developed Ai1 Shopping, a scalable B2B e-commerce platform using MongoDB, Express.js, React.js, and Node.js.",
        "Implemented responsive and role-based dashboards for vendors, admins, and customers using React.js and Redux.",
        "Built secure RESTful APIs and real-time services, reducing API response times by 40% through query optimization and database indexing.",
        "Integrated payment gateways, inventory tracking, and end-to-end B2B order-tracking systems."
      ],
      isLeft: false
    },
    {
      role: "N8N Automation Engineering Intern",
      company: "HiddenMind Solutions",
      duration: "Sep 2025 - Oct 2025",
      description: [
        "Designed and automated a tiered subscription-based newsletter system using n8n, integrating Telegram, Email, SerpAPI, Google Sheets, and OpenAI.",
        "Created a Telegram-based onboarding workflow, successfully reducing manual customer enrollment times by 90%.",
        "Leveraged OpenAI APIs and search endpoints to deliver highly personalized weekly digests, boosting engagement rates by 40%."
      ],
      isLeft: true
    }
  ];

  return (
    <section 
      id="experience" 
      className="bg-[#0a0a0a] text-white pt-32 pb-20 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-950/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-24 flex flex-col items-center">
          <div className="inline-block border border-gray-800 rounded-full px-5 py-1.5 text-xs text-[#10b981] font-bold tracking-widest uppercase mb-6 shadow-md bg-[#111111]/80 backdrop-blur-sm">
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-2xl">
            My Professional <span className="text-[#10b981]">Experience</span>
          </h2>
        </div>

        {/* Timeline Line (Desktop centered, Mobile left-aligned) */}
        <div className="relative w-full">
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 transform -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#10b981] via-gray-800 to-[#111111] z-0"></div>

          {/* Experience Cards */}
          <div className="w-full">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index}
                role={exp.role}
                company={exp.company}
                duration={exp.duration}
                description={exp.description}
                isLeft={exp.isLeft}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
