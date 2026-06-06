"use client";

import React from 'react';
import FadeIn from './FadeIn';

interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  details?: string;
}

/**
 * ResumeSection renders the developer's Education and Extracurricular timeline under the Profile header.
 * Integrates directly before the Footer.
 */
export default function ResumeSection() {
  const education: TimelineItem[] = [
    {
      period: 'Undergraduate',
      title: 'Sri Lanka Institute of Information Technology (SLIIT)',
      subtitle: 'BSc (Hons) in Information Technology',
      details: 'Specializing in Software Engineering'
    },
    {
      period: 'High School',
      title: 'Jaffna Hindu College',
      subtitle: 'Advanced Level Education'
    }
  ];

  const extracurriculars: TimelineItem[] = [
    {
      period: '2025',
      title: 'President – School Interact Club',
      subtitle: 'Rotary International, Jaffna Hindu College'
    },
    {
      period: '2025-FEB 2026',
      title: 'AIESEC in SLIIT',
      subtitle: 'OGTe IR (Incoming Global Teacher Relations) & IM&TM (Information Management & Talent Management) Teams'
    }
  ];

  return (
    <section
      id="profile"
      className="bg-bg text-text px-5 sm:px-8 md:px-10 pt-6 pb-16 sm:pt-8 sm:pb-20 md:pt-10 md:pb-24 border-t border-stroke relative z-20 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <FadeIn y={30} delay={0} duration={0.8}>
          <h2 className="font-display italic font-semibold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-12 sm:mb-16 tracking-tight">
            Profile
          </h2>
        </FadeIn>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full pt-4">

          {/* Left Column: Education */}
          <div className="flex flex-col gap-6">
            <FadeIn y={20} delay={0.1} duration={0.8}>
              <h3 className="text-[#89AACC] font-semibold uppercase tracking-wider text-xs sm:text-sm border-b border-stroke pb-3 flex justify-between items-center">
                <span>Education</span>
                <span className="text-[10px] text-muted normal-case font-mono">Academic Background</span>
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-6 pl-1 border-l border-stroke/70 ml-1">
              {education.map((edu, idx) => (
                <FadeIn key={idx} y={20} delay={0.2 + idx * 0.1} duration={0.8} className="relative pl-6">
                  {/* Timeline dot */}
                  <div className="absolute top-1.5 left-[-5px] w-2.5 h-2.5 rounded-full bg-[#89AACC] border border-bg" />

                  <span className="text-muted text-[10px] sm:text-xs font-mono block mb-1">
                    {edu.period}
                  </span>
                  <h4 className="text-text font-semibold text-sm sm:text-base leading-snug">
                    {edu.title}
                  </h4>
                  <p className="text-muted text-xs sm:text-sm mt-1">
                    {edu.subtitle}
                  </p>
                  {edu.details && (
                    <p className="text-[#4E85BF] text-[11px] sm:text-xs font-medium mt-0.5">
                      {edu.details}
                    </p>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Column: Extracurriculars */}
          <div className="flex flex-col gap-6">
            <FadeIn y={20} delay={0.1} duration={0.8}>
              <h3 className="text-[#4E85BF] font-semibold uppercase tracking-wider text-xs sm:text-sm border-b border-stroke pb-3 flex justify-between items-center">
                <span>Extracurriculars</span>
                <span className="text-[10px] text-muted normal-case font-mono">Leadership & Experience</span>
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-6 pl-1 border-l border-stroke/70 ml-1">
              {extracurriculars.map((activity, idx) => (
                <FadeIn key={idx} y={20} delay={0.2 + idx * 0.1} duration={0.8} className="relative pl-6">
                  {/* Timeline dot */}
                  <div className="absolute top-1.5 left-[-5px] w-2.5 h-2.5 rounded-full bg-[#4E85BF] border border-bg" />

                  <span className="text-muted text-[10px] sm:text-xs font-mono block mb-1">
                    {activity.period}
                  </span>
                  <h4 className="text-text font-semibold text-sm sm:text-base leading-snug">
                    {activity.title}
                  </h4>
                  <p className="text-muted text-xs sm:text-sm mt-1 leading-snug">
                    {activity.subtitle}
                  </p>
                  {activity.details && (
                    <p className="text-[#89AACC] text-[11px] sm:text-xs font-medium mt-0.5">
                      {activity.details}
                    </p>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
