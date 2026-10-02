import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/portfolioData';
import LightboxModal from './LightboxModal';
import ImageFallback from './ImageFallback';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="py-24 md:py-36 bg-[#F4F1E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#12302D]">
            Credentials
          </h2>
        </div>

        {/* Certificate Visual Previews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group"
            >
              <div className="bg-[#EBE8DC] overflow-hidden mb-3">
                <ImageFallback 
                  src={cert.image} 
                  alt={cert.title} 
                  placeholderTitle={cert.title}
                  category={cert.issuer}
                  aspectRatio="aspect-[16/9]"
                  className="group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>

              <div className="flex justify-between items-baseline text-sm">
                <span className="font-bold text-[#12302D] group-hover:text-[#C96A3D] transition-colors">
                  {cert.title}
                </span>
                <span className="text-xs font-mono text-[#71877D]">
                  {cert.issuer} · {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
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
