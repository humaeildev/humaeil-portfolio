import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { PdfViewer } from './PdfViewer';

export const WorkSection = () => {
  const { projects } = portfolioData;
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [showPdf, setShowPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  // Reusable buttons — shown below image on mobile, as overlay on desktop
  const ProjectButtons = ({ project }) => (
    <>
      {/* Mobile: always visible below image */}
      <div className="flex gap-3 mt-3 lg:hidden">
        <button
          onClick={() => { setImageUrl(project.fullImage || project.image); setShowImage(true); }}
          className="flex-1 px-4 py-2 bg-[#161616] text-white rounded-full text-sm font-medium transition-colors"
        >
          View Image
        </button>
        {project.pdf && (
          <button
            onClick={() => { setPdfUrl(project.pdf); setShowPdf(true); }}
            className="flex-1 px-4 py-2 bg-[#E24A26] text-white rounded-full text-sm font-medium transition-colors"
          >
            View Case Study (PDF)
          </button>
        )}
      </div>

      {/* Desktop: hover overlay */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => { setImageUrl(project.fullImage || project.image); setShowImage(true); }}
          className="px-4 py-2 bg-white text-[#161616] rounded-full text-sm font-medium shadow-lg hover:bg-[#EAE7E0] transition-colors"
        >
          View Image
        </button>
        {project.pdf && (
          <button
            onClick={() => { setPdfUrl(project.pdf); setShowPdf(true); }}
            className="px-4 py-2 bg-[#E24A26] text-white rounded-full text-sm font-medium shadow-lg hover:bg-[#c83d1e] transition-colors"
          >
            View Case Study (PDF)
          </button>
        )}
      </div>
    </>
  );

  return (<>

    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto space-y-32 md:space-y-44">
      {/* Section Header */}
      <div className="border-b border-[#161616]/10 pb-8">
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">Selected Work</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-[#161616] mt-2 tracking-tight">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="text-sm text-[#787670] mt-2 max-w-xl">
            A selection of custom web design, eCommerce concepts, and conversion-focused client builds.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-32 md:space-y-48">

        {/* Project 1: Dominant Full-Width Composition (Maison Rose) */}
        {projects[0] && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-xl bg-[#EAE7E0] border border-[#161616]/10 relative group">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out lg:group-hover:opacity-70"
                />
                <ProjectButtons project={projects[0]} />
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">
                  {projects[0].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] group-hover:text-[#E24A26] transition-colors">
                  {projects[0].title}
                </h3>
              </div>
              <p className="text-base text-[#787670] leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-[#EAE7E0] text-[#161616] font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        )}

        {/* Project 2: Asymmetric Split Offset (Tidewell Plumbing) */}
        {projects[1] && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">
                  {projects[1].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] group-hover:text-[#E24A26] transition-colors">
                  {projects[1].title}
                </h3>
              </div>
              <p className="text-base text-[#787670] leading-relaxed">
                {projects[1].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[1].tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-[#EAE7E0] text-[#161616] font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="overflow-hidden rounded-xl bg-[#EAE7E0] border border-[#161616]/10 relative group">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out lg:group-hover:opacity-70"
                />
                <ProjectButtons project={projects[1]} />
              </div>
            </div>
          </motion.article>
        )}

        {/* Project 3: Wide Full-Bleed Showcase (Marlowe Dental) */}
        {projects[2] && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group space-y-6"
          >
            <div className="overflow-hidden rounded-xl bg-[#EAE7E0] border border-[#161616]/10 relative group">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-auto object-cover max-h-[580px] transition-opacity duration-300 ease-in-out lg:group-hover:opacity-70"
              />
              <ProjectButtons project={projects[2]} />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">
                  {projects[2].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] group-hover:text-[#E24A26] transition-colors mt-1">
                  {projects[2].title}
                </h3>
              </div>
              <p className="text-sm text-[#787670] max-w-xl">
                {projects[2].description}
              </p>
            </div>
          </motion.article>
        )}

        {/* Project 4: Asymmetric Layered Frame (Haldane Estates) */}
        {projects[3] && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl bg-[#EAE7E0] border border-[#161616]/10 relative group">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out lg:group-hover:opacity-70"
                />
                <ProjectButtons project={projects[3]} />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">
                  {projects[3].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] group-hover:text-[#E24A26] transition-colors">
                  {projects[3].title}
                </h3>
              </div>
              <p className="text-base text-[#787670] leading-relaxed">
                {projects[3].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[3].tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-[#EAE7E0] text-[#161616] font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        )}

        {/* Project 5: HVAC Service Website (Full-Width Composition) */}
        {projects[4] && (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="overflow-hidden rounded-xl bg-[#EAE7E0] border border-[#161616]/10 relative group">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  src={projects[4].image}
                  alt={projects[4].title}
                  className="w-full h-auto object-cover transition-opacity duration-300 ease-in-out lg:group-hover:opacity-70"
                />
                <ProjectButtons project={projects[4]} />
              </div>
            </div>
            <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-[#E24A26] uppercase">
                  {projects[4].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#161616] group-hover:text-[#E24A26] transition-colors">
                  {projects[4].title}
                </h3>
              </div>
              <p className="text-base text-[#787670] leading-relaxed">
                {projects[4].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[4].tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-[#EAE7E0] text-[#161616] font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        )}

      </div>
    </section>

  {showImage && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)' }}
      onClick={() => setShowImage(false)}
    >
      <div
        className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-white/60 hover:text-white text-2xl z-10 transition-colors"
          onClick={() => setShowImage(false)}
        >✕</button>
        <img src={imageUrl} alt="Project preview" className="w-full h-auto block" />
      </div>
    </div>
  )}

  {showPdf && (
    <PdfViewer url={pdfUrl} onClose={() => setShowPdf(false)} />
  )}
</> );

};
