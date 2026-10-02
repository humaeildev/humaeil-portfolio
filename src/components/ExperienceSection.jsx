import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection = () => {
  const { experience } = portfolioData;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#161616]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Section Header */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#161616]">
            Background &amp; Roles
          </h2>
          <p className="text-sm text-[#787670]">
            Hands-on brand operations, agency internship, client freelance development, and technical growth.
          </p>
        </div>

        {/* Right Editorial Rows List (NO cards, NO timelines with circles!) */}
        <div className="lg:col-span-8 divide-y divide-[#161616]/10">
          {experience.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={item.company}
                onClick={() => toggleExpand(index)}
                className="py-7 group cursor-pointer transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#161616] group-hover:text-[#E24A26] transition-colors">
                      {item.company}
                    </h3>
                    <p className="text-sm font-medium text-[#787670]">
                      {item.role}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-mono text-[#787670]">
                      {item.period}
                    </span>
                    <span className="text-[#161616] group-hover:text-[#E24A26] text-sm transform transition-transform duration-300">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Role Details reveal */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-sm text-[#787670] leading-relaxed max-w-2xl"
                    >
                      {item.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
