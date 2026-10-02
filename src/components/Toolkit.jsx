import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Toolkit() {
  return (
    <section className="py-24 md:py-36 bg-[#F4F1E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 border-t border-[#12302D]/15 pt-12">
          {skillsData.map((group, idx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-serif-display text-[#12302D] mb-6">
                {group.category}
              </h3>

              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li 
                    key={item}
                    className="text-lg text-[#71877D] hover:text-[#12302D] transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
