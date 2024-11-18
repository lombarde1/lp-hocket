// Navbar.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Controla o scroll e atualiza o estado do navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave para as seções
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Handlers
  const handleLogin = () => window.location.href = 'https://dev.hocketzap.com/login';
  const handleSignup = () => window.location.href = 'https://dev.hocketzap.com/register';

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('#top')}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
          >
            HocketZap
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-2">
            <button 
              onClick={() => scrollToSection('#how-it-works')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              Como Funciona
            </button>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50"
            >
              Preços
            </button>
            
            <div className="h-6 w-px bg-gray-200 mx-2" />
            
            <Button 
              variant="ghost" 
              className="font-medium"
              onClick={handleLogin}
            >
              Login
            </Button>
            
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 font-medium"
              onClick={handleSignup}
            >
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b bg-white/80 backdrop-blur-md"
          >
            <div className="space-y-1 px-4 py-3">
              <button 
                onClick={() => scrollToSection('#how-it-works')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Como Funciona
              </button>
              
              <button 
                onClick={() => scrollToSection('#pricing')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Preços
              </button>

              <div className="pt-2 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-center"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                
                <Button 
                  className="w-full justify-center bg-emerald-600 hover:bg-emerald-700"
                  onClick={handleSignup}
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}