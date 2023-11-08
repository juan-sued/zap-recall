'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import HandleKeyPressProvider from './HandleKeyPress'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <HandleKeyPressProvider>{children}</HandleKeyPressProvider>
    </ThemeProvider>
  )
}
