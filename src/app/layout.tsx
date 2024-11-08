import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HocketZap - Automação WhatsApp com IA',
  description: 'A melhor plataforma de automação para WhatsApp do Brasil. Crie chatbots inteligentes, automatize seu atendimento e aumente suas vendas.',
  keywords: 'whatsapp, automação, chatbot, ia, atendimento, vendas, marketing, whatsapp business, chatbot inteligente, automação de mensagens, atendimento automatizado, marketing digital, leads, conversão, vendas online, inteligência artificial',
  metadataBase: new URL('https://hocketzap.com'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://hocketzap.com',
    siteName: 'HocketZap',
    title: 'HocketZap - Automação Inteligente para WhatsApp',
    description: 'Automatize seu WhatsApp com IA e aumente suas vendas. Chatbots inteligentes, atendimento 24/7 e integração com CRM.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ttshopia32/uploads/main/image/e276db75-f974-4fed-b9f0-89b60ec6e493.jpg', // Substitua pelo caminho da sua imagem
        width: 1200,
        height: 630,
        alt: 'HocketZap - Automação WhatsApp com IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HocketZap - Automação WhatsApp com IA',
    description: 'Automatize seu WhatsApp com IA e aumente suas vendas. Chatbots inteligentes e atendimento 24/7.',
    images: ['https://raw.githubusercontent.com/ttshopia32/uploads/main/image/e276db75-f974-4fed-b9f0-89b60ec6e493.jpg']// Substitua pelo caminho da sua imagem

  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning
      prefix="og: https://ogp.me/ns#"
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}