'use client'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher'
import MenuNavBar from './MenuNavBar'
import MenuMobile from './MenuMobile'
import LogoAndNameHeader from './LogoAndNameHeader'
import { useEffect, useState } from 'react'
import { getScroll } from '@/utils'

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

  const className = `px-5 py-6 bg-pinkTheme-500 bg-opacity-70 fixed top-0 left-0 w-full z-10 flex backdrop-blur-md justify-between transition-all dark:bg-blueTheme-500 dark:bg-opacity-90 h-[96px]    ${
    scrollHeight > 1 ? 'drop-shadow-lg' : ''
  }`

  return (
    <>
      <header className={className}>
        <LogoAndNameHeader />
        <MenuNavBar />
        <div className="hidden md:flex md:w-1/3 md:justify-end">
          <ThemeSwitcher />
        </div>
        <MenuMobile />
      </header>
    </>
  )
}
