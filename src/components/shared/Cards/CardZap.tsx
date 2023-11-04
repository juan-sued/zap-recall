import { IZapBasic } from '@/components/Home/ListZaps'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface CardZap extends IZapBasic {
  className?: string
}
export default function CardZap({
  id,
  title,
  description,
  percentEndings,
  difficulty,
  attempts,
  updatedAt,
  creatAt,
  className,
  ...props
}: CardZap) {
  const [isMore624px, setIsMore624px] = useState(false)

  useEffect(() => {
    setIsMore624px(window.innerWidth > 640)
  }, [])

  return (
    <Card
      className={cn(
        'w-full  h-full grid content-between shadow-md  shadow-[rgba(0,0,0,0.2)] transition-all  hover:cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95 sm:min-w-fit',
        className,
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4"></CardContent>
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
            <h3 className={className}>{percentEndings}%</h3>
            <p>Terminaram</p>
          </div>
        </Button>

        <Separator orientation={isMore624px ? 'vertical' : 'horizontal'} />

        <Button variant="ghost">
          <div>
            <h3 className="text-sm">{updatedAt}</h3>
            <p>Atualizado</p>
          </div>
        </Button>
      </CardFooter>
    </Card>
  )
}
