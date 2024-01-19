'use client'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuth } from './useAuth'

export default function HandleKeyPressProvider({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const { logout } = useAuth()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey) {
        switch (event.key) {
          case 'i':
            router.push('/')
            break
          case 'd':
            router.push('/dashboard')
            break
          case 'u':
            router.push('/profile')
            break
          case 'l':
            logout()
            break
          case 'ç':
            router.push('/config')
            break
          case '3':
            router.push('/ranking')
            break
          default:
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [logout, router])

  return <>{children}</>
}
