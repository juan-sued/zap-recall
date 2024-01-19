import SwitcherSunAndMoon from './SwitcherSunAndMoon/SwitcherSunAndMoon'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'

export default function ThemeSwitcher({
  isChecked,
  onChange,
}: {
  isChecked: boolean
  onChange: () => void
}) {
  return (
    <div className="relative scale-[80%] left-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="tooltip ">
              <SwitcherSunAndMoon checked={isChecked} onChange={onChange} />
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
