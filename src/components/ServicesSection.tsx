"use client";

import React from 'react';
import FadeIn from './FadeIn';

interface Service {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

const services: Service[] = [
  {
    id: '01',
    name: 'Full-stack development',
    description: 'Building end-to-end web applications from responsive UIs to scalable server-side logic and databases.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL']
  },
  {
    id: '02',
    name: 'Mobile development',
    description: 'Creating native Android applications with intuitive UI and local functionality for student productivity.',
    skills: ['Kotlin', 'Android SDK', 'XML Layouts', 'Android Studio']
  },
  {
    id: '03',
    name: 'Backend & API engineering',
    description: 'Designing secure REST APIs and server-side systems with authentication and role-based access control.',
    skills: ['Java', 'JSP', 'Servlets', 'JWT Auth', 'REST APIs']
  },
  {
    id: '04',
    name: 'DevOps & deployment',
    description: 'Containerizing and deploying applications using modern DevOps tools and microservices architecture.',
    skills: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'Postman']
  }
];

/**
 * ServicesSection renders details of expertise.
 * Features a high contrast pure-white layout theme.
 */
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0A0A0A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 relative z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn y={30} delay={0} duration={0.8}>
          <h2 className="font-display italic font-semibold text-center text-4xl sm:text-5xl md:text-[5rem] lg:text-[6.5rem] leading-none mb-10 sm:mb-12 md:mb-16 tracking-tight select-none">
            What I Do
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col border-t border-black/15">
          {services.map((service, index) => (
            <FadeIn
              key={service.id}
              y={30}
              delay={index * 0.1}
              duration={0.8}
              className="w-full flex flex-row items-center gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-black/15"
            >
              {/* Left Number */}
              <div
                className="font-display italic font-semibold text-black/40 leading-none tracking-tight select-none min-w-[70px] sm:min-w-[120px] md:min-w-[180px]"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}
              >
                {service.id}
              </div>

              {/* Right content: Name, Description & Skills */}
              <div className="flex flex-col gap-2 flex-grow">
                <h3
                  className="font-semibold uppercase text-black leading-snug tracking-wider text-xs sm:text-sm md:text-base"
                >
                  {service.name}
                </h3>
                <p
                  className="font-light text-black/60 leading-relaxed max-w-2xl text-xs sm:text-sm md:text-base mb-2"
                >
                  {service.description}
                </p>
                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-[9px] sm:text-[10px] md:text-xs font-mono rounded-full bg-black/5 text-black/80 border border-black/10 select-none transition-colors duration-200 hover:bg-black/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
