import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { IZapBasic } from '@/interfaces/zapInterfaces'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CardZap extends Omit<IZapBasic, 'difficulty'> {
  className?: string
}
export default function CardZap({
  id,
  title,
  description,
  category,
  percentEndings,
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
    <Link href={`/zap/${id}`} className="w-full h-full">
      <Card
        className={cn(
          'w-full   h-full grid content-between shadow-md  shadow-[rgba(0,0,0,0.2)] transition-all  hover:cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95 sm:min-w-fit ',
          className,
        )}
        {...props}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
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
    </Link>
  )
}
