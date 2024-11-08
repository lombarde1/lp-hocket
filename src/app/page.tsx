import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import AIAndFunnelFeatures from '@/components/AIAndFunnelFeatures';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AIAndFunnelFeatures />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}