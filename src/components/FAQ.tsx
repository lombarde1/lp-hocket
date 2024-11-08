
// components/FAQ.tsx
"use client";  // Importante adicionar quando usamos hooks ou interatividade do cliente

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona a integração com WhatsApp?",
    answer: "É muito simples! Basta escanear um QR Code na nossa plataforma com seu WhatsApp. Em poucos segundos, seu número estará conectado e pronto para usar todas as automações."
  },
  {
    question: "Preciso manter o celular conectado?",
    answer: "Não! Uma vez conectado, nossa plataforma mantém seu WhatsApp funcionando 24/7, sem necessidade de manter celular ou computador ligados."
  },
  {
    question: "Quantos atendentes posso ter?",
    answer: "Atendentes ilimitados em qualquer plano."
  },
  {
    question: "Como funciona o chatbot com IA?",
    answer: "Nosso chatbot utiliza inteligência artificial para entender e responder perguntas dos clientes automaticamente. Você pode criar fluxos de conversa personalizados e treinar o bot com suas próprias respostas."
  },
  {
    question: "É possível integrar com outros sistemas?",
    answer: "Sim! Oferecemos API e webhooks para integrar com qualquer sistema externo. Também temos integrações prontas com várias plataformas populares."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossa plataforma
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
