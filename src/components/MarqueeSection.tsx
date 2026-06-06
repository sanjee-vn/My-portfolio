"use client";

import React, { useState, useEffect, useRef } from 'react';
import { marqueeImages } from '@/config/marquee';

/**
 * MarqueeSection renders two rows of scrolling image items.
 * Horizontal offsets are dynamically updated based on active scroll tracking.
 */
export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamically split image array in half so both rows have content
  const half = Math.ceil(marqueeImages.length / 2);
  const row1 = marqueeImages.slice(0, half);
  const row2 = marqueeImages.slice(half);

  // Repeat the images to ensure a smooth, long scrolling track
  const row1Images = [...row1, ...row1, ...row1, ...row1, ...row1];
  const row2Images = [...row2, ...row2, ...row2, ...row2, ...row2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 w-full overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: moves RIGHT on scroll */}
        <div
          className="flex flex-row gap-3 flex-nowrap w-max"
          style={{
            transform: `translate3d(${offset - 200}px, 0px, 0px)`,
            willChange: 'transform'
          }}
        >
          {row1Images.map((src, idx) => (
            <img
              key={`r1-${idx}`}
              src={src}
              alt={`Project Preview ${idx}`}
              loading="lazy"
              className="h-[150px] sm:h-[190px] md:h-[220px] w-auto rounded-2xl object-cover flex-shrink-0 border border-stroke"
            />
          ))}
        </div>

        {/* Row 2: moves LEFT on scroll */}
        <div
          className="flex flex-row gap-3 flex-nowrap w-max"
          style={{
            transform: `translate3d(${-(offset - 200)}px, 0px, 0px)`,
            willChange: 'transform'
          }}
        >
          {row2Images.map((src, idx) => (
            <img
              key={`r2-${idx}`}
              src={src}
              alt={`Project Preview ${idx}`}
              loading="lazy"
              className="h-[150px] sm:h-[190px] md:h-[220px] w-auto rounded-2xl object-cover flex-shrink-0 border border-stroke"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
