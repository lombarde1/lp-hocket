// components/ClientLayout.tsx
'use client';

import dynamic from 'next/dynamic';
import LoadingSpinner from './LoadingSpinner';

const Navbar = dynamic(() => import('./Navbar'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Hero = dynamic(() => import('./Hero'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Features = dynamic(() => import('./Features'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const HowItWorks = dynamic(() => import('./HowItWorks'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Pricing = dynamic(() => import('./Pricing'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const FAQ = dynamic(() => import('./FAQ'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Footer = dynamic(() => import('./Footer'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

export default function ClientLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
