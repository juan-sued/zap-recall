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

  const [isAnswerOn, setIsAnswerOn] = useState(false)
  if (isAnswerOn) {
    return (
      <Card
        className={cn(
          'gap-3 justify-between w-full  flex flex-col transition-all ease-in-out duration-500 overflow-hidden',
          isOpenCardQuestion ? 'h-[500px]' : 'h-[80px]',
        )}
      >
        <CardTitle
          className="p-6 h-[80px]  flex justify-between cursor-pointer text-center text-slate-700 text-lg"
          onClick={() => setIsOpenCardQuestion(!isOpenCardQuestion)}
        >
          Resposta {number}
          <PlayIcon color="#334155" />
        </CardTitle>
        <CardContent
          className={cn(
            ' h-full w-full transition-all  duration-1000 opacity-0  ',
            isOpenCardQuestion ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="p-6 h-full w-full max-h-[385px]  pb-24  rounded-lg bg-slate-100  flex justify-center items-center ">
            <p className="w-full h-full overflow-y-scroll break-words whitespace-normal shadow-inner p-2 rounded-lg">
              {response}
            </p>
          </div>
          <div className="w-full gap-2 flex flex-col  justify-center items-center relative h-[0px]  bottom-8 px-6 ">
            <div className="flex w-full gap-2">
              <Button className=" w-full  p-6 break-words whitespace-normal  bg-red-400 hover:bg-red-500 drop-shadow transition-all duration-400">
                Não lembrei
              </Button>
              <Button className=" w-full  p-6 break-words whitespace-normal   bg-orange-400 hover:bg-orange-500 drop-shadow transition-all duration-400">
                Quase lembrei
              </Button>
            </div>

            <Button className=" w-full   break-words whitespace-normal   bg-green-400 hover:bg-green-500 drop-shadow transition-all duration-400">
              Zap!
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  } else {
    return (
      <Card
        className={cn(
          'gap-3 justify-between w-full  flex flex-col transition-all ease-in-out duration-500 overflow-hidden',
          isOpenCardQuestion ? 'h-[500px]' : 'h-[80px]',
        )}
      >
        <CardTitle
          className="p-6 h-[80px]  flex justify-between cursor-pointer text-center text-slate-700 text-lg"
          onClick={() => setIsOpenCardQuestion(!isOpenCardQuestion)}
        >
          Pergunta {number}
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
          <div className="w-full  flex justify-center items-center h-0">
            <Button
              className="w-[90%] relative bottom-2 bg-green-400 hover:bg-green-500"
              onClick={() => setIsAnswerOn(true)}
            >
              Ver resposta
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }
}
