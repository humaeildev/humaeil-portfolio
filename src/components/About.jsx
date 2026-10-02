import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/portfolioData';
import ImageFallback from './ImageFallback';

export default function About() {
  const { heading, intro, details, expansion, portraitPlaceholder } = aboutData;

  return (
    <section id="about" className="py-20 md:py-32 bg-[#F7F5EF] border-t border-[#DFDDD5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171917]">
              {heading}
            </h2>

            <p className="text-xl sm:text-2xl font-medium text-[#171917] leading-snug">
              {intro}
            </p>

            <p className="text-base sm:text-lg text-[#666861] leading-relaxed">
              {details}
            </p>

            <p className="text-base sm:text-lg text-[#284A43] font-semibold leading-relaxed">
              {expansion}
            </p>
          </motion.div>

          {/* Optional Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="rounded-xl overflow-hidden border border-[#DFDDD5] bg-[#EBE8DE]">
              <ImageFallback 
                src={portraitPlaceholder} 
                alt="Humaeil Abbas"
                placeholderTitle="PROFILE PHOTO PLACEHOLDER"
                category="HUMAEIL ABBAS"
                aspectRatio="aspect-[4/5]"
                className="w-full object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
