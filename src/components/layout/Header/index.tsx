import ThemeSwitcher from '@/components/shared/ThemeSwitcher'
import MenuNavBar from './MenuNavBar'
import MenuMobile from './MenuMobile'
import LogoAndNameHeader from './LogoAndNameHeader'

export default function Header() {
  return (
    <>
      <header className="px-5 py-6 bg-opacity-10 backdrop-blur-md fixed top-0 left-0 w-full z-10 flex justify-between">
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
