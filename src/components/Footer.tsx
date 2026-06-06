"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import FadeIn from './FadeIn';
import ProfileAvatar from './ProfileAvatar';

/**
 * Footer component acts as the Contact section.
 * Renders professional contact cards and social profiles.
 */
export default function Footer() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#89AACC]" />,
      label: 'Email Me',
      value: 'sanjevmurali@gmail.com',
      href: 'mailto:sanjevmurali@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#4E85BF]" />,
      label: 'Call Me',
      value: '+94 77 174 9011',
      href: 'tel:+94771749011'
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#D7E2EA]" />,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      href: 'https://maps.google.com/?q=Colombo,SriLanka'
    }
  ];

  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/sanjee-vn',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/sanjeevan-muralitharan',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer
      id="contact"
      className="bg-bg text-text px-5 sm:px-8 md:px-10 py-16 sm:py-24 border-t border-stroke relative z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <FadeIn y={30} delay={0} duration={0.8}>
          <h2 className="text-text font-display italic font-semibold text-center text-4xl sm:text-5xl md:text-[5rem] lg:text-[6.5rem] mb-12 sm:mb-16 tracking-tight leading-none">
            Let&apos;s talk
          </h2>
        </FadeIn>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12 sm:mb-16">
          {contactInfo.map((info, index) => (
            <FadeIn
              key={info.label}
              y={20}
              delay={index * 0.1}
              duration={0.8}
              className="w-full"
            >
              <a
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-[24px] border border-stroke bg-surface/50 hover:bg-surface hover:border-[#89AACC]/40 transition-all duration-300 group"
              >
                <div className="p-3 bg-bg border border-stroke rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <span className="text-muted uppercase tracking-widest text-[9px] sm:text-[10px] mb-1 font-medium">
                  {info.label}
                </span>
                <span className="text-text font-medium text-xs sm:text-sm md:text-base break-all">
                  {info.value}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Social profiles and footer copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full pt-8 border-t border-stroke gap-6">
          {/* Left copyright */}
          <span className="text-muted text-xs sm:text-sm font-light select-none">
            &copy; {new Date().getFullYear()} Sanjeevan Muralitharan. All Rights Reserved.
          </span>

          {/* Right socials */}
          <div className="flex items-center gap-4">
            <ProfileAvatar size="small" className="border-stroke hover:border-[#89AACC]/40 shadow-none cursor-default" />
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 bg-surface/50 border border-stroke rounded-full text-muted transition-all duration-300 hover:text-text hover:bg-stroke/60 hover:scale-110 active:scale-95"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
