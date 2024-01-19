'use client'
import { queryClient } from '@/services/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import HandleKeyPressProvider from './HandleKeyPress'
import { AuthProvider } from './useAuth'
export default function Providers({ children }: { children: ReactNode }) {
  console.error = (message) => {
    if (message.includes('Extra attributes from the server: class, style')) {
      // Ignore
    }
  }
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <HandleKeyPressProvider>{children}</HandleKeyPressProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
