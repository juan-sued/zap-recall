import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { IZapBasic } from '@/interfaces/zapInterfaces'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface CardZap extends Omit<IZapBasic, 'difficulty'> {
  className?: string
}
export default function CardZap({
  id,
  title,
  description,
  percentEndings,
  attempts,
  updatedAt,
  creatAt,
  category,
  className,
  ...props
}: CardZap) {
  const router = useRouter()

  const [isMore624px, setIsMore624px] = useState(false)

  useEffect(() => {
    setIsMore624px(window.innerWidth > 640)
  }, [])

  function goToZapView(id: number) {
    router.push(`/zap-view/${id}`)
  }

  return (
    <Card
      className={cn(
        'w-full  h-full max-w-[390px] grid content-between shadow-md   shadow-[rgba(0,0,0,0.2)] transition-all  hover:cursor-pointer hover:shadow-lg hover:scale-105 active:scale-95 sm:w-fit ',
        className,
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
