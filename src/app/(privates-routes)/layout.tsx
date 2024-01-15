'use client'

import { AuthContext } from '@/providers/AuthContext'
import { redirect } from 'next/navigation'
import { ReactNode, useContext } from 'react'

interface PrivateLayoutProps {
  children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) {
    return <>{children}</>
  } else {
    redirect('/sign-in')
  }
}
