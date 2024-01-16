'use client'

import CardZapPlay from '@/components/shared/Cards/CardZapPlay'
import SkeletonCard from '@/components/shared/Loaders/SkeletonCard'
import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import { IZap } from '@/interfaces/zapInterfaces'
import { useQueryClient } from '@tanstack/react-query'

export default function ZapPlayPage() {
  const queryClient = useQueryClient()
  const zap: IZap | undefined = queryClient.getQueryData(['zapById'])
  console.log(zap)

  if (zap) {
    return (
      <div className="animate__animated animate__fadeIn ">
        <PageBasicTemplate
          titlePage={zap.title}
          haveMotivations={false}
          className="w-full  bg-transparent border-transparent  bg-red-300 "
        >
          <ul className="flex flex-col gap-5">
            {zap.quizzyQuestion.map((zap, index) => (
              <CardZapPlay
                key={zap.question.id}
                number={index + 1}
                question={zap.question.question}
                response={zap.question.response}
              />
            ))}
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
