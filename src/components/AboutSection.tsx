"use client";

import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import { ContactButton } from './Buttons';

/**
 * AboutSection renders the developer biography, metrics,
 * and background coordinates in Colombo.
 */
export default function AboutSection() {
  const paragraphText =
    "As a Software Engineering undergraduate, I am passionate about creating software that solves real-world problems. I enjoy designing scalable systems, building end-to-end applications, and continuously learning new technologies to deliver impactful digital solutions.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-bg px-5 sm:px-8 md:px-10 py-20 z-20"
    >
      {/* 3D Corner Decor - Top Left (Moon) */}
      <FadeIn
        x={-80}
        y={0}
        delay={0.1}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Decorative Moon"
          className="w-full h-auto object-contain opacity-40 filter grayscale"
          draggable="false"
        />
      </FadeIn>

      {/* 3D Corner Decor - Bottom Left (Object) */}
      <FadeIn
        x={-80}
        y={0}
        delay={0.25}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none select-none z-10 w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Abstract Object"
          className="w-full h-auto object-contain opacity-40 filter grayscale"
          draggable="false"
        />
      </FadeIn>

      {/* 3D Corner Decor - Top Right (Lego) */}
      <FadeIn
        x={80}
        y={0}
        delay={0.15}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none z-10 w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Decorative Lego"
          className="w-full h-auto object-contain opacity-40 filter grayscale"
          draggable="false"
        />
      </FadeIn>

      {/* 3D Corner Decor - Bottom Right (Group) */}
      <FadeIn
        x={80}
        y={0}
        delay={0.3}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none select-none z-10 w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Abstract Elements"
          className="w-full h-auto object-contain opacity-40 filter grayscale"
          draggable="false"
        />
      </FadeIn>

      {/* Centered Bio Content */}
      <div className="relative z-20 flex flex-col items-center max-w-[800px] w-full text-center">
        <FadeIn y={40} delay={0} duration={0.8}>
          <h2 className="text-text font-display italic font-semibold text-center text-4xl sm:text-5xl md:text-[5rem] lg:text-[6.5rem] leading-none mb-10 sm:mb-14 md:mb-16 select-none">
            About me
          </h2>
        </FadeIn>

        {/* Character scroll animation text */}
        <AnimatedText
          text={paragraphText}
          className="text-text font-medium text-center leading-relaxed max-w-[560px] text-base sm:text-lg md:text-xl lg:text-[1.35rem] mb-16 sm:mb-20 md:mb-24 px-4"
        />

        <FadeIn y={30} delay={0.4} duration={0.8}>
          <ContactButton href="#contact" label="Get In Touch" />
        </FadeIn>
      </div>
    </section>
  );
}
