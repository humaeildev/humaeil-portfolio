import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { PdfViewer } from './PdfViewer';

export const CertificationsSection = () => {
  const { certifications } = portfolioData;
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  const [activeFilter, setActiveFilter] = useState('all');

  if (!certifications || certifications.length === 0) return null;

  const filteredCertifications = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  const handleViewOriginal = (cert) => {
    if (!cert.original) return;
    if (cert.original.endsWith('.pdf')) {
      setPdfUrl(cert.original);
      setShowPdf(true);
    } else {
      setImageUrl(cert.original);
      setShowImage(true);
    }
  };

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowImage(false);
        setShowPdf(false);
      }
    };
    if (showImage || showPdf) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showImage, showPdf]);

  return (
    <>
      <section id="certifications" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#161616]/10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#161616]/10 pb-8 gap-6 mb-8">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">Credentials</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] mt-2">
              Certifications &amp; Achievements
            </h2>
          </div>
          <p className="text-xs text-[#787670] uppercase tracking-wider">
            Professional Accreditations &amp; Continuous Learning
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: `All (${certifications.length})` },
            { id: 'Development', label: 'Web & Development' },
            { id: 'Marketing', label: 'Marketing & eCommerce' },
            { id: 'Professional', label: 'Professional Skills' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#161616] text-[#F4F3EF] shadow-sm'
                  : 'bg-[#EAE7E0] text-[#787670] hover:text-[#161616] hover:bg-[#ded9cc]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-xl bg-[#EAE7E0] border border-[#161616]/10 flex flex-col"
            >
              {/* Thumbnail */}
              <div
                onClick={() => handleViewOriginal(cert)}
                className="aspect-[4/3] w-full overflow-hidden relative bg-[#EAE7E0] flex items-center justify-center cursor-pointer"
              >
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center"
                />
                {/* Hover overlay */}
                {cert.original && (
                  <div className="absolute inset-0 bg-[#161616]/0 group-hover:bg-[#161616]/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 py-2.5 bg-white text-[#161616] rounded-full text-sm font-semibold shadow-lg">
                      View Certificate
                    </span>
                  </div>
                )}
              </div>

              {/* Info row */}
              <div className="flex items-start justify-between gap-3 p-4 border-t border-[#161616]/10 mt-auto">
                <div className="min-w-0">
                  <h3 className="text-sm font-heading font-semibold text-[#161616] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#787670] mt-0.5 truncate">{cert.issuer}</p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-xs font-mono text-[#787670]">{cert.year}</span>
                  {cert.original && (
                    <button
                      onClick={() => handleViewOriginal(cert)}
                      className="text-xs px-3 py-1 bg-[#161616] text-[#F4F3EF] rounded-full hover:bg-[#E24A26] transition-colors font-medium cursor-pointer"
                    >
                      View
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: 'rgba(10,10,10,0.92)' }}
          onClick={() => setShowImage(false)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 md:top-3 md:right-3 text-white/80 hover:text-white text-2xl z-20 bg-black/60 hover:bg-black/90 rounded-full w-9 h-9 flex items-center justify-center transition-colors cursor-pointer"
              onClick={() => setShowImage(false)}
              aria-label="Close"
            >✕</button>
            <img
              src={imageUrl}
              alt="Certificate"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {showPdf && (
        <PdfViewer url={pdfUrl} onClose={() => setShowPdf(false)} />
      )}
    </>
  );
};
