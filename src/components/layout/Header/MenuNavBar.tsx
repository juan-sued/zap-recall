import { useContext, useEffect, useState } from 'react'
import ListItem from './ListItem'
import { AuthContext } from '@/providers/AuthContext'

const MENU_BUTTONS_LOGGED = [
  { title: 'Início', link: '/' },
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Ranking', link: '/ranking' },
  { title: 'Configurações', link: '/config' },
]
const MENU_BUTTONS_UNLOGGED = [
  { title: 'Início', link: '/' },
  { title: 'Ranking', link: '/ranking' },
  { title: 'Configurações', link: '/config' },
]

export default function MenuNavBar() {
  const { isAuthenticated } = useContext(AuthContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUserAuthenticated, setIsUserAuthenticated] =
    useState(isAuthenticated)

  useEffect(() => {
    setIsUserAuthenticated(isAuthenticated)
  }, [isAuthenticated])

  if (isAuthenticated) {
    return (
      <>
        <nav className="hidden lg:block w-fit animate__animated animate__fadeInDown ">
          <ul className="headerNav bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full flex px-4 py-2 space-x-4  justify-around  min-w-[500px] items-center   ">
            {MENU_BUTTONS_LOGGED.map((button, index) => (
              <ListItem key={index} title={button.title} link={button.link} />
            ))}
          </ul>
        </nav>
      </>
    )
  } else {
    return (
      <>
        <nav className="hidden lg:block w-fit ">
          <ul className="headerNav bg-white bg-opacity-5 border border-white border-opacity-5 rounded-full flex px-9 py-2 gap-10 justify-around min-w-[500px] items-center animate__animated animate__fadeInDown ">
            {MENU_BUTTONS_UNLOGGED.map((button, index) => (
              <ListItem key={index} title={button.title} link={button.link} />
            ))}
          </ul>
        </nav>
      </>
    )
  }
}
