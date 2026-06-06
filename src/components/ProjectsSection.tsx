"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { LiveProjectButton } from './Buttons';

interface Project {
  id: number;
  num: string;
  name: string;
  category: string;
  tech: string;
  techList: string[];
  details: string[];
  link: string;
  images: {
    col1_top: string;
    col1_bottom: string;
    col2: string;
  };
  imageUrls: string[];
  objectPosition?: {
    col1_top?: string;
    col1_bottom?: string;
    col2?: string;
  };
}

const projects: Project[] = [
  {
    id: 0,
    num: '01',
    name: 'SmartCareHub',
    category: 'Microservices Healthcare Platform (MERN)',
    tech: 'React, Node, Express, MongoDB, REST APIs, JWT, Docker, Kubernetes, Microservices',
    techList: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Docker', 'Docker Compose', 'Kubernetes', 'Microservices'],
    details: [
      'Developed a scalable healthcare management system using microservices architecture for patient management, appointment scheduling, authentication, and support services.',
      'Implemented secure RESTful APIs using Node.js and Express.js with JWT authentication and role-based access control.',
      'Used Docker and Docker Compose for containerization and Kubernetes for deployment, scalability, and service orchestration.',
      'Integrated MongoDB for efficient data storage and built responsive React.js frontend for improved user experience.'
    ],
    link: 'https://github.com/sanjee-vn/SmartCareHub',
    images: {
      col1_top: '/assets/projects/Screenshot 2026-06-03 230113.png',
      col1_bottom: '/assets/projects/smartcarehub_dashboard.png',
      col2: '/assets/projects/smartcarehub.png'
    },
    imageUrls: [
      '/assets/projects/Screenshot 2026-06-03 230409.png',
      '/assets/projects/Screenshot 2026-06-03 230446.png',
      '/assets/projects/Screenshot 2026-06-03 230806.png',
      '/assets/projects/Screenshot 2026-06-03 230924.png',
      '/assets/projects/Screenshot 2026-06-03 230950.png',
      '/assets/projects/Screenshot 2026-06-03 231403.png',
      '/assets/projects/Screenshot 2026-06-03 231051.png',
      '/assets/projects/Screenshot 2026-06-03 231454.png',
      '/assets/projects/Screenshot 2026-06-03 231640.png',
      '/assets/projects/Screenshot 2026-06-03 231704.png',
      '/assets/projects/Screenshot 2026-06-03 231751.png',
      '/assets/projects/Screenshot 2026-06-03 231858.png',
      '/assets/projects/Screenshot 2026-06-03 231924.png',
      '/assets/projects/Screenshot 2026-06-03 232219.png'
    ],
    objectPosition: {
      col1_top: 'object-center',
      col1_bottom: 'object-center',
      col2: 'object-center'
    }
  },
  {
    id: 1,
    num: '02',
    name: 'VentureAssist',
    category: 'Startup Growth Platform (MERN)',
    tech: 'React, Node, Express, MongoDB, REST APIs, JWT, AI Content Analysis, JavaScript',
    techList: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'AI Content Analysis', 'JavaScript'],
    details: [
      'Developed a full-stack startup management platform supporting marketing, finance, legal, and mentorship services.',
      'Implemented marketing features including campaign management, article publishing, and AI-based content analysis.',
      'Built scalable REST APIs with Node.js and Express.js using JWT authentication for secure user access.',
      'Integrated MongoDB databases and designed responsive React.js interfaces to ensure scalability and improved user experience.'
    ],
    link: 'https://github.com/sanjee-vn/VentureAssist',
    images: {
      col1_top: '/assets/projects/Screenshot 2026-06-02 210842.png',
      col1_bottom: '/assets/projects/ventureassist_footer.png',
      col2: '/assets/projects/ventureassist_hero.png'
    },
    imageUrls: [
      '/assets/projects/Screenshot 2026-06-02 212947.png',
      '/assets/projects/Screenshot 2026-06-02 210842.png',
      '/assets/projects/Screenshot 2026-06-02 210951.png',
      '/assets/projects/Screenshot 2026-06-02 212346.png',
      '/assets/projects/Screenshot 2026-06-02 212509.png',
      '/assets/projects/Screenshot 2026-06-02 212613.png',
      '/assets/projects/Screenshot 2026-06-02 212858.png'
    ],
    objectPosition: {
      col1_top: 'object-center',
      col1_bottom: 'object-top',
      col2: 'object-top'
    }
  },
  {
    id: 2,
    num: '03',
    name: 'Student Interactive Management System (SIMS)',
    category: 'University Engagement Platform (MERN)',
    tech: 'React, Node, Express, MongoDB, REST APIs, JavaScript',
    techList: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript'],
    details: [
      'Developed a MERN-based university engagement platform to improve communication and support services for students.',
      'Implemented modules including discussions, lost & found, event management, appointment scheduling, and student support services.',
      'Built REST APIs with Node.js and Express.js and integrated MongoDB for managing user data and platform interactions.',
      'Designed responsive React.js interfaces and applied scalable architecture to enhance student engagement and system usability.'
    ],
    link: 'https://github.com/sanjee-vn',
    images: {
      col1_top: '/assets/projects/1766143754299.jpg',
      col1_bottom: '/assets/projects/1766143755096.jpg',
      col2: '/assets/projects/canvasconnect.jpg'
    },
    imageUrls: [
      '/assets/projects/1766143755096.jpg',
      '/assets/projects/1766143753877.jpg',
      '/assets/projects/1766143754299.jpg',
      '/assets/projects/1766143754378.jpg',
      '/assets/projects/1766143754449.jpg',
      '/assets/projects/1766143754537.jpg',
      '/assets/projects/1766143754561.jpg',
      '/assets/projects/1766143754654.jpg',
      '/assets/projects/1766143754796.jpg'
    ],
    objectPosition: {
      col1_top: 'object-center',
      col1_bottom: 'object-center',
      col2: 'object-center'
    }
  },
  {
    id: 3,
    num: '04',
    name: 'Student Companion App',
    category: 'Native Mobile App (Kotlin)',
    tech: 'Kotlin, Android SDK, XML Layouts, Android Studio',
    techList: ['Kotlin', 'Android SDK', 'XML Layouts', 'Android Studio'],
    details: [
      'Mobile app built with Kotlin, Android SDK, and XML Layouts to manage classes, deadlines, projects, and tasks with reminders and progress tracking.',
      'Designed with an intuitive UI/UX to enhance student productivity and academic organization.'
    ],
    link: 'https://github.com/sanjee-vn',
    images: {
      col1_top: '/assets/projects/1754902063024.jpg',
      col1_bottom: '/assets/projects/1754902063024.jpg',
      col2: '/assets/projects/1754902060986.jpg'
    },
    imageUrls: ['/assets/projects/1754902060986.jpg', '/assets/projects/1754902063024.jpg'],
    objectPosition: {
      col1_top: 'object-center',
      col1_bottom: 'object-center',
      col2: 'object-center'
    }
  },
  {
    id: 4,
    num: '05',
    name: 'Online Music Store Web App',
    category: 'Full-Stack Web App (Java/JSP)',
    tech: 'Java, JSP, Servlets, MySQL, HTML, CSS, JavaScript',
    techList: ['Java', 'JSP', 'Servlets', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    details: [
      'Developed a full-stack web application using HTML, CSS, JavaScript (frontend) and Java Servlets/JSP (backend).',
      'Integrated MySQL database for managing products, users, and orders.',
      'Implemented user authentication, product browsing, search functionality, and order management.'
    ],
    link: 'https://github.com/sanjee-vn',
    images: {
      col1_top: '/assets/projects/Screenshot 2026-06-06 174747.png',
      col1_bottom: '/assets/projects/Screenshot 2026-06-06 175017.png',
      col2: '/assets/projects/nextone.png'
    },
    imageUrls: [
      '/assets/projects/Screenshot 2026-06-06 175017.png',
      '/assets/projects/Screenshot 2026-06-06 174924.png',
      '/assets/projects/Screenshot 2026-06-06 174747.png',
      '/assets/projects/nextone.png'
    ],
    objectPosition: {
      col1_top: 'object-center',
      col1_bottom: 'object-center',
      col2: 'object-center'
    }
  }
];

/**
 * ProjectsSection renders the sticky-stacking project cards.
 * Uses useScroll and useTransform to scale down cards sequentially on scroll.
 */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-bg text-text rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pb-20 relative z-25 -mt-10 sm:-mt-12 md:-mt-14 pt-16 sm:pt-20 md:pt-28 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="font-display italic font-semibold text-center text-4xl sm:text-5xl md:text-[5rem] lg:text-[6.5rem] leading-none mb-16 sm:mb-20 md:mb-28 tracking-tight">
          Projects
        </h2>

        {/* Stacking Card List Container */}
        <div className="w-full flex flex-col gap-[8vh]">
          {projects.map((project, idx) => {
            const targetScale = 1 - (projects.length - 1 - idx) * 0.03;

            // Map scale down range during section scrolling dynamically based on length
            const step = 1 / projects.length;
            const startScroll = idx * step * 0.8;
            const endScroll = (idx + 1) * step * 0.8;
            const scale = useTransform(scrollYProgress, [startScroll, endScroll], [1, targetScale]);

            return (
              <div
                key={project.id}
                className="sticky top-20 sm:top-24 md:top-32 h-[80vh] sm:h-[82vh] w-full flex items-center justify-center pointer-events-none"
              >
                <motion.div
                  style={{
                    scale,
                    transformOrigin: 'top center',
                    willChange: 'transform'
                  }}
                  className="pointer-events-auto w-full h-[70vh] sm:h-[75vh] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-stroke bg-surface p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl relative"
                >
                  {/* Top Row: Number, Category and Full Details Button */}
                  <div className="flex justify-between items-center w-full gap-4 border-b border-stroke pb-4">
                    <div className="flex items-center gap-3 sm:gap-5">
                      <span className="font-display italic font-semibold text-muted text-3xl sm:text-4xl md:text-[3rem] leading-none select-none">
                        {project.num}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-muted uppercase tracking-widest text-[9px] sm:text-xs">
                          {project.category}
                        </span>
                        <h3 className="text-text font-semibold text-base sm:text-xl md:text-2xl leading-tight">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-block rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] font-medium uppercase tracking-widest text-center px-6 py-2 sm:px-8 sm:py-2.5 text-[10px] sm:text-xs transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto"
                    >
                      Full Details
                    </button>
                  </div>

                  {/* Tech Stack details */}
                  <div className="text-[10px] sm:text-xs text-muted mt-2 font-mono select-none overflow-hidden text-ellipsis whitespace-nowrap">
                    Tech: {project.tech}
                  </div>

                  {/* Bottom Row: 2-Column Image Grid */}
                  <div className="flex-grow flex gap-3 mt-4 overflow-hidden h-full items-center">
                    {project.id === 3 ? (
                      <>
                        {/* Project 4: 2 equally split aspect-matched columns */}
                        <div className="w-1/2 h-full flex items-center justify-center">
                          <div className="aspect-[2/1] w-full max-h-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] border border-stroke bg-bg relative">
                            <img
                              src={project.images.col2}
                              alt={`${project.name} Grid Left`}
                              loading="lazy"
                              className="w-full h-full object-cover select-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center">
                          <div className="aspect-[2/1] w-full max-h-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] border border-stroke bg-bg relative">
                            <img
                              src={project.images.col1_top}
                              alt={`${project.name} Grid Right`}
                              loading="lazy"
                              className="w-full h-full object-cover select-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Standard 3-image layout (60% / 40%) */}
                        {/* Left Column (60% width) - 1 Main Aspect-Matched Image */}
                        <div className="w-[60%] h-full flex items-center justify-center">
                          <div className="aspect-[2/1] w-full max-h-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] border border-stroke bg-bg relative">
                            <img
                              src={project.images.col2}
                              alt={`${project.name} Grid 3`}
                              loading="lazy"
                              className={`w-full h-full object-cover ${project.id === 4 ? 'object-left' : 'object-center'} select-none filter brightness-90 hover:brightness-100 transition-all duration-300`}
                            />
                          </div>
                        </div>

                        {/* Right Column (40% width) - 2 Stacked Aspect-Matched Images */}
                        <div className="w-[40%] flex flex-col gap-3 h-full justify-center">
                          <div className="aspect-[2/1] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] border border-stroke bg-bg relative">
                            <img
                              src={project.images.col1_top}
                              alt={`${project.name} Grid 1`}
                              loading="lazy"
                              className="w-full h-full object-cover select-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                            />
                          </div>
                          <div className="aspect-[2/1] w-full overflow-hidden rounded-[18px] sm:rounded-[24px] md:rounded-[32px] border border-stroke bg-bg relative">
                            <img
                              src={project.images.col1_bottom}
                              alt={`${project.name} Grid 2`}
                              loading="lazy"
                              className="w-full h-full object-cover select-none filter brightness-90 hover:brightness-100 transition-all duration-300"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Popup overlay */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 bg-surface border border-stroke rounded-[24px] sm:rounded-[32px] max-w-2xl w-full p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-5 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-muted hover:text-text cursor-pointer p-2 rounded-full hover:bg-stroke/60 transition-colors duration-200"
                aria-label="Close details"
              >
                <span className="text-xl sm:text-2xl leading-none block">&times;</span>
              </button>

              {/* Title Header */}
              <div className="flex flex-col gap-1 border-b border-stroke pb-4 pr-8">
                <span className="text-muted font-display italic font-semibold text-xl leading-none">
                  Project {activeModalProject.num}
                </span>
                <h3 className="text-text font-semibold text-2xl sm:text-3xl leading-tight mt-1">
                  {activeModalProject.name}
                </h3>
                <span className="text-muted uppercase tracking-widest text-[10px] sm:text-xs mt-1">
                  {activeModalProject.category}
                </span>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {activeModalProject.techList.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[9px] sm:text-[10px] md:text-xs font-mono rounded-full bg-stroke/60 text-text/90 border border-stroke"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullet details */}
              <div className="flex flex-col gap-3 py-2">
                <h4 className="text-text font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Key Achievements & Implementation:
                </h4>
                <ul className="flex flex-col gap-3 list-none pl-0 text-muted text-xs sm:text-sm leading-relaxed">
                  {activeModalProject.details.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="text-muted/60 mt-1 select-none text-xs">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images Row preview */}
              <div className="flex flex-col gap-2 py-2">
                <h4 className="text-text font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Screenshots & Interface:
                </h4>
                <div className="flex gap-3 overflow-x-auto pb-3 pr-2 scroll-smooth">
                  {activeModalProject.imageUrls.map((imgUrl, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={imgUrl}
                      alt={`${activeModalProject.name} screenshot ${imgIdx + 1}`}
                      className="h-32 sm:h-40 md:h-48 w-auto object-cover rounded-xl filter brightness-95 border border-stroke flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

              {/* Codebase Github button */}
              <div className="flex justify-end pt-2">
                <LiveProjectButton href={activeModalProject.link} label="Codebase" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
