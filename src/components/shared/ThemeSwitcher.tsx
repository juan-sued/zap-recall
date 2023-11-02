'use client'

import { useTheme } from 'next-themes'
import SwitcherSunAndMoon from './SwitcherSunAndMoon/SwitcherSunAndMoon'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  function alterTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className="scale-95">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="tooltip ">
              <SwitcherSunAndMoon
                checked={theme === 'dark'}
                onChange={alterTheme}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-white  text-purple-950">
            <p>Mudar tema</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
