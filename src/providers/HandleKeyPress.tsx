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
      if (event.ctrlKey) {
        switch (event.key) {
          case 'i':
            router.push('/')
            break
          case 'd':
            router.push('/dashboard')
            break
          case 'c':
            router.push('/config')
            break
          default:
            break
        }
      } else if (event.altKey && event.ctrlKey) {
        switch (event.key) {
          case 'p':
            router.push('/profile')
            break
          case 's':
            router.push('/sign-in')
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
