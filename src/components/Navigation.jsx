import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F4F3EF]/90 backdrop-blur-md py-4 border-b border-[#161616]/10'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="text-lg md:text-xl font-heading font-semibold tracking-tight text-[#161616] hover:text-[#E24A26] transition-colors"
          >
            {portfolioData.personalInfo.name}
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-[#787670]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#161616] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E24A26] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Start a project CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border border-[#161616] text-[#161616] hover:bg-[#161616] hover:text-[#F4F3EF] transition-all duration-300"
            >
              Start a project
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#161616] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span
                className={`h-[2px] bg-[#161616] transition-all duration-300 ${
                  mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                }`}
              />
              <span
                className={`h-[2px] bg-[#161616] transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'w-4'
                }`}
              />
              <span
                className={`h-[2px] bg-[#161616] transition-all duration-300 ${
                  mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F4F3EF] flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-heading font-semibold text-[#161616] hover:text-[#E24A26] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-[#161616]/10 flex flex-col space-y-4">
              <a
                href={portfolioData.personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-full bg-[#161616] text-[#F4F3EF] text-sm font-semibold tracking-wider uppercase"
              >
                Start a project
              </a>
              <p className="text-xs text-[#787670] text-center">
                {portfolioData.personalInfo.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
