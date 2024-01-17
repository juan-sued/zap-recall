import { IAnswer } from '@/app/zap/[zapId]/play/page'
import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { CheckCircle2, HelpCircle, PlayIcon, XCircle } from 'lucide-react'
import { useState } from 'react'

interface ICardZapPlay {
  questionId: number
  question: string
  response: string
  position: number
  addAnswer: ({ questionId, answer }: IAnswer) => void
}

export default function CardZapPlay({
  questionId,
  question,
  response,
  position,
  addAnswer,
}: ICardZapPlay) {
  const [isOpenCardQuestion, setIsOpenCardQuestion] = useState(false)

  const [isAnswerOn, setIsAnswerOn] = useState(false)

  const [isDisabledButton, setIsDisabledButton] = useState(false)

  const [typeAnswer, setTypeAnswer] = useState<string | null>(null)

  function selectAnswer({ questionId, answer }: IAnswer) {
    setIsDisabledButton(true)
    setTypeAnswer(answer)
    setIsAnswerOn(false)
    setIsOpenCardQuestion(false)
    addAnswer({ questionId, answer })
  }

  if (isAnswerOn) {
    return (
      <Card
        className={cn(
          'gap-3 justify-between w-full  flex flex-col transition-all ease-in-out duration-500 overflow-hidden',
          isOpenCardQuestion ? 'h-[500px]' : 'h-[76px]',
        )}
      >
        <CardTitle
          className={cn(
            'p-6 h-[80px]  flex justify-between cursor-pointer text-center  text-lg',
            typeAnswer === 'zap'
              ? 'text-green-400 line-through'
              : typeAnswer === 'notRemember'
              ? 'text-red-400 line-through'
              : typeAnswer === 'almostRemember'
              ? 'text-orange-400 line-through	'
              : 'text-slate-700 dark:text-slate-400',
          )}
          onClick={() => setIsOpenCardQuestion(!isOpenCardQuestion)}
        >
          {typeAnswer ? 'Pergunta' : 'Resposta'} {position}
          {typeAnswer === 'zap' ? (
            <CheckCircle2 />
          ) : typeAnswer === 'notRemember' ? (
            <XCircle />
          ) : typeAnswer === 'almostRemember' ? (
            <HelpCircle />
          ) : (
            <PlayIcon />
          )}
        </CardTitle>
        <CardContent
          className={cn(
            ' h-full w-full transition-all  duration-1000 opacity-0  ',
            isOpenCardQuestion ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="p-6 h-full w-full max-h-[385px]  pb-24  rounded-lg bg-slate-100  dark:bg-transparent dark:border">
            <p className="w-full h-full  overflow-y-scroll flex justify-center items-center text-center  break-words whitespace-normal shadow-inner p-2 rounded-lg dark:border">
              {response}
            </p>
          </div>
          <div className="w-full gap-2 flex flex-col  justify-center items-center relative h-[0px]  bottom-8 px-6 ">
            <div className="flex w-full gap-2">
              <Button
                disabled={isDisabledButton}
                onClick={() =>
                  selectAnswer({ questionId, answer: 'notRemember' })
                }
                className=" w-full  p-6 break-words whitespace-normal  bg-red-400 hover:bg-red-500 dark:bg-red-600   dark:hover:bg-red-500 drop-shadow transition-all duration-400"
              >
                Não lembrei
              </Button>
              <Button
                disabled={isDisabledButton}
                onClick={() =>
                  selectAnswer({ questionId, answer: 'almostRemember' })
                }
                className=" w-full  p-6 break-words whitespace-normal   bg-orange-400 hover:bg-orange-500 dark:bg-orange-600 dark:hover:bg-orange-500 drop-shadow transition-all duration-400"
              >
                Quase lembrei
              </Button>
            </div>

            <Button
              disabled={isDisabledButton}
              onClick={() => selectAnswer({ questionId, answer: 'zap' })}
              className=" w-full break-words whitespace-normal   bg-green-400 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 drop-shadow transition-all duration-400"
            >
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
          isOpenCardQuestion ? 'h-[500px]' : 'h-[76px]',
        )}
      >
        <CardTitle
          className={cn(
            'p-6 h-[80px]  flex justify-between cursor-pointer text-center  text-lg',
            typeAnswer === 'zap'
              ? 'text-green-400 line-through	'
              : typeAnswer === 'notRemember'
              ? 'text-red-400 line-through	'
              : typeAnswer === 'almostRemember'
              ? 'text-orange-400 line-through	'
              : 'text-slate-700 dark:text-slate-400',
          )}
          onClick={() => setIsOpenCardQuestion(!isOpenCardQuestion)}
        >
          Pergunta {position}
          {typeAnswer === 'zap' ? (
            <CheckCircle2 />
          ) : typeAnswer === 'notRemember' ? (
            <XCircle />
          ) : typeAnswer === 'almostRemember' ? (
            <HelpCircle />
          ) : (
            <PlayIcon />
          )}
        </CardTitle>
        <CardContent
          className={cn(
            ' h-full w-full transition-all  duration-1000 opacity-0',
            isOpenCardQuestion ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="p-6 h-full w-full max-h-[385px]  pb-24  rounded-lg bg-slate-100 dark:bg-transparent dark:border">
            <p className="w-full h-full  overflow-y-scroll flex justify-center items-center text-center  break-words whitespace-normal shadow-inner p-2 rounded-lg dark:border">
              {question}
            </p>
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
