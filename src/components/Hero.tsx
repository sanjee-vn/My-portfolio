"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';

const roles = ["Creative", "Fullstacker", "Builder", "Scholar"];

/**
 * Hero renders the fullscreen landing page presentation.
 * Integrates an HLS background video player (using hls.js), GSAP slide and blur
 * entry timelines, and a cycling role text rotator.
 */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Mux video streaming and fallback setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://stream.mux.com/Gs3wZfrtz6ZfqZqQ02c02Z7lugV00FGZvRpcqFTel66r3g.m3u8";

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari / iOS)
      video.src = videoSrc;
    } else if (Hls.isSupported()) {
      // Chrome / Edge / Firefox HLS playback
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Name entrance: y 50->0, opacity 0->1, duration 1.2s, starts at 0.1s
      tl.fromTo('.name-reveal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      );

      // Other elements: blur 10px->0px, opacity 0->1, y 20->0, stagger 0.1s, starts at 0.3s
      tl.fromTo('.blur-in',
        { opacity: 0, y: 20, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, stagger: 0.1 },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Cycles through developer role designations every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollClick = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-bg z-10"
    >
      {/* Background Video cover */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-35"
        />
        {/* Shadow overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 text-center max-w-2xl px-6 flex flex-col items-center pt-16 sm:pt-20">
        {/* Eyebrow Label */}
        <span className="blur-in text-xs text-muted font-medium uppercase tracking-[0.3em] mb-8 select-none">
          Hello World, I'm
        </span>

        {/* Big Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-[7.5rem] font-display italic leading-[0.95] tracking-tight text-text mb-6 select-none">
          Sanjeevan Muralitharan
        </h1>

        {/* Dynamic Role Rotator */}
        <div className="blur-in text-lg md:text-xl lg:text-2xl text-muted mb-10 h-8 flex items-center justify-center select-none font-light uppercase tracking-wide">
          <span>A&nbsp;</span>
          <span
            key={roleIndex}
            className="font-display italic text-text font-semibold lowercase tracking-normal animate-fade-in"
          >
            {roles[roleIndex]}
          </span>
          <span>&nbsp;lives in Srilanka.</span>
        </div>

        {/* Bio Paragraph */}
        <p className="blur-in text-sm md:text-base text-muted leading-relaxed max-w-xl text-balance mb-12 select-none">
          A passionate Software Engineer in the making — building scalable systems, full-stack applications, and real-world solutions.
        </p>

        {/* CTA buttons */}
        <div className="blur-in flex flex-row gap-4 items-center justify-center select-none">
          {/* Button 1: See Works */}
          <div className="p-[2px] relative group overflow-hidden rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScrollClick();
              }}
              className="relative block px-7 py-3.5 bg-text text-bg text-sm font-semibold rounded-full uppercase tracking-wider text-center"
            >
              See Works
            </a>
          </div>

          {/* Button 2: Reach out */}
          <div className="p-[2px] relative group overflow-hidden rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            <div className="absolute inset-0 bg-accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative block px-7 py-3.5 bg-bg text-text text-sm font-semibold rounded-full border border-stroke uppercase tracking-wider text-center"
            >
              Reach out...
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollClick}
        className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 select-none"
      >
        <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-text-accent-gradient rounded-full bg-accent-gradient animate-scroll-dot" />
        </div>
      </button>
    </section>
  );
}
