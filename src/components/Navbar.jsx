import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#F7F5EF]/85 backdrop-blur-md py-3.5 border-b border-[#DFDDD5]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo Name */}
          <a 
            href="#" 
            className="text-base font-bold tracking-tight text-[#171917] hover:opacity-80 transition-opacity"
          >
            Humaeil Abbas
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#666861]">
            <a href="#work" className="hover:text-[#171917] transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-[#171917] transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-[#171917] transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#171917] text-[#F7F5EF] px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#284A43] transition-colors group"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171917] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F5EF] pt-24 px-6 pb-10 flex flex-col justify-between md:hidden">
          <nav className="flex flex-col gap-6 text-2xl font-bold text-[#171917]">
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>

          <div className="pt-6 border-t border-[#DFDDD5]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#171917] text-[#F7F5EF] py-3.5 rounded-full text-sm font-semibold"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
