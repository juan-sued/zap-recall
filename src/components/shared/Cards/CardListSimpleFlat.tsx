import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface ICardListSimpleFlat {
  avatarImageSrc?: string
  avatarFallback: string
  title: string
  description: string
  value: number
  className: string
}

export default function CardListSimpleFlat({
  avatarImageSrc = '',
  avatarFallback,
  title,
  description,
  value,
  className,
  ...props
}: ICardListSimpleFlat) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentValue < value) {
        setCurrentValue((prevValue) => prevValue + 1)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [currentValue, value])

  return (
    <>
      <div
        className={cn(
          'flex items-center bg-opacity-20 p-6 rounded-lg  ',
          className,
        )}
        {...props}
      >
        <Avatar className="h-9 w-9">
          <AvatarImage src={avatarImageSrc} alt="Avatar" />
          <AvatarFallback className="bg-white dark:bg-blueTheme-500">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1  ">
          <p className="text-md font-medium leading-none text-slate-700 dark:text-slate-50 truncate max-w-[100px] sm:max-w-[220px] xl:max-w-[340px]">
            {title}
          </p>
          <p className="text-sm text-muted-foreground  truncate max-w-[100px] sm:max-w-[220px] xl:max-w-[340px]">
            {description}
          </p>
        </div>
        <div className="ml-auto font-semibold text-lg animate__animated animate__fadeIn delay-1000 ">
          {currentValue}%
        </div>
      </div>
    </>
  )
}
