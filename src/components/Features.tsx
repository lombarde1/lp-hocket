"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import rocketAnimation from '@/animations/rocket.json';
import analyticsAnimation from '@/animations/analytics.json';
import { 
  Bot, 
  Rocket,
  Stars,
  Trophy,
  Target,
  TrendingUp,
  ArrowRight
} from 'lucide-react';


interface Stats {
  value: string;
  label: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  stats: Stats;
}

interface CategoryFeature {
  category: string;
  subtitle: string;
  animation: any; // ou use o tipo correto do lottie se disponível
  items: Feature[];
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const features: CategoryFeature[] = [
  {
    category: "Funções de automações",
    subtitle: "Tecnologia de ponta para revolucionar sua comunicação",
    animation: rocketAnimation,
    items: [
      {
        icon: <Bot />,
        title: 'Gemini-Pro Integrado',
        description: 'Integre um agente de IA ao seus funis',
        benefits: [
          'Compreensão contextual avançada',
          'Respostas personalizadas por segmento',
          'Aprendizado contínuo com seu histórico',
          'Suporte em múltiplos idiomas'
        ],
        stats: {
          value: '93%',
          label: 'Taxa de resolução no primeiro contato'
        }
      },
      {
        icon: <Rocket />,
        title: 'Atendimento Automatico',
        description: 'Automatize seu whatsapp com funis inteligentes.',
        benefits: [
          'Fluxos de conversação adaptativos',
          'Regras de negócio personalizáveis',
          'Gatilhos inteligentes baseados em comportamento',
          'Funil com pagamentos'
        ],
        stats: {
          value: '24/7',
          label: 'Disponibilidade garantida'
        }
      },
      {
        icon: <Stars />,
        title: 'Experiência Única',
        description: 'Nosso foco é deixar o atendimento mais humanizado possivel.',
        benefits: [
          'Venda sem parecer um robo',
          'Integre IA para não ficar muito roterizado',
          'Reconhecimento de humor e contexto',
          'Respostas empáticas e naturais'
        ],
        stats: {
          value: '97%',
          label: 'Satisfação dos clientes'
        }
      }
    ]
  },
  {
    category: "Funções de Gestão",
    subtitle: "Controle total com insights acionáveis",
    animation: analyticsAnimation,
    items: [
      {
        icon: <TrendingUp />,
        title: 'Funis',
        description: 'Analise o desempenho de seus funis.',
        benefits: [
          'Veja quais funis foram mais disparados',
          'Qual whatsapp houve mais engajamento',
          'Previsão de vendas com IA',
        ],
        stats: {
          value: '300%',
          label: 'Aumento médio em conversões'
        }
      },
      {
        icon: <Trophy />,
        title: 'Performance Superior',
        description: 'Maximize resultados com ferramentas de gestão de primeira linha.',
        benefits: [
          'Dashboard em tempo real',
          'Análise preditiva de demanda',
          'Relatórios automatizados'
        ],
        stats: {
          value: '10x',
          label: 'Mais produtividade'
        }
      },
      {
        icon: <Target />,
        title: 'CRM Turbinado',
        description: 'Gestão de relacionamento que vai além do básico.',
        benefits: [
          'Enriquecimento automático de dados',
          'Segmentação avançada',
          'Crie lista de contatos para seus leads',
        ],
        stats: {
          value: '360°',
          label: 'Visão do cliente'
        }
      }
    ]
  }
];

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`group relative overflow-hidden border-0 bg-gradient-to-br from-white to-emerald-50/50 backdrop-blur-sm transition-all duration-500 ${
          isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg hover:shadow-xl'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-8">
          {/* Stats Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-emerald-50 rounded-full px-3 py-1 text-sm font-medium text-emerald-700">
              {feature.stats.value}
              <span className="text-emerald-500 text-xs block">
                {feature.stats.label}
              </span>
            </div>
          </div>

          {/* Icon */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center text-white transform transition-transform group-hover:scale-110">
              {feature.icon}
              <div className="absolute -inset-2 bg-emerald-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-cal font-bold text-gray-900 mb-3">
            {feature.title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {feature.description}
          </p>

          {/* Benefits */}
          <ul className="space-y-3">
            {feature.benefits.map((benefit, i) => (
              <motion.li
                key={i}
                initial={false}
                animate={isHovered ? { x: 10 } : { x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center text-gray-500"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mr-3" />
                {benefit}
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <button className="text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors flex items-center">
              Saiba mais
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Features() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white -z-10" />
      
      <motion.div
        className="absolute -right-64 -top-64 w-[50rem] h-[50rem] bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h2 className="text-5xl font-cal font-bold text-gray-900 mb-6">
              Recursos que fazem a diferença
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Combine o poder da Inteligência Artificial com automação inteligente 
              para criar experiências únicas de atendimento que encantam seus clientes 
              e impulsionam seus resultados.
            </p>
          </motion.div>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-16 space-x-6">
          {features.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:scale-105'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Animation Section */}
        <div className="relative h-96 mb-20">
          <Lottie 
            animationData={features[activeCategory].animation} 
            loop={true}
            className="w-full h-full"
          />
        </div>

        {/* Features Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features[activeCategory].items.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
        <div className="inline-block p-1 bg-emerald-50 rounded-full">
  <button 
    onClick={() => window.location.href = 'https://dev.hocketzap.com/register'}
    className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-colors flex items-center"
  >
    Comece agora
    <ArrowRight className="ml-2 w-5 h-5" />
  </button>
</div>
          <p className="mt-4 text-gray-500">
           Crie sua conta já e comece automatizar sua operação no digital!
          </p>
        </motion.div>
      </div>
    </section>
  );
}