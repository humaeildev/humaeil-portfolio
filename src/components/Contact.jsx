import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-[#284A43] text-[#FAF8F1]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="text-xs uppercase font-mono tracking-wider text-[#FAF8F1]/70 block mb-4">
            {contactData.subheading}
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F1] leading-[1.05] mb-6">
            Let's build something good.
          </h2>

          <p className="text-lg sm:text-xl text-[#FAF8F1]/80 mb-10 font-normal">
            Websites · Shopify · Landing Pages
          </p>

          {/* Action Link & Direct Channels */}
          <div className="space-y-8 pt-8 border-t border-[#FAF8F1]/20">
            <a
              href={`mailto:${contactData.email}?subject=Project%20Inquiry`}
              className="inline-flex items-center gap-3 bg-[#FAF8F1] text-[#284A43] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#FAF8F1]/90 transition-colors group"
            >
              <span>{contactData.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="flex flex-wrap items-center gap-8 text-sm font-medium pt-4 text-[#FAF8F1]/90">
              <a 
                href={`mailto:${contactData.email}`} 
                className="flex items-center gap-2 hover:text-[#FAF8F1] underline transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{contactData.email}</span>
              </a>

              <a 
                href={contactData.whatsapp.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#FAF8F1] underline transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({contactData.whatsapp.display})</span>
              </a>

              <a 
                href={contactData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-[#FAF8F1] underline transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
