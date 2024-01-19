import { ReactNode, createContext, useContext } from 'react'
import { useMutation } from '@tanstack/react-query'

import zapsQuery from '@/services/zaps'
import { toast } from '@/components/ui/use-toast'
import { queryClient } from '@/services/queryClient'
import { useRouter } from 'next/navigation'
import { ZapFormValues } from '@/app/(privates-routes)/create-zap/FormCreateZap/types'

type QuizContextType = {
  createZap: (data: ZapFormValues) => void
}

export const QuizContext = createContext({} as QuizContextType)

export function QuizProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const createZapMutation = useMutation({
    mutationFn: zapsQuery.createZap,
    onError: (error) => {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'Opss! Não foi possível criar o zap.',
      })
    },
    onSuccess: () => {
      toast({
        variant: 'sucess',
        title: 'Zap criado com sucesso!',
      })
      queryClient.invalidateQueries({ queryKey: ['zaps'] })

      queryClient.invalidateQueries({ queryKey: ['categories'] })
      router.push('/')
    },
  })

  function createZap({
    title,
    description,
    categoryId,
    newCategory,
    questions,
  }: ZapFormValues) {
    const dataWithDifficulty = {
      ...{ title, description, categoryId, newCategory, questions },
      difficulty: 'EASY',
    }

    createZapMutation.mutate(dataWithDifficulty)
  }

  return (
    <QuizContext.Provider
      value={{
        createZap,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
export function useQuiz(): QuizContextType {
  const quizContext = useContext(QuizContext)

  if (!quizContext) {
    throw new Error('useQuiz deve ser usado dentro de um QuizProvider')
  }

  return quizContext
}
