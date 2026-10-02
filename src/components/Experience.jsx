import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experienceData, certificationsData } from '../data/portfolioData';
import LightboxModal from './LightboxModal';
import ImageFallback from './ImageFallback';

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#F7F5EF] border-t border-[#DFDDD5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Header */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171917]">
              Experience
            </h2>
          </div>

          {/* Simple List */}
          <div className="lg:col-span-8 space-y-10">
            {experienceData.map((item, idx) => (
              <motion.div 
                key={item.company + idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-b border-[#DFDDD5] pb-8 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="text-xl font-bold text-[#171917]">
                    {item.company}
                  </h3>
                  <span className="text-xs font-mono text-[#666861]">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#284A43] mb-2">
                  {item.role}
                </div>

                <p className="text-base text-[#666861] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credentials Quiet Area */}
        <div className="pt-16 border-t border-[#DFDDD5]">
          <div className="flex justify-between items-baseline mb-8">
            <h3 className="text-2xl font-bold text-[#171917]">
              Credentials
            </h3>
            <span className="text-xs text-[#666861]">Click to enlarge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certificationsData.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="cursor-pointer group"
              >
                <div className="rounded-xl overflow-hidden border border-[#DFDDD5] bg-[#EBE8DE] mb-2">
                  <ImageFallback 
                    src={cert.image} 
                    alt={cert.title} 
                    placeholderTitle={cert.title}
                    category={cert.issuer}
                    aspectRatio="aspect-[16/9]"
                    className="group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
                <div className="flex justify-between text-xs text-[#666861]">
                  <span className="font-semibold text-[#171917] group-hover:text-[#284A43] transition-colors">{cert.title}</span>
                  <span>{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedCert && (
          <LightboxModal 
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
            title={selectedCert.title}
            issuer={selectedCert.issuer}
            year={selectedCert.year}
            image={selectedCert.image}
          />
        )}
      </div>
    </section>
  );
}
