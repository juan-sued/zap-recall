'use client'
import { IntlProvider } from 'react-intl'

import { queryClient } from '@/services/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import HandleKeyPressProvider from './HandleKeyPress'
import { AuthProvider } from './useAuth'
import { QuizProvider } from './useQuiz'
export default function Providers({ children }: { children: ReactNode }) {
  console.error = (message) => {
    if (message.includes('Extra attributes from the server: class, style')) {
      // Ignore
    }
  }
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <QueryClientProvider client={queryClient}>
        <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
          <AuthProvider>
            <QuizProvider>
              <HandleKeyPressProvider>{children}</HandleKeyPressProvider>
            </QuizProvider>
          </AuthProvider>
        </IntlProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
