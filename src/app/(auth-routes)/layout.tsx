'use client'

import { AuthContext } from '@/providers/AuthContext'
import { redirect } from 'next/navigation'
import { ReactNode, useContext } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) {
    redirect('/')
  } else {
    return <>{children}</>
  }
}
