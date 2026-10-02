import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const ContactSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="bg-[#121212] text-[#F4F3EF] py-28 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Header Tag */}
        <div className="flex items-center space-x-3 text-xs font-semibold tracking-widest text-[#E24A26] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#E24A26] animate-pulse" />
          <span>Get In Touch</span>
        </div>

        {/* Large Statement Title */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-semibold tracking-tight leading-[1.05]">
            Got a project, store redesign, <br />
            <span className="text-[#E24A26]">or freelance contract?</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#A09E96] font-normal leading-relaxed max-w-2xl">
            Whether you need a custom Shopify storefront, a high-converting landing page, or a complete web redesign — drop a line and let's get it shipped.
          </p>
        </div>

        {/* Direct Action Links & Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#F4F3EF]/10">
          {/* Email Channel */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#787670]">Direct Email</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-xl sm:text-2xl font-heading font-semibold text-[#F4F3EF] hover:text-[#E24A26] transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* WhatsApp Channel */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#787670]">WhatsApp</span>
            <a
              href={personalInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl sm:text-2xl font-heading font-semibold text-[#F4F3EF] hover:text-[#E24A26] transition-colors"
            >
              {personalInfo.whatsappNumber}
            </a>
          </div>

          {/* LinkedIn Channel */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase text-[#787670]">LinkedIn Profile</span>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl sm:text-2xl font-heading font-semibold text-[#F4F3EF] hover:text-[#E24A26] transition-colors truncate"
            >
              {personalInfo.linkedInDisplay}
            </a>
          </div>
        </div>

        {/* Big Interactive Call to Action Button */}
        <div className="pt-8 flex flex-wrap items-center gap-6">
          <a
            href={personalInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-[#E24A26] text-[#F4F3EF] text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-white hover:text-[#121212] transition-colors duration-300 shadow-lg"
          >
            Start a project on WhatsApp
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-10 py-5 border border-[#F4F3EF]/20 text-[#F4F3EF] text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-white hover:text-[#121212] hover:border-white transition-all duration-300"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
};
