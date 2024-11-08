"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Building2, Briefcase, TrendingUp, Users } from 'lucide-react';

const testimonials = [
  {
    content: "O HocketZap transformou completamente nossa operação de atendimento. A integração com IA não só aumentou nossa eficiência em 300%, mas também melhorou significativamente a satisfação dos nossos clientes. É impressionante como conseguimos manter a personalização mesmo com automação.",
    author: "Maria Silva",
    role: "CEO",
    company: "Tech Solutions",
    image: "/api/placeholder/400/400",
    rating: 5,
    metrics: [
      { label: "Aumento em vendas", value: "300%" },
      { label: "Tempo de resposta", value: "-80%" }
    ],
    tags: ["Automação", "Atendimento", "Vendas"]
  },
  {
    content: "Implementamos o HocketZap há 6 meses e os resultados são extraordinários. A facilidade de criar fluxos automatizados e a inteligência artificial para qualificação de leads nos ajudou a escalar o negócio sem aumentar a equipe.",
    author: "João Santos",
    role: "Head de Marketing",
    company: "E-commerce Express",
    image: "/api/placeholder/400/400",
    rating: 5,
    metrics: [
      { label: "Conversão de leads", value: "+150%" },
      { label: "Custo de aquisição", value: "-45%" }
    ],
    tags: ["Marketing", "Leads", "ROI"]
  },
  {
    content: "A facilidade de uso e os resultados imediatos nos impressionaram. Em apenas duas semanas, conseguimos automatizar 70% do nosso atendimento mantendo a qualidade. O suporte é excepcional e as atualizações constantes mostram o compromisso com a inovação.",
    author: "Ana Costa",
    role: "Diretora Comercial",
    company: "Retail Store",
    image: "/api/placeholder/400/400",
    rating: 5,
    metrics: [
      { label: "Automação", value: "70%" },
      { label: "NPS", value: "92" }
    ],
    tags: ["Varejo", "Escalabilidade", "Inovação"]
  }
];

const metrics = [
  {
    icon: <Users className="w-5 h-5" />,
    label: "Clientes Ativos",
    value: "5,000+"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    label: "Taxa Média de Crescimento",
    value: "150%"
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    label: "Empresas Parceiras",
    value: "500+"
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Casos de Sucesso",
    value: "1,000+"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-semibold mb-4 block">
              CASOS DE SUCESSO
            </span>
            <h2 className="text-4xl font-cal font-bold text-gray-900 mb-6">
              Empresas que transformaram seu atendimento
            </h2>
            <p className="text-xl text-gray-600">
              Descubra como empresas de diferentes setores estão revolucionando 
              seu atendimento e aumentando suas vendas com o HocketZap
            </p>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 text-emerald-600">
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-500">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative h-[600px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Image and Company Info */}
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                        <Image
                          src={testimonials[activeIndex].image}
                          alt={testimonials[activeIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-4">
                        {testimonials[activeIndex].metrics.map((metric, idx) => (
                          <div key={idx} className="mb-2 last:mb-0">
                            <div className="text-sm text-gray-500">{metric.label}</div>
                            <div className="text-xl font-bold text-emerald-600">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center mb-6">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      
                      <Quote className="w-12 h-12 text-emerald-200 mb-6" />
                      
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {testimonials[activeIndex].content}
                      </p>
                      
                      <div>
                        <p className="font-cal text-xl text-gray-900 mb-1">
                          {testimonials[activeIndex].author}
                        </p>
                        <p className="text-gray-600">
                          {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {testimonials[activeIndex].tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-4">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
}