"use client";

import React from 'react';

/**
 * AppWrapper handles wrapping classes for the portfolio site.
 * Modified to load the page content instantly without a preloader delay.
 */
export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen bg-bg">
      {children}
    </div>
  );
}
