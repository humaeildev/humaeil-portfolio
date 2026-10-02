import React from 'react';
import { motion } from 'framer-motion';
import { personalStatementData } from '../data/portfolioData';

export default function PersonalStatement() {
  return (
    <section className="py-24 md:py-36 border-b border-[#E8E6DB] bg-[#F5F4ED]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[#D7720C] font-semibold block mb-6">
              00 / CREATIVE PURPOSE & PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#0D2322] leading-[1.08] mb-8 font-serif-upright">
              "{personalStatementData.quote}"
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:pl-6 lg:border-l border-[#E8E6DB]"
          >
            <p className="text-base sm:text-lg text-[#5C6B68] leading-relaxed mb-6 font-normal">
              {personalStatementData.description}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#0D2322] font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D7720C]" />
              <span>DESIGN + COMMERCIAL PURPOSE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
