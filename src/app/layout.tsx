import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'HocketZap - Automação WhatsApp com IA',
  description: 'A melhor plataforma de automação para WhatsApp do Brasil. Crie chatbots inteligentes, automatize seu atendimento e aumente suas vendas.',
  keywords: 'whatsapp, automação, chatbot, ia, atendimento, vendas, marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
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