'use client'

import { useAuth } from '@/providers/useAuth'
import { redirect } from 'next/navigation'
import { ReactNode, useContext } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    redirect('/')
  } else {
    return <>{children}</>
  }
}
