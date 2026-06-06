"use client";

import React, { useState } from 'react';

interface ProfileAvatarProps {
  size?: 'mini' | 'small' | 'medium' | 'large';
  className?: string;
}

/**
 * ProfileAvatar renders the developer's profile picture.
 * Dynamically falls back to a stylized gradient container with initials
 * if the image at /assets/profile.jpg is missing or fails to load.
 */
export default function ProfileAvatar({ size = 'medium', className = '' }: ProfileAvatarProps) {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    mini: 'w-6 h-6',
    small: 'w-12 h-12 border border-white/10',
    medium: 'w-20 h-20 border-2 border-white/10',
    large: 'w-24 h-24 sm:w-28 sm:h-28 border-2 border-white/10',
  };

  const isMini = size === 'mini';

  return (
    <div
      className={`
        relative rounded-full overflow-hidden 
        ${isMini ? '' : 'hover:border-[#89AACC] shadow-lg shadow-black/30 cursor-pointer group'} 
        transition-all duration-300 ${sizeClasses[size]} ${className}
      `}
    >
      {!imgError ? (
        <img
          src="/assets/profile.jpg"
          alt="Sanjeevan Muralitharan"
          onError={() => setImgError(true)}
          className={`w-full h-full object-cover ${isMini ? '' : 'transition-transform duration-500 group-hover:scale-105'}`}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-tr from-[#4E85BF] to-[#89AACC] flex items-center justify-center text-white font-display italic select-none">
          <span className={`${size === 'large' ? 'text-2xl' : size === 'medium' ? 'text-lg' : size === 'small' ? 'text-[10px]' : 'text-[6px]'}`}>
            SM
          </span>
        </div>
      )}
    </div>
  );
}
