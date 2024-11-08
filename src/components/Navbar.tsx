// Navbar.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Menu,
  X,
  MessageSquare,
  Bot,
  BarChart,
  Zap,
  Users,
  Code,

} from 'lucide-react';

const features = [
  {
    name: 'Chat Inteligente',
    description: 'Automatize conversas com IA avançada',
    icon: Bot,
    href: '#features'
  },
  {
    name: 'Multi-Atendimento',
    description: 'Gerencie várias conversas simultâneas',
    icon: MessageSquare,
    href: '#multi-atendimento'
  },
  {
    name: 'Analytics',
    description: 'Métricas e insights detalhados',
    icon: BarChart,
    href: '#analytics'
  },
  {
    name: 'Automação',
    description: 'Fluxos e respostas automáticas',
    icon: Zap,
    href: '#automacao'
  },
  {
    name: 'CRM',
    description: 'Gestão completa de leads',
    icon: Users,
    href: '#crm'
  },
  {
    name: 'Integrações',
    description: 'APIs e webhooks disponíveis',
    icon: Code,
    href: '#integracoes'
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Controla o scroll e atualiza o estado do navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando clicar em um link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll suave para as seções
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handleMobileLinkClick();
    }
  };

  // Handler para o botão de login
  const handleLogin = () => {
    window.location.href = 'https://dev.hocketzap.com/login';
  };

  // Handler para o botão de registro
  const handleSignup = () => {
    window.location.href = 'https://dev.hocketzap.com/register';
  };

  const DropdownMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-screen md:w-auto md:left-1/2 md:-translate-x-1/2 pt-4"
          onMouseLeave={onClose}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mx-4 md:mx-0">
            <div className="grid md:grid-cols-2 gap-px bg-gray-100">
              {features.map((feature) => (
                <button
                  key={feature.name}
                  onClick={() => {
                    scrollToSection(feature.href);
                    onClose();
                  }}
                  className="p-6 bg-white hover:bg-gray-50 transition-colors w-full text-left"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">{feature.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('#top')}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"
            >
              HocketZap
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
            
              <DropdownMenu 
                isOpen={activeDropdown === 'features'} 
                onClose={() => setActiveDropdown(null)} 
              />
            </div>
            
            <button 
              onClick={() => scrollToSection('#how-it-works')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50"
            >
              Como Funciona
            </button>
            
            <button 
              onClick={() => scrollToSection('#pricing')}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50"
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

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white pt-20"
          >
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="text-sm font-medium text-gray-500 mb-3">Recursos</div>
                  {features.map((feature) => (
                    <button
                      key={feature.name}
                      onClick={() => {
                        scrollToSection(feature.href);
                        handleMobileLinkClick();
                      }}
                      className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 w-full"
                    >
                      <feature.icon className="w-5 h-5 text-emerald-600 mr-3" />
                      <div className="text-left">
                        <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                        <div className="text-sm text-gray-500">{feature.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => scrollToSection('#how-it-works')}
                  className="block w-full text-left py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  Como Funciona
                </button>
                
                <button 
                  onClick={() => scrollToSection('#pricing')}
                  className="block w-full text-left py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  Preços
                </button>
              </div>
              
              <div className="space-y-3">
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