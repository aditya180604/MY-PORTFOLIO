import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, tech, description, highlights, link, buttonText, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="bg-[#111111] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between hover:border-[#10b981]/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)] transition-all duration-500 relative group min-h-[420px]"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

      <div>
        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, idx) => (
            <span key={idx} className="bg-gray-900 border border-gray-800 text-gray-300 text-[10px] font-mono tracking-wider font-bold px-3 py-1 rounded-full uppercase">
              {t}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-[#10b981] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium mb-8">
          {description}
        </p>

        {/* Highlights/Metrics List */}
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
      </div>

      {/* Action Button */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-2xl bg-white text-black font-bold text-sm hover:bg-[#10b981] hover:text-white transition-all duration-300 transform group-hover:scale-[1.01] shadow-lg"
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
      title: "RVR Spatia — Architecture & Interior Studio",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "3D Visualization", "Web Design"],
      description: "A high-end architectural & spatial design studio web application engineered to showcase luxury residential, commercial, and cultural environments.",
      highlights: [
        "Interactive 5-stage architectural methodology & High-Definition 3D spatial previews.",
        "Smooth micro-interactions and responsive luxury aesthetic tailored for architecture clients.",
        "Integrated consultation request pipelines and multi-category project showcases."
      ],
      link: "https://rvrspatia.com/",
      buttonText: "Visit RVR Spatia"
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
      buttonText: "Visit SRR Solutions"
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
              A collection of systems and machine learning projects I have built, showcasing full-stack capabilities and problem-solving skills.
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
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
