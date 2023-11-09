'use client'
import MenuNavBar from './MenuNavBar'
import LogoAndNameHeader from './LogoAndNameHeader'
import { useEffect, useState } from 'react'
import { getScroll } from '@/utils'
import { UserNav } from './UserNav'
import { cn } from '@/lib/utils'

export default function Header() {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(getScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          'px-5 py-6 bg-pinkTheme-500 bg-opacity-70 fixed top-0 left-0 w-full z-10 flex justify-between backdrop-blur-md  transition-all dark:bg-blueTheme-500 dark:bg-opacity-90 h-[96px] animate__animated animate__fadeInDown ',
          scrollHeight > 1 ? 'drop-shadow-lg' : '',
        )}
      >
        <LogoAndNameHeader />
        <MenuNavBar />

        <UserNav />
      </header>
    </>
  )
}
