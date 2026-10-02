import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section
      className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
        {/* Left Column: Typography & Intent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          {/* Location / Status tag */}
          <div className="inline-flex items-center space-x-3 text-xs md:text-sm font-medium text-[#787670] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#E24A26] animate-pulse" />
            <span>{portfolioData.personalInfo.location}</span>
          </div>

          {/* Headline Name & Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-semibold text-[#161616] tracking-tight leading-[1.08]">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-heading font-medium text-[#E24A26] tracking-tight">
              {portfolioData.personalInfo.role}
            </p>
          </div>

          {/* Supporting Statement */}
          <p className="text-lg sm:text-xl text-[#787670] font-normal leading-relaxed max-w-2xl">
            {portfolioData.personalInfo.statement}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a
              href="#work"
              className="inline-flex items-center px-8 py-4 bg-[#161616] text-[#F4F3EF] text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#E24A26] transition-colors duration-300 shadow-sm"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border border-[#161616]/30 text-[#161616] text-sm font-semibold tracking-wider uppercase rounded-full hover:border-[#161616] hover:bg-[#161616] hover:text-[#F4F3EF] transition-all duration-300"
            >
              Start a project
            </a>
          </div>

          {/* Quick Credibility Micro-Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#161616]/10 max-w-lg">
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] tracking-tight">5+</p>
              <p className="text-[11px] text-[#787670] uppercase tracking-wider mt-1 font-medium">Selected Works</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] tracking-tight">Shopify</p>
              <p className="text-[11px] text-[#787670] uppercase tracking-wider mt-1 font-medium">&amp; Modern React</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-heading font-semibold text-[#E24A26] tracking-tight">3x Fast</p>
              <p className="text-[11px] text-[#787670] uppercase tracking-wider mt-1 font-medium">AI-Aided Delivery</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Clean Minimal Lightweight Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end"
        >
          <div className="w-full max-w-[280px] sm:max-w-[320px]">
            <div className="relative rounded-2xl overflow-hidden bg-[#EAE7E0] border border-[#161616]/10 aspect-[4/5]">
              <img
                src="/projects_frontend_pics/profile.png"
                alt="Humaeil Abbas"
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </div>
            <div className="flex items-center justify-between text-xs text-[#787670] mt-3 px-1 font-mono">
              <span>Humaeil Abbas</span>
              <span className="text-[#E24A26]">● Available</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pt-12 flex items-center justify-between text-xs text-[#787670] border-t border-[#161616]/10"
      >
        <span className="font-mono tracking-widest uppercase">01 / Introduction</span>
        <a href="#work" className="hover:text-[#161616] transition-colors flex items-center space-x-2">
          <span>Scroll to explore projects</span>
          <span className="text-sm">↓</span>
        </a>
      </motion.div>
    </section>
  );
};
