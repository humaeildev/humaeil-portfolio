import React, { useState } from 'react';

export default function ImageFallback({ 
  src, 
  alt, 
  className = "", 
  placeholderTitle = "PROJECT IMAGE PLACEHOLDER", 
  category = "Website Design",
  aspectRatio = "aspect-[16/10]"
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div 
        className={`w-full ${aspectRatio} bg-[#EBE8DE] rounded-xl relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden select-none group ${className}`}
      >
        <div className="flex justify-between items-center text-xs text-[#666861] font-medium">
          <span>{category}</span>
          <span className="text-[11px] opacity-70">PLACEHOLDER</span>
        </div>

        <div className="my-auto text-center py-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#171917] max-w-[280px] mx-auto">
            {placeholderTitle}
          </h4>
          <p className="text-xs text-[#666861] mt-1">
            Replace image path in portfolioData.js
          </p>
        </div>

        <div className="flex justify-between items-center text-[11px] text-[#666861]/70">
          <span>HUMAEIL ABBAS</span>
          <span>2026</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt || placeholderTitle}
      onError={() => setImageError(true)}
      className={`w-full object-cover rounded-xl ${className}`}
    />
  );
}
