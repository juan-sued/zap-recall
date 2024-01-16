import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { PlayIcon } from 'lucide-react'
import { useState } from 'react'

interface ICardZapPlay {
  question: string
  response: string
  number: number
}

export default function CardZapPlay({
  question,
  response,
  number,
}: ICardZapPlay) {
  const [isOpenCardQuestion, setIsOpenCardQuestion] = useState(false)

  return (
    <Card
      className={cn(
        'gap-3 justify-between w-full  flex flex-col transition-all ease-in-out duration-500 overflow-hidden',
        isOpenCardQuestion ? 'h-[500px]' : 'h-[80px]',
      )}
    >
      <CardTitle
        className="p-6 h-[80px]  flex justify-between cursor-pointer"
        onClick={() => setIsOpenCardQuestion(!isOpenCardQuestion)}
      >
        <h1 className="text-center text-slate-700 text-lg">
          Pergunta {number}
        </h1>
        <PlayIcon color="#334155" />
      </CardTitle>
      <CardContent
        className={cn(
          ' h-full w-full transition-all  duration-1000 opacity-0',
          isOpenCardQuestion ? 'opacity-100' : 'opacity-0',
        )}
      >
        <div className="p-6  h-full w-full rounded-lg bg-slate-100  flex justify-center items-center ">
          <p className="">{question}</p>
        </div>
        <div className="w-full  flex justify-center items-center">
          <Button className="w-[90%] relative bottom-6 bg-green-400 hover:bg-green-500">
            Ver resposta
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
