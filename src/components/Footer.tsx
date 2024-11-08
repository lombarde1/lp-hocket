"use client";

import React from 'react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-emerald-500 mb-4">HocketZap</h3>
            <p className="text-gray-400">
              A melhor plataforma de automação para WhatsApp do Brasil. 
              Transforme seu atendimento com nossa solução completa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#features')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Preços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#faq')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              
              <li>
                <a 
                  href="https://wa.me/5517991134416?text=Oi+vim+falar+sobre+a+hocketzap" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp Suporte
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400 text-sm">
              © 2024 HocketZap. Todos os direitos reservados.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}