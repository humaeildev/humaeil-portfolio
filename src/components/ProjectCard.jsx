import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ImageFallback from './ImageFallback';

export default function ProjectCard({ project, index }) {
  const { title, category, description, image, link } = project;

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 sm:mb-28 group"
    >
      {/* Large Image Thumbnail */}
      <div className="overflow-hidden rounded-xl border border-[#DFDDD5] bg-[#EBE8DE] mb-6">
        <ImageFallback 
          src={image} 
          alt={title} 
          placeholderTitle={title} 
          category={category}
          aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
          className="group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
        />
      </div>

      {/* Details Row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[#666861] uppercase tracking-wider block mb-1">
            {category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171917] group-hover:text-[#284A43] transition-colors mb-2">
            {title}
          </h3>
          <p className="text-base text-[#666861] max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171917] group-hover:text-[#284A43] transition-colors self-start sm:self-center"
        >
          <span>View project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
}
