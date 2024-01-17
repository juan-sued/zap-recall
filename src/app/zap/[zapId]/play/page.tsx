'use client'

import CardZapPlay from '@/components/shared/Cards/CardZapPlay'
import SkeletonCard from '@/components/shared/Loaders/SkeletonCard'
import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import { useToast } from '@/components/ui/use-toast'
import { IZap } from '@/interfaces/zapInterfaces'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export interface IAnswer {
  questionId: number
  answer: string
}

interface IObjRegisterAnswer {
  quizId: number
  answers: IAnswer[]
}

export default function ZapPlayPage() {
  const { toast } = useToast()

  const queryClient = useQueryClient()
  const zap: IZap | undefined = queryClient.getQueryData(['zapById'])

  const [objRegisterAnswer, setObjRegisterAnswer] =
    useState<IObjRegisterAnswer | null>(null)

  const [answerSelectedsList, setAnswerSelectedsList] = useState<IAnswer[]>([])

  function addAnswer({ questionId, answer }: IAnswer) {
    // Cria um novo array com a nova resposta adicionada
    const updatedAnswerList = [...answerSelectedsList, { questionId, answer }]

    setAnswerSelectedsList(updatedAnswerList)
  }

  useEffect(() => {
    if (!zap) return
    const totalQuestions = zap.quizzyQuestion.length
    const correctAnswers = answerSelectedsList.filter(
      (answer) => answer.answer === 'zap',
    ).length

    const isFinished = answerSelectedsList.length === totalQuestions

    const accuracyPercentage = (correctAnswers / totalQuestions) * 100
    if (isFinished && answerSelectedsList.length === correctAnswers) {
      toast({
        variant: 'sucess',
        title: `Parabéns!!! Você acertou ${accuracyPercentage}% as perguntas!`,
      })
    } else if (isFinished && accuracyPercentage > 50) {
      toast({
        variant: 'sucess',
        title: `Continue assim!!! Você acertou mais da metade!`,
      })
    } else if (isFinished && accuracyPercentage > 0) {
      toast({
        variant: 'sucess',
        title: `Quase lá!!! Tente um pouco mais!`,
      })
    } else if (isFinished && accuracyPercentage === 0) {
      toast({
        variant: 'destructive',
        title: `Não desanime!!! A verdadeira derrota é a desistência!`,
      })
    }
  }, [answerSelectedsList, toast, zap])
  if (zap) {
    return (
      <div className="animate__animated animate__fadeIn ">
        <PageBasicTemplate
          titlePage={zap.title}
          haveMotivations={false}
          className="w-full  bg-transparent border-transparent  bg-red-300 dark:bg-transparent dark:border-slate-800"
        >
          <ul className="flex flex-col gap-5">
            {zap.quizzyQuestion.map((zap, index) => {
              const { id, question, response } = zap.question

              return (
                <CardZapPlay
                  key={id}
                  position={index + 1}
                  question={question}
                  response={response}
                  addAnswer={addAnswer}
                  questionId={id}
                />
              )
            })}
          </ul>
        </PageBasicTemplate>
      </div>
    )
  } else {
    return (
      <PageBasicTemplate>
        <SkeletonCard />
        <SkeletonCard />
      </PageBasicTemplate>
    )
  }
}
