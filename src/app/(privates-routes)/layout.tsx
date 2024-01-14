'use client'

import { redirect } from 'next/navigation'
import { parseCookies } from 'nookies'
import { ReactNode } from 'react'

interface PrivateLayoutProps {
  children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const { 'next-auth-token': token } = parseCookies()

  console.log(token)
  if (token) {
    return <>{children}</>
  } else {
    redirect('/sign-in')
  }
}
