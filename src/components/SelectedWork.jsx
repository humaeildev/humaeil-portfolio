import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 md:py-32 bg-[#F7F5EF]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#171917] mb-3">
            Selected work
          </h2>
          <p className="text-base sm:text-lg text-[#666861] max-w-xl">
            A few websites, Shopify experiences and landing pages I've worked on.
          </p>
        </div>

        {/* Project List */}
        <div>
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
