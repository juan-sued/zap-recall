'use client'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export default function HandleKeyPressProvider({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      event.preventDefault()
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
            router.push('/sign-in')
            break
          case 'c':
            router.push('/config')
            break
          default:
            break
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [router])

  return <>{children}</>
}
