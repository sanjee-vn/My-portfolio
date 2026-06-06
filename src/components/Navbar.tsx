"use client";

import React, { useState, useEffect } from 'react';

/**
 * Navbar renders a floating glassmorphic nav pill with logo effects
 * and smooth anchor scrolling links.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position to apply box shadow on pill
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Section tracker to set active tab indicator
      const sections = ['home', 'services', 'projects', 'profile', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skills', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Profile', href: '#profile', id: 'profile' }
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 select-none">
      <div
        className={`
          inline-flex items-center rounded-full border border-white/10 bg-surface/75 backdrop-blur-md px-3 py-2 
          transition-all duration-300
          ${isScrolled ? 'shadow-md shadow-black/20 border-white/15' : ''}
        `}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, '#home')}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="relative block w-9 h-9 rounded-full p-[2px] transition-transform duration-300 active:scale-95 cursor-pointer"
          style={{
            background: logoHovered
              ? 'linear-gradient(90deg, #4E85BF 0%, #89AACC 100%)'
              : 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)'
          }}
        >
          <div className="w-full h-full rounded-full bg-bg flex items-center justify-center overflow-hidden">
            <span
              className="font-display italic text-[13px] tracking-tighter text-text/90 transition-transform duration-300 select-none"
              style={{ transform: logoHovered ? 'scale(1.15)' : 'scale(1)' }}
            >
              SM
            </span>
          </div>
        </a>

        {/* Divider 1 - Hidden on Mobile */}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-2" />

        {/* Navigation Links */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`
                  text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full px-3 sm:px-4 py-1.5 sm:py-2
                  transition-all duration-200 cursor-pointer
                  ${isActive 
                    ? 'text-text bg-stroke/60 font-semibold' 
                    : 'text-muted hover:text-text hover:bg-stroke/40'
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Divider 2 */}
        <div className="w-px h-5 bg-stroke mx-2" />

        {/* Contact CTA Tab */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, '#contact')}
          className="text-xs sm:text-sm font-medium uppercase tracking-wider rounded-full px-4 py-1.5 sm:py-2 text-muted hover:text-text transition-all duration-200 cursor-pointer"
          style={{
            border: '1px solid transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderImage = 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%) 1';
            e.currentTarget.style.borderRadius = '9999px'; // keep pill shape
            e.currentTarget.style.backgroundColor = 'var(--stroke)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderImage = 'none';
            e.currentTarget.style.border = '1px solid transparent';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Say hi ↗
        </a>
      </div>
    </header>
  );
}
