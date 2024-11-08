"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Wand2, 
  ArrowRight, 
  Brain, 
  GitBranch,
  MessageSquare,
  Settings,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";

export default function AIAndFunnelFeatures() {
  const [activeTab, setActiveTab] = useState('funnel');
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const handleShowVideo = (videoId: string) => {
    setCurrentVideo(videoId);
    setShowVideo(true);
  };

  const features = {
    funnel: [
      {
        icon: <GitBranch className="w-5 h-5" />,
        title: "Fluxos Personalizáveis",
        description: "Crie fluxos complexos com nossa interface drag & drop"
      },
      {
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Mensagens Dinâmicas",
        description: "Personalize mensagens baseadas nas respostas dos usuários"
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: "Automação Completa",
        description: "Configure gatilhos e ações automatizadas"
      }
    ],
    ai: [
      {
        icon: <Brain className="w-5 h-5" />,
        title: "IA Generativa",
        description: "Descreva seu funil e deixe a IA criar para você"
      },
      {
        icon: <Sparkles className="w-5 h-5" />,
        title: "Otimização Contínua",
        description: "IA aprende e melhora os fluxos automaticamente"
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Criação Instantânea",
        description: "Funis complexos criados em segundos"
      }
    ]
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tecnologia de Ponta para seu Negócio
            </h2>
            <p className="text-xl text-gray-600">
              Combine o poder da Inteligência Artificial com automação avançada
            </p>
          </motion.div>
        </div>

        {/* Tabs de Navegação */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-full">
            {[
              { id: 'funnel', label: 'Funis Avançados', icon: GitBranch },
              { id: 'ai', label: 'Criação por IA', icon: Bot }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado Esquerdo - Demonstração */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-xl relative group">
              {/* Preview Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    activeTab === 'funnel'
                      ? 'https://raw.githubusercontent.com/ttshopia32/uploads/main/image/e10afd08-2f19-44f7-af8b-71f8d2447f61.jpg'
                      : 'https://raw.githubusercontent.com/ttshopia32/uploads/main/image/e10afd08-2f19-44f7-af8b-71f8d2447f61.jpg'
                  })`
                }}
              >
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                  <Button
                    onClick={() => handleShowVideo(
                      activeTab === 'funnel'
                        ? 'ntnsX6PUcvM'
                        : 'bPtwGWGFtpA'
                    )}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Ver Demonstração
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Badges flutuantes */}
            <div className="absolute -right-4 -bottom-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-2">
              {activeTab === 'funnel' ? (
                <>
                  <GitBranch className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">Arraste e Solte</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">Geração por IA</span>
                </>
              )}
            </div>
          </motion.div>

          {/* Lado Direito - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {activeTab === 'funnel' 
                ? 'Crie Funis Poderosos' 
                : 'IA que Trabalha por Você'}
            </h3>
            
            <p className="text-gray-600 text-lg">
              {activeTab === 'funnel'
                ? 'Interface intuitiva de arrastar e soltar para criar fluxos de conversação complexos em minutos.'
                : 'Descreva seu funil ideal em texto natural e deixe nossa IA criar todo o fluxo automaticamente.'}
            </p>

            <div className="space-y-6">
              {features[activeTab === 'funnel' ? 'funnel' : 'ai'].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => window.location.href = 'https://dev.hocketzap.com/register'}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Modal de Vídeo */}
       {/* Modal de Vídeo */}
<Dialog open={showVideo} onOpenChange={setShowVideo}>
  <DialogContent className="sm:max-w-4xl">
    <DialogHeader>
      <DialogTitle className="sr-only">
        {activeTab === 'funnel' ? 'Demonstração de Funis' : 'Demonstração de IA'}
      </DialogTitle>
    </DialogHeader>
    <div className="aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${currentVideo}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </DialogContent>
</Dialog>
      </div>
    </section>
  );
}