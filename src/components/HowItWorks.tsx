"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { 
  Smartphone, 
  QrCode, 
  Workflow, 
  
  Zap,
 
  CheckCircle2,

} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Conecte seu WhatsApp',
    description: 'Integração simples e segura com seu número comercial',
    icon: <Smartphone className="w-6 h-6" />,
    benefits: [
      'Conexão em menos de 1 minuto',
      'Múltiplos dispositivos',
      'Backup automático',
      'Criptografia ponta a ponta'
    ],
    action: 'Ver demonstração',
    featuredIcon: <QrCode className="w-32 h-32 text-emerald-600" />
  },
  {
    number: '02',
    title: 'Configure seus Fluxos',
    description: 'Interface intuitiva para criar automações poderosas',
    icon: <Workflow className="w-6 h-6" />,
    benefits: [
      'Editor drag-and-drop',
      'Templates prontos',
      'Condições avançadas',
      'Testes em tempo real'
    ],
    action: 'Explorar templates',
    featuredIcon: <Workflow className="w-32 h-32 text-emerald-600" />
  },
  {
    number: '03',
    title: 'Automatize e Escale',
    description: 'Deixe a IA trabalhar enquanto você foca no que importa',
    icon: <Zap className="w-6 h-6" />,
    benefits: [
      'Atendimento 24/7',
      'Escalabilidade ilimitada',
      'Análise de performance',
      'Otimização contínua'
    ],
    action: 'Começar agora',
    metrics: [
      { value: '93%', label: 'Satisfação' },
      { value: '75%', label: 'Automação' },
      { value: '24/7', label: 'Disponível' }
    ],
    featuredIcon: <Zap className="w-32 h-32 text-emerald-600" />
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);


  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-cal font-bold text-gray-900 mb-6">
            Comece em minutos, não em semanas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo simples e intuitivo para você focar no que realmente importa: 
            seus clientes e seu negócio.
          </p>

          {/* Video CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
        
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps List */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-white shadow-xl scale-105'
                    : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                }`}
              >
                {/* Step Header */}
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600">
                    {step.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-emerald-600">
                        Passo {step.number}
                      </span>
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="ml-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        </motion.div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Step Content */}
                <div className="mt-4 pl-16">
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={false}
                        animate={activeStep === index ? { x: 10 } : { x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Step Metrics */}
                  {step.metrics && (
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {step.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

               
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Representation */}
          <div className="lg:sticky lg:top-8 space-y-6">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 aspect-square"
              animate={{ scale: [0.95, 1], opacity: [0.5, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full bg-emerald-50 rounded-xl flex items-center justify-center">
                {steps[activeStep].featuredIcon}
              </div>
            </motion.div>
            
            {/* Progress Bar */}
            <div className="bg-gray-100 h-2 rounded-full">
              <motion.div
                className="h-full bg-emerald-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}