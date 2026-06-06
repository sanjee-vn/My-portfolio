"use client";

import React from 'react';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  label?: string;
  className?: string;
}

/**
 * ContactButton renders a fuchsia-mesh pill button with inset shadows.
 */
export function ContactButton({
  onClick,
  href = '#contact',
  label = 'Contact Me',
  className = ''
}: ButtonProps) {
  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
    outline: '2px solid white',
    outlineOffset: '-3px'
  };

  const baseClasses = `
    inline-block rounded-full text-white font-medium uppercase tracking-widest text-center
    transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-[10px] sm:text-xs md:text-sm
    ${className}
  `.trim();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) onClick(e);
  };

  return (
    <a href={href} onClick={handleClick} style={buttonStyle} className={baseClasses}>
      {label}
    </a>
  );
}

interface LiveProjectProps {
  href: string;
  label?: string;
  className?: string;
}

/**
 * LiveProjectButton renders a ghost button with customizable links.
 */
export function LiveProjectButton({
  href,
  label = 'Codebase',
  className = ''
}: LiveProjectProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-block rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] 
        font-medium uppercase tracking-widest text-center
        px-6 py-2 sm:px-8 sm:py-2.5 
        text-[10px] sm:text-xs
        transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA] hover:scale-105 active:scale-95
        ${className}
      `.trim()}
    >
      {label}
    </a>
  );
}
