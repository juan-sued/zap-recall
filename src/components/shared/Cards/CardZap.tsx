import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Difficulties, IZapBasic } from '@/interfaces/zapInterfaces'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FormattedDate } from 'react-intl'

interface CardZap extends Omit<IZapBasic, 'createdAt'> {
  className?: string
}
export default function CardZap({
  id,
  title,
  description,
  endings,
  attempts,
  updatedAt,
  className,
  difficulty,
  ...props
}: CardZap) {
  const router = useRouter()
  const [isMore624px, setIsMore624px] = useState(window.innerWidth > 640)

  useEffect(() => {
    const handleResize = () => {
      setIsMore624px(window.innerWidth > 640)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  function goToZapView(id: number) {
    router.push(`/zap/${id}`)
  }

  let difficultiesColor = 'bg-black'

  switch (difficulty) {
    case Difficulties.EASY:
      difficultiesColor = 'text-green-500'
      break
    case Difficulties.MEDIUM:
      difficultiesColor = 'text-yellow-500'
      break
    case Difficulties.HARD:
      difficultiesColor = 'text-red-500'
      break
  }

  const percentWins = (endings / attempts) * 100

  return (
    <Card
      className={cn(
        'w-full  h-full max-w-[390px] grid content-between shadow-md   shadow-[rgba(0,0,0,0.2)] transition-all  hover:cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95 sm:w-fit ',
        difficultiesColor,
      )}
      {...props}
      onClick={() => goToZapView(id)}
    >
      <CardHeader>
        <CardTitle className="truncate w-[265px] sm:w-[345px] ">
          {title}
        </CardTitle>
        <CardDescription className="truncate w-[265px] sm:w-[345px]">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="text-muted-foreground  gap-4 px-14  flex flex-col justify-center  sm:flex-row sm:px-6 sm:gap-0 sm:justify-between">
        <Button variant="ghost">
          <div>
            <h3>{attempts}</h3>
            <p>Tentativas</p>
          </div>
        </Button>

        <Separator orientation={isMore624px ? 'vertical' : 'horizontal'} />

        <Button variant="ghost">
          <div>
            <h3 className={className}>
              {isNaN(percentWins) ? 0 : percentWins.toFixed(0)}%
            </h3>
            <p>Acertaram</p>
          </div>
        </Button>

        <Separator orientation={isMore624px ? 'vertical' : 'horizontal'} />

        <Button variant="ghost">
          <div>
            <h3 className="text-sm">
              <FormattedDate value={updatedAt} year="numeric" month="short" />
            </h3>
            <p>Atualizado</p>
          </div>
        </Button>
      </CardFooter>
    </Card>
  )
}
