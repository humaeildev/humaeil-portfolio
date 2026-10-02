import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const CapabilitiesSection = () => {
  const { capabilities } = portfolioData;
  const [activeCapability, setActiveCapability] = useState(null);

  return (
    <section id="capabilities" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#161616]/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Section Header */}
        <div className="lg:col-span-4 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#161616]">
            Services &amp; Expertise
          </h2>
          <p className="text-sm text-[#787670]">
            Explore services and technical execution focus.
          </p>
        </div>

        {/* Right Typographic Interactive List (NO CARDS, NO ICONS!) */}
        <div className="lg:col-span-8 flex flex-col divide-y divide-[#161616]/10">
          {capabilities.map((item, index) => {
            const isHovered = activeCapability === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveCapability(activeCapability === item.id ? null : item.id)}
                onMouseEnter={() => setActiveCapability(item.id)}
                onMouseLeave={() => setActiveCapability(null)}
                className="py-8 transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-6">
                    <span className="text-xs font-mono text-[#787670] group-hover:text-[#E24A26] transition-colors">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-heading font-semibold text-[#161616] group-hover:text-[#E24A26] group-hover:translate-x-2 transition-all duration-300">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-lg text-[#161616] group-hover:text-[#E24A26] transform group-hover:rotate-45 transition-all duration-300">
                    ↗
                  </span>
                </div>

                {/* Expanded Micro-detail view on hover / focus */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden space-y-2 text-sm text-[#787670] pl-10"
                    >
                      <p className="text-[#161616] font-medium">{item.summary}</p>
                      <p className="text-xs text-[#787670] uppercase tracking-wider">{item.highlight}</p>
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
