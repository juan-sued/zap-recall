import ThemeSwitcher from '@/components/shared/ThemeSwitcher'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AuthContext } from '@/providers/AuthContext'
import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Settings,
  User,
  User2,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useContext } from 'react'

export function UserNav() {
  const { logout, isAuthenticated, user } = useContext(AuthContext)
  const { theme, setTheme } = useTheme()
  function alterTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  if (isAuthenticated) {
    return (
      <>
        <div className="w-1/3  flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="  bg-transparent  hover:bg-transparent dark:bg-transparent  rounded-full  w-12 h-12">
                <Avatar className="h-12 w-12 ">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/92616927?v=4"
                    alt="Avatar Image"
                  />
                  <AvatarFallback className="bg-pinkTheme-500 dark:bg-blueTheme-500">
                    <User2 />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="relative top-1 w-56 "
              align="end"
              forceMount
            >
              <DropdownMenuLabel className="font-normal ">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {user?.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <Link href="/">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Início</span>

                    <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>

                <Link href="/dashboard">
                  <DropdownMenuItem className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>

                <Link href="/ranking">
                  <DropdownMenuItem className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Ranking</span>
                    <DropdownMenuShortcut>⌘3</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    <User2 className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                    <DropdownMenuShortcut>⌘U</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>

                <Link href="/config">
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                    <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" justify-between cursor-pointer">
                <span onClick={alterTheme}>Alternar tema</span>
                <ThemeSwitcher />
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sair <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="w-1/3  flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="  bg-transparent  hover:bg-transparent dark:bg-transparent  rounded-full  w-12 h-12">
                <Avatar className="h-12 w-12 ">
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/92616927?v=4"
                    alt="Avatar Image"
                  />
                  <AvatarFallback className="bg-pinkTheme-500 dark:bg-blueTheme-500">
                    <User2 />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="relative top-1 w-56 "
              align="end"
              forceMount
            >
              <DropdownMenuGroup>
                <Link href="/">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Início</span>

                    <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>

                <Link href="/ranking">
                  <DropdownMenuItem className="cursor-pointer">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <span>Ranking</span>
                    <DropdownMenuShortcut>⌘3</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href="/config">
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configurações</span>
                    <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" justify-between cursor-pointer">
                <span onClick={alterTheme}>Alternar tema</span>
                <ThemeSwitcher />
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <Link href="/sign-in">
                <DropdownMenuItem className="cursor-pointer">
                  <LogIn className="mr-2 h-4 w-4" />
                  Entrar <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </>
    )
  }
}
