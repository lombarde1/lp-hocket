"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { VideoDialog } from '@/components/ui/video-dialog';
import { 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Shield, 
  Star,

  Globe,
  Sparkles,

  BadgeCheck,

} from 'lucide-react';


export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
      title: "Chat Inteligente",
      subtitle: "com Gemini-Pro"
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Atendimento automático",
      subtitle: "24/7 online"
    }
   
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute inset-y-0 right-0 -z-10 w-[50%] bg-gradient-to-l from-emerald-50/40" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-8 h-8 rounded-full bg-emerald-400/20 backdrop-blur-sm" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <div className="w-12 h-12 rounded-full bg-teal-400/20 backdrop-blur-sm" />
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full px-4 py-1 mb-6 bg-emerald-100/80 backdrop-blur-sm"
              >
                <span className="flex items-center text-emerald-700 text-sm font-medium">
                  <Star className="w-4 h-4 mr-2 fill-emerald-500" />
                  Plataforma mais amada pelos empresários
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="font-cal text-5xl/tight sm:text-6xl/tight lg:text-7xl/tight font-bold text-gray-900 mb-6 tracking-tight">
                Transforme seu
                <span className="relative whitespace-nowrap">
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-0 left-0 h-2 bg-emerald-200/60 -z-10"
                  />
                  <span className="relative bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent"> WhatsApp</span>
                </span>
                <br />Em uma máquina de vendas!
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Automatize seu atendimento, crie funis completos de forma facil, realize spam de mensagens com randomização de números e muito mais.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BadgeCheck className="w-5 h-5 text-emerald-500" />
                  <span>Sistema antiban</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <span>Dados Criptografados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="w-5 h-5 text-emerald-500" />
                  <span>Suporte 24/7</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg rounded-xl group"
                  onClick={() => window.location.href = 'https://dev.hocketzap.com/login'}
                >
                  Comece Agora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-emerald-50"
                  onClick={() => setVideoOpen(true)}
                >
                  Ver Demonstração
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Empresas ativas</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-3xl font-bold text-gray-900">1M+</div>
                  <div className="text-sm text-gray-600">Mensagens/mês</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-4"
            >
              {/* Feature badges floating around the main image */}
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.2) }}
                  className={`absolute ${getPosition(index)} z-20`}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{feature.title}</div>
                      <div className="text-xs text-gray-500">{feature.subtitle}</div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-400 shadow-2xl">
                <div className="absolute inset-0 bg-grid-white/15" />
                <Image
                  src="https://raw.githubusercontent.com/ttshopia32/uploads/main/image/38d3facd-a0ce-49f7-8ef3-c1b10fa6130f.jpg"
                  alt="Dashboard Preview"
                  className="w-full h-auto relative z-10 rounded-xl shadow-inner transform hover:scale-105 transition-transform duration-300"
                />

                {/* Security Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-medium text-gray-800">Dados criptografados e seguros</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoDialog open={videoOpen} onOpenChange={setVideoOpen} />
    </>
  );
}

// Helper function to position feature badges
function getPosition(index: number) {
  const positions = [
    "-left-4 top-1/4",
    "-right-4 top-1/3",
    "-left-4 bottom-1/3",
    "-right-4 bottom-1/4"
  ];
  return positions[index];
}