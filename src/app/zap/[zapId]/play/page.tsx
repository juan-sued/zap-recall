'use client'

import CardZapPlay from '@/components/shared/Cards/CardZapPlay'
import SkeletonCard from '@/components/shared/Loaders/SkeletonCard'
import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { IZap } from '@/interfaces/zapInterfaces'
import { cn } from '@/lib/utils'
import { useAuth } from '@/providers/useAuth'
import zapsQuery from '@/services/zaps'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface IAnswer {
  questionId: number
  answer: string
}

export interface IObjRegisterAnswer {
  quizId: number
  answers: IAnswer[]
  isLiked: boolean | null
}

export default function ZapPlayPage() {
  const { isAuthenticated } = useAuth()

  const router = useRouter()
  const { toast } = useToast()

  const queryClient = useQueryClient()
  const zap: IZap | undefined = queryClient.getQueryData(['zapById'])
  console.log(zap?.isLiked)
  const [answerSelectedsList, setAnswerSelectedsList] = useState<IAnswer[]>([])

  const [isLiked, setIsLiked] = useState<boolean | null>(null)

  function addAnswer({ questionId, answer }: IAnswer) {
    // Cria um novo array com a nova resposta adicionada
    const updatedAnswerList = [...answerSelectedsList, { questionId, answer }]

    setAnswerSelectedsList(updatedAnswerList)
  }

  const [isFinishedQuiz, setIsFinishedQuiz] = useState(false)

  const registerAnswerMutation = useMutation({
    mutationFn: zapsQuery.registerAnswer,

    onError: (error) => {
      if (error.message.includes('422')) {
        toast({
          variant: 'destructive',
          title: `Opss!!! ${error.message}`,
        })
      } else {
        console.log(error.message)
        toast({
          variant: 'destructive',
          title: 'Lamento! Não foi possível salvar sua resposta',
        })
      }
    },
    onSuccess: () => {
      toast({
        variant: 'sucess',
        title: `Resposta salva com sucesso!`,
      })

      router.push('/')
    },
  })
  const incrementAttemptMutation = useMutation({
    mutationFn: zapsQuery.incrementAttempt,
    onError: (error) => {
      if (error.message.includes('422')) {
        toast({
          variant: 'destructive',
          title: `Opss!!! ${error.message}`,
        })
      } else {
        console.log(error.message)
        toast({
          variant: 'destructive',
          title: 'Lamento! Não foi possível salvar sua resposta',
        })
      }
    },
    onSuccess: () => {
      toast({
        variant: 'sucess',
        title: `Resposta salva com sucesso! Faça login para ter um histórico`,
      })

      router.push('/')
    },
  })

  function handleDataQuiz() {
    if (!zap) return

    if (isAuthenticated) {
      registerAnswerMutation.mutate({
        quizId: zap.id,
        answers: answerSelectedsList,
        isLiked,
      })
    } else {
      incrementAttemptMutation.mutate(zap.id)
    }
  }
  // responsável pelos toasts pós-game
  useEffect(() => {
    if (!zap) return
    const totalQuestions = zap.questions.length
    const correctAnswers = answerSelectedsList.filter(
      (answer) => answer.answer === 'zap',
    ).length
    const accuracyPercentage = (correctAnswers / totalQuestions) * 100
    const isFinished = answerSelectedsList.length === totalQuestions

    if (isFinished) setIsFinishedQuiz(true)

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
  }, [answerSelectedsList, toast, zap, queryClient])
  if (zap) {
    return (
      <div className="animate__animated animate__fadeIn ">
        <PageBasicTemplate
          titlePage={zap.title}
          haveMotivations={false}
          className="w-full  bg-transparent border-transparent  bg-red-300 dark:bg-transparent dark:border-slate-800"
        >
          <ul className="flex flex-col gap-5">
            {zap.questions.map((zapQuestion, index) => {
              const { id, question, response } = zapQuestion

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

          <div
            className={cn(
              `flex gap-3 pt-6 `,
              zap.isLiked === null && isAuthenticated && isFinishedQuiz
                ? 'flex'
                : 'hidden',
            )}
          >
            <Button
              onClick={() => setIsLiked(false)}
              className={cn(
                `w-full drop-shadow     `,
                isLiked !== null && isLiked === false
                  ? 'bg-red-400 dark:border-red-400 dark:border  text-white hover:bg-red-400  dark:transparent dark:text-blueTheme-500'
                  : 'bg-white hover:bg-red-400  hover:text-white  text-red-400 dark:bg-blueTheme-500 dark:border-red-400 dark:border dark:hover:bg-red-400 dark:hover:text-blueTheme-500',
              )}
            >
              <ThumbsDown />
            </Button>
            <Button
              onClick={() => setIsLiked(true)}
              className={cn(
                `w-full drop-shadow `,
                isLiked
                  ? 'bg-green-400  text-white hover:bg-green-500  dark:bg-green-400 dark:text-blueTheme-500 dark:border dark:hover:bg-green-400 dark:hover:text-blueTheme-500'
                  : 'bg-white hover:bg-green-400  hover:text-white text-green-400  dark:bg-blueTheme-500 dark:border-green-400 dark:border dark:hover:bg-green-400 dark:hover:text-blueTheme-500',
              )}
            >
              <ThumbsUp />
            </Button>
          </div>

          <Button
            onClick={handleDataQuiz}
            className={cn(
              `text-lg font-bold w-full  drop-shadow  bg-green-500 hover:bg-green-600  text-center hidden mt-5 active:bg-green-700 transition-all `,
              isFinishedQuiz
                ? 'h-[75px] block animate__animated animate__backInUp '
                : '',
            )}
          >
            Finalizar
          </Button>
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
