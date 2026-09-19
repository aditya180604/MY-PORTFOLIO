import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, tech, description, highlights, link, buttonText, isLive, featured, metrics, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={`bg-[#111111] border border-gray-800 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-[#10b981]/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] transition-all duration-500 relative group min-h-[420px] ${
        featured ? 'md:col-span-2 border-emerald-900/40 bg-gradient-to-b from-[#121c17] to-[#111111]' : ''
      }`}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none ${
        featured ? 'from-emerald-500/10' : ''
      }`} />

      <div>
        {/* Technology Badges & Live Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, idx) => (
              <span key={idx} className="bg-gray-900 border border-gray-800 text-gray-300 text-[10px] font-mono tracking-wider font-bold px-3 py-1 rounded-full uppercase">
                {t}
              </span>
            ))}
          </div>
          {isLive && (
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#10b981] text-[11px] font-mono font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)] shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              Live Platform
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className={`font-black text-white mb-4 tracking-tight leading-tight group-hover:text-[#10b981] transition-colors duration-300 ${
          featured ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-2xl md:text-3xl'
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-gray-400 leading-relaxed font-medium mb-8 ${
          featured ? 'text-sm md:text-base lg:text-lg max-w-4xl' : 'text-sm md:text-base'
        }`}>
          {description}
        </p>

        {/* Highlights & Optional Metrics */}
        {featured && metrics ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-center">
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-300 leading-snug">
                    <svg className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-3">
              {metrics.map((m, idx) => (
                <div key={idx} className="bg-black/40 border border-gray-800/80 rounded-2xl p-4 flex flex-col items-center text-center">
                  <span className="text-xl sm:text-2xl font-black text-[#10b981] tracking-tight">{m.value}</span>
                  <span className="text-[11px] font-mono text-gray-400 uppercase mt-1 leading-tight">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ul className="space-y-3 mb-8">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-gray-300 leading-snug">
                <svg className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Button */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-black font-bold text-sm hover:bg-[#10b981] hover:text-white transition-all duration-300 transform group-hover:scale-[1.01] shadow-lg ${
            featured ? 'w-full md:w-auto md:px-10 py-4 self-start' : 'w-full px-6 py-3.5'
          }`}
        >
          {buttonText || "View Project"}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ) : (
        <div className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-2xl bg-gray-900 border border-gray-800 text-gray-400 font-bold text-sm cursor-default select-none">
          Local / ML Model
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: "TalentFlow AI — Autonomous AI HR & Recruitment Platform",
      tech: ["React.js", "Node.js", "AI Voice Agent", "WebRTC & Proctoring", "Tailwind CSS", "RESTful APIs"],
      description: "An end-to-end autonomous recruitment automation platform designed for HR teams and hiring managers. Recruiters upload or generate custom Job Descriptions, while the AI parses requirements, categorizes candidate pipelines, executes automated AI voice screening calls, conducts AI-proctored online interviews, and coordinates physical interview scheduling with automated candidate emails.",
      highlights: [
        "Automated JD Parsing & Candidate Categorization: Intelligently parses job descriptions, evaluates candidate skill profiles against specific requirements, and dynamically sorts candidates into structured hiring stages.",
        "AI Outbound Voice Screening Calls: Deploys autonomous AI voice agents to place automated phone screening calls to candidates, collecting preliminary verbal answers and qualification signals.",
        "AI-Proctored Video & In-Person Scheduling: Hosts interactive AI-evaluated online interviews with automated proctoring snapshots, while offering self-service calendar scheduling for both virtual and physical rounds.",
        "Full Pipeline Communication: Automatically dispatches branded candidate emails, interview links, status transitions, and decision updates with zero manual overhead."
      ],
      metrics: [
        { value: "AI Voice", label: "Outbound Calls" },
        { value: "100%", label: "Proctored AI" },
        { value: "End-to-End", label: "Auto Hiring" }
      ],
      link: "https://recruitment-agent-psi.vercel.app/",
      buttonText: "Launch TalentFlow AI",
      isLive: true,
      featured: true
    },
    {
      title: "JobHuntt — Freshers & Off-Campus Careers Portal",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "RESTful APIs"],
      description: "A high-impact, live production web platform engineered specifically for engineering graduates and freshers across India to discover verified off-campus recruitment drives, paid internships, and entry-level IT roles.",
      highlights: [
        "100% Verified Direct Applications: Connects job seekers directly to official MNC and startup career portals with zero intermediary fees or misleading redirects.",
        "Precision Batch Filtering: Implemented custom query filters tailored for 2024, 2025, 2026, and 2027 batch graduates across Software, Internships, Walk-ins, and Remote roles.",
        "Community & Real-Time Alerts: Integrated instant update pipelines and WhatsApp notification channels serving a community of 45,000+ registered aspiring candidates."
      ],
      metrics: [
        { value: "45K+", label: "Freshers Reach" },
        { value: "2024-27", label: "Batches" },
        { value: "100%", label: "Direct Links" }
      ],
      link: "https://www.jobhuntt.in/",
      buttonText: "Explore JobHuntt.in",
      isLive: true,
      featured: true
    },
    {
      title: "RVR Spatia — Architecture & Interior Studio",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "3D Visualization", "Web Design"],
      description: "A high-end architectural & spatial design studio web application engineered to showcase luxury residential, commercial, and cultural environments.",
      highlights: [
        "Interactive 5-stage architectural methodology & High-Definition 3D spatial previews.",
        "Smooth micro-interactions and responsive luxury aesthetic tailored for architecture clients.",
        "Integrated consultation request pipelines and multi-category project showcases."
      ],
      link: "https://rvrspatia.com/",
      buttonText: "Visit RVR Spatia",
      isLive: true
    },
    {
      title: "SRR Solutions — AI & Software Agency",
      tech: ["React.js", "Node.js", "AI Agents", "Workflow Automation", "Tailwind CSS"],
      description: "An AI and custom software agency platform featuring AI Agent integrations, process automation showcases, and industry-specific digital solutions.",
      highlights: [
        "Showcases custom AI agents, automated workflow pipelines, and enterprise SaaS solutions.",
        "Designed responsive interactive service cards and seamless strategy call booking systems.",
        "Engineered for high performance, accessibility, and modern UI micro-animations."
      ],
      link: "https://srrsolutions.io/",
      buttonText: "Visit SRR Solutions",
      isLive: true
    },
    {
      title: "Learning Management System (LearnHub)",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Vercel"],
      description: "A comprehensive full-stack learning platform engineered with secure authentication, course management, student dashboards, and a robust progress tracking framework.",
      highlights: [
        "Achieved a 50% increase in user engagement via custom gamification features.",
        "Delivered a 25% boost in course completion rates through interactive milestones.",
        "Engineered a scalable system architecture supporting 1,000+ concurrent active users with 99.9% uptime."
      ],
      link: "https://learning-management-system-frontend-sigma.vercel.app/Dashboard",
      buttonText: "View Dashboard"
    },
    {
      title: "Rice Plant Disease Detection Model",
      tech: ["Python", "TensorFlow", "CNN", "Keras", "Data Augmentation"],
      description: "A sophisticated deep learning computer vision model built using convolutional neural networks to classify rice leaf diseases across 5 distinct biological categories.",
      highlights: [
        "Achieved a 95% classification accuracy on validation and test datasets.",
        "Preprocessed and normalized 10,000+ leaf images to enhance model robustness.",
        "Implemented early stopping callbacks and dropout regularization, training for 70 epochs."
      ],
      link: null
    }
  ];

  return (
    <section 
      id="projects" 
      className="bg-[#0e0e0e] text-white pt-32 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900 bg-[radial-gradient(#8080800d_1px,transparent_1px)] bg-[size:32px_32px]"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-950/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-20">
          <div className="inline-block border border-gray-800 rounded-full px-5 py-1.5 text-xs text-[#10b981] font-bold tracking-widest uppercase mb-6 shadow-md bg-[#111111]/80 backdrop-blur-sm">
            My Portfolio
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight max-w-xl">
              Featured <span className="text-[#10b981]">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-sm font-medium leading-relaxed">
              A collection of live production platforms, full-stack systems, and machine learning models showcasing engineering precision and real-world impact.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectList.map((project, idx) => (
            <ProjectCard
              key={idx}
              index={idx}
              title={project.title}
              tech={project.tech}
              description={project.description}
              highlights={project.highlights}
              link={project.link}
              buttonText={project.buttonText}
              isLive={project.isLive}
              featured={project.featured}
              metrics={project.metrics}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
