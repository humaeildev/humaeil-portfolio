import React from 'react';
import { motion } from 'framer-motion';
import { introStatementData } from '../data/portfolioData';

export default function IntroStatement() {
  return (
    <section className="py-24 md:py-36 bg-[#F4F1E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <h2 className="text-4xl sm:text-6xl font-serif-display text-[#12302D] leading-[1.1] mb-8">
              "{introStatementData.heading}"
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="text-lg text-[#71877D] leading-relaxed font-normal">
              {introStatementData.paragraph}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
