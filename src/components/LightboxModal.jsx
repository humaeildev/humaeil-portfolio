import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ImageFallback from './ImageFallback';

export default function LightboxModal({ isOpen, onClose, title, issuer, year, image }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12302D]/85 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#F4F1E8] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#12302D]/15 bg-[#EBE8DC]">
          <div>
            <h3 className="text-lg font-bold text-[#12302D]">{title}</h3>
            <span className="text-xs font-mono text-[#71877D]">{issuer} · {year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#12302D] hover:bg-[#D9D0BC] transition-colors rounded-full"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          <div className="bg-[#EBE8DC] overflow-hidden">
            <ImageFallback 
              src={image} 
              alt={title} 
              placeholderTitle={title}
              category="Credential"
              aspectRatio="aspect-[16/10]"
              className="w-full max-h-[500px] object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
