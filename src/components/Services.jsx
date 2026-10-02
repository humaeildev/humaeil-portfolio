import React from 'react';
import { motion } from 'framer-motion';
import { capabilitiesData } from '../data/portfolioData';

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-[#F7F5EF] border-t border-[#DFDDD5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171917]">
              What I work with
            </h2>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-[#DFDDD5] border-t border-b border-[#DFDDD5]">
              {capabilitiesData.map((item, idx) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="py-5 text-xl sm:text-2xl font-medium text-[#171917] flex justify-between items-center hover:text-[#284A43] transition-colors"
                >
                  <span>{item}</span>
                  <span className="text-xs font-mono text-[#666861]">0{idx + 1}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
