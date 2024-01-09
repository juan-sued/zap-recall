'use client'

import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { IZap } from '@/interfaces/zapInterfaces'
import zapsQuery, { getZaps } from '@/services/zaps'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { PlayIcon, User2 } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function ZapView() {
  const params = useParams()

  const queryClient = useQueryClient()

  const { data, isFetching, isError } = useQuery<IZap>({
    queryKey: ['zapById'],
    queryFn: () => zapsQuery.getZapById(Number(params.zapId)),
  })

  if (isFetching) {
    return (
      <>
        <div className="aa">aaa</div>
      </>
    )
  } else {
    return (
      <PageBasicTemplate
        titlePage="Deuterostomados"
        cardDescription="Um quiz sobre Deuterostomados"
      >
        <Button className="bg-green-400 w-full  p-6 hover:bg-green-500  active:scale-95 transition-all">
          <div className="contentButton flex">
            <PlayIcon />
          </div>
        </Button>

        <section className="contentDetails flex justify-between items-center pt-6  pb-2">
          <ul className=" flex flex-col sm:flex-row  gap-3  justify-between     text-sm text-slate-800 dark:text-slate-200">
            <li>Perguntas: {data?.quizzyQuestion.length}</li>
            <li>Categoria: {data?.category.title}</li>
            <li>Terminaram: 53</li>
            <li>Dificuldade: Média</li>
          </ul>

          <div className="border min-w-fit rounded-lg flex flex-col items-center justify-center sm:flex-row    gap-3 p-4 text-slate-800  transition-all hover:bg-slate-200 dark:hover:bg-slate-900 hover:cursor-pointer active:scale-95 ">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/92616927?v=4"
                alt="Avatar Image"
              />
              <AvatarFallback>
                <User2 />
              </AvatarFallback>
            </Avatar>

            <div className=" flex flex-col justify-center">
              <h3 className="text-sm text-muted-foreground">
                {data?.user.name}
              </h3>
              <p className="text-sm text-muted-foreground">14 Zaps</p>
            </div>
          </div>
        </section>
      </PageBasicTemplate>
    )
  }
}
