import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  if (!testimonialsData || testimonialsData.length === 0) return null;

  return (
    <section className="py-24 md:py-36 bg-[#F4F1E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {testimonialsData.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-2xl sm:text-4xl font-serif-display text-[#12302D] leading-snug">
                "{item.quote}"
              </p>
              <div className="text-xs font-mono text-[#71877D] uppercase">
                {item.client} — {item.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
