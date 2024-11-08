"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";

type BillingInterval = 'monthly' | 'quarterly' | 'semiannual';

const plans = [
  {
    name: 'Básico',
    price: {
      monthly: 65,
      quarterly: 175,
      semiannual: 330,
    },
    description: 'Ideal para quem está começando e quer experimentar o poder da automação.',
    features: [
      '1 conexão WhatsApp',
      '15 funis de mensagens',
      'Spam de mensagem para até 1500 leads por dia',
      'Autoresposta para até 750 leads por dia',
      'Gerenciamento básico de grupos'
    ]
  },
  {
    name: 'Plus',
    price: {
      monthly: 110,
      quarterly: 297,
      semiannual: 561,
    },
    description: 'Perfeito para negócios em crescimento que precisam de mais recursos e flexibilidade.',
    features: [
      'Todos os recursos do plano Básico',
      '3 conexões WhatsApp',
      '50 funis de mensagens',
      'Spam de mensagem para até 15k leads por dia',
      'Autoresposta para até 2000 leads por dia',
      'Gerenciamento avançado de grupos',
      'Todas as integrações disponíveis (elevenlabs, mercadopago...)',
      'Antiban ativo',
      'API básica'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: {
      monthly: 180,
      quarterly: 486,
      semiannual: 918,
    },
    description: 'Para empresas que precisam de poder máximo e recursos ilimitados.',
    features: [
      'Todos os recursos do plano Plus',
      '10 Conexões WhatsApp',
      'Funis de mensagens ilimitados',
      'Spam de mensagens ilimitado',
      'Autoresposta ilimitada',
      'Suporte prioritário 24/7',
      'Acesso antecipado a novos recursos',
      'API avançada',
      'Treinamento personalizado',
      'Dashboard analytics avançado'
    ]
  }
];

export default function Pricing() {
  const [interval, setInterval] = useState<BillingInterval>('monthly');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const periodLabel = {
    monthly: '/mês',
    quarterly: '/trimestre',
    semiannual: '/semestre',
  };


  const handlePlanClick = () => {
    setIsModalOpen(true);
  };


  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cal font-bold text-gray-900 mb-6">
            Escolha o plano ideal para seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Preços transparentes e flexíveis para impulsionar seu crescimento
          </p>

          <div className="mt-8 inline-flex p-1 bg-purple-100/50 rounded-full">
            {[
              { id: 'monthly', label: 'Mensal' },
              { id: 'quarterly', label: 'Trimestral' },
              { id: 'semiannual', label: 'Semestral' }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setInterval(option.id as BillingInterval)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
                  interval === option.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative bg-white rounded-2xl shadow-lg p-8
                ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}
              `}
            >
              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                10% OFF
              </div>

              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium rounded-full whitespace-nowrap">
                  Melhor Custo-Benefício!
                </div>
              )}

              <h3 className="text-2xl font-bold text-purple-600 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    R$ {plan.price[interval]}
                  </span>
                  <span className="ml-2 text-gray-600">
                    {periodLabel[interval]}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                  onClick={handlePlanClick}
                className={`w-full h-12 font-medium ${
                  plan.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                ASSINAR PLANO
              </Button>
            </div>
          ))}
        </div>

    {/* Modal de Registro */}
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
  <DialogContent className="sm:max-w-md">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-center mb-2">
        Vamos começar! 🚀
      </DialogTitle>
      <div className="space-y-4">
        <div className="text-center text-gray-600">
          Para assinar um plano, primeiro você precisa criar sua conta na plataforma.
          É rápido e fácil!
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-emerald-500 mr-2" />
              Crie sua conta gratuitamente
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-emerald-500 mr-2" />
              Acesse a área de planos
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-emerald-500 mr-2" />
              Escolha e ative seu plano
            </li>
          </ul>
        </div>

        <div className="pt-4">
          <Button 
            onClick={() => window.location.href = 'https://dev.hocketzap.com/register'}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12"
          >
            Criar minha conta
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>


        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-4">
            Precisa de algo personalizado?
          </p>
          <Button 
    variant="outline" 
    className="mx-auto"
    onClick={() => window.location.href = 'https://wa.me/5517991134416?text=Oi+vim+falar+sobre+a+hocketzap'}
  >
    Fale com nosso time
  </Button>
        </div>
      </div>
    </div>
    </section>
  );
}