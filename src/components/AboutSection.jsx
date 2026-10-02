import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const AboutSection = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#161616]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column Heading */}
        <div className="lg:col-span-4">
          <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#161616] mt-2">
            Design &amp; Development Approach
          </h2>
        </div>

        {/* Right Column Content Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 space-y-8"
        >
          <p className="text-2xl sm:text-3xl font-heading font-medium text-[#161616] leading-tight">
            "{personalInfo.aboutShort}"
          </p>

          <p className="text-base sm:text-lg text-[#787670] leading-relaxed">
            {personalInfo.aboutFull}
          </p>

          {/* 3 Core Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#161616]/10">
            <div className="p-6 rounded-2xl bg-[#EAE7E0]/70 border border-[#161616]/10 hover:border-[#E24A26]/40 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#E24A26] tracking-wider uppercase">01 / Commercial</span>
                <h4 className="text-base font-heading font-semibold text-[#161616] tracking-tight mt-2 mb-2">
                  Merchant Mindset
                </h4>
                <p className="text-xs sm:text-sm text-[#787670] leading-relaxed">
                  Running my own brand (The Emverii) taught me what actually moves the needle. I don't build vanity designs — I build stores focused on sales, conversion, and repeat customers.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-[#EAE7E0]/70 border border-[#161616]/10 hover:border-[#E24A26]/40 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#E24A26] tracking-wider uppercase">02 / Code Craft</span>
                <h4 className="text-base font-heading font-semibold text-[#161616] tracking-tight mt-2 mb-2">
                  Clean &amp; Lightweight
                </h4>
                <p className="text-xs sm:text-sm text-[#787670] leading-relaxed">
                  Custom Shopify Liquid, React, and Tailwind. Zero theme bloat, fast load times under 2 seconds, and seamless responsiveness across all screen sizes.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-[#EAE7E0]/70 border border-[#161616]/10 hover:border-[#E24A26]/40 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#E24A26] tracking-wider uppercase">03 / Modern Speed</span>
                <h4 className="text-base font-heading font-semibold text-[#161616] tracking-tight mt-2 mb-2">
                  AI-Powered Velocity
                </h4>
                <p className="text-xs sm:text-sm text-[#787670] leading-relaxed">
                  I integrate smart AI workflows and automated tooling to prototype layouts, generate creative assets, and ship production-ready deliverables in days instead of weeks.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
