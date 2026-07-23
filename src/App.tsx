import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SolutionsSection } from './components/SolutionsSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-['Tajawal',sans-serif] flex flex-col antialiased selection:bg-[#10B981] selection:text-white">
      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Interactive Solutions Grid Section */}
        <SolutionsSection />

        {/* 3. Community Call to Action Section */}
        <CommunitySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
