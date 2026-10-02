import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#161616] flex flex-col font-sans selection:bg-[#E24A26] selection:text-[#FFFFFF]">
      {/* Header Navigation */}
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Selected Work */}
        <WorkSection />

        {/* About Section */}
        <AboutSection />

        {/* Capabilities / Services */}
        <CapabilitiesSection />

        {/* Experience */}
        <ExperienceSection />

        {/* Certifications & Accreditations */}
        <CertificationsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
