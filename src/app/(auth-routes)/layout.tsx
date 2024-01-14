'use client'

import { redirect } from 'next/navigation'
import { parseCookies } from 'nookies'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const { 'next-auth-token': token } = parseCookies()

  if (token) {
    redirect('/')
  } else {
    return <>{children}</>
  }
}
