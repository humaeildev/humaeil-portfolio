import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { emveriiData } from '../data/portfolioData';
import ImageFallback from './ImageFallback';

export default function EmveriiCaseStudy() {
  const { statement, description, workflow, placeholders } = emveriiData;

  return (
    <section className="py-24 md:py-36 bg-[#D9D0BC]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Large Statement */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl sm:text-6xl font-serif-display text-[#12302D] mb-6 leading-tight">
            "{statement}"
          </h2>
          <p className="text-lg sm:text-xl text-[#12302D]/80 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Workflow Sequence */}
        <div className="mb-20">
          <div className="flex flex-wrap items-center gap-4 text-base font-semibold text-[#12302D] border-y border-[#12302D]/20 py-6">
            {workflow.map((item, idx) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {idx < workflow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#C96A3D]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Image Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholders.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="bg-[#FAF8F1] overflow-hidden">
                <ImageFallback 
                  src={item.image} 
                  alt={item.title} 
                  placeholderTitle={`THE EMVERII — ${item.title}`}
                  category="Ecommerce Experiment"
                  aspectRatio="aspect-[16/10]"
                  className="hover:scale-[1.02] transition-transform duration-700" 
                />
              </div>
              <div className="text-sm font-semibold text-[#12302D]">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
