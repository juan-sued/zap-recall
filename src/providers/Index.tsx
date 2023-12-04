'use client'
import { queryClient } from '@/services/queryClient'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import HandleKeyPressProvider from './HandleKeyPress'
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <QueryClientProvider client={queryClient}>
        <HandleKeyPressProvider>{children}</HandleKeyPressProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
