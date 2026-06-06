"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Create", "Inspire"];

/**
 * LoadingScreen displays a 2.7-second introductory counter and sequence rotating text
 * along with a progress bar, before notifying the AppWrapper to fade in page content.
 */
export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [count, setCount] = useState(0);

  // Sequence word switcher: changes word index every 900ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    }, 900);
    return () => clearInterval(wordInterval);
  }, []);

  // Frame count up anim: 0 -> 100 in 2.7s
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2700; // 2.7s

    const countAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(countAnimation);
      } else {
        // Complete counter animation, wait 400ms, then trigger complete transition callback
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 400);
        return () => clearTimeout(completeTimeout);
      }
    };

    const animFrame = requestAnimationFrame(countAnimation);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  const formattedCount = String(count).padStart(3, '0');

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-12 select-none"
    >
      {/* Top Left: Subtitle */}
      <div className="flex justify-start items-start">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs md:text-sm text-muted uppercase tracking-[0.3em] font-medium"
        >
          Portfolio
        </motion.span>
      </div>

      {/* Center: Sequential Word Rotator */}
      <div className="flex justify-center items-center h-full">
        <div className="h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[wordIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="font-display italic text-text text-4xl md:text-6xl lg:text-7xl tracking-wide"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Right: Digital Counter */}
      <div className="flex justify-end items-end">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-7xl md:text-[7rem] lg:text-[9rem] leading-none font-display text-text tabular-nums select-none"
        >
          {formattedCount}
        </motion.span>
      </div>

      {/* Bottom thin progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/30 w-full overflow-hidden">
        <div
          className="h-full bg-accent-gradient transition-transform duration-75 ease-out"
          style={{
            transform: `scaleX(${count / 100})`,
            transformOrigin: 'left',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.5)'
          }}
        />
      </div>
    </motion.div>
  );
}
