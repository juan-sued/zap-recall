import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface ICardListSimpleFlat {
  avatarImageSrc?: string
  avatarFallback: string
  name: string
  email: string
  value: string
  className: string
}

export default function CardListSimpleFlat({
  avatarImageSrc = '',
  avatarFallback,
  name,
  email,
  value,
  className,
  ...props
}: ICardListSimpleFlat) {
  return (
    <>
      <div
        className={cn(
          'flex items-center bg-opacity-20 p-6 rounded-lg',
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
            {name}
          </p>
          <p className="text-sm text-muted-foreground  truncate max-w-[100px] sm:max-w-[220px] xl:max-w-[340px]">
            {email}
          </p>
        </div>
        <div className="ml-auto font-medium">{value}</div>
      </div>
    </>
  )
}
