import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="bg-[#121212] text-[#787670] py-12 border-t border-[#F4F3EF]/10 px-6 md:px-12 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-heading font-medium text-[#F4F3EF]">{personalInfo.name}</p>
          <p>{personalInfo.role}</p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#F4F3EF] transition-colors"
          >
            Email
          </a>
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F3EF] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F4F3EF] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
