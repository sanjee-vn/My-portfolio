"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof typeof motion | string;
  className?: string;
  id?: string;
}

/**
 * FadeIn viewport animation trigger component.
 * Maps elements dynamically to motion tags.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  id
}: FadeInProps) {
  // Safe mapping of tag name to Framer Motion element
  // Cast to any for dynamic string keys like 'section', 'div', etc.
  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      id={id}
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </MotionComponent>
  );
}
