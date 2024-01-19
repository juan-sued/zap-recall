'use client'

import { useAuth } from '@/providers/useAuth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface PrivateLayoutProps {
  children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <>{children}</>
  } else {
    redirect('/sign-in')
  }
}
