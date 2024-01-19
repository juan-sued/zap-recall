'use client'

import SkeletonCard from '@/components/shared/Loaders/SkeletonCard'
import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { IZap } from '@/interfaces/zapInterfaces'
import zapsQuery from '@/services/zaps'
import { useQuery } from '@tanstack/react-query'
import { PlayIcon, User2 } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

export default function ZapViewPage() {
  const params = useParams()

  const { data, isFetching, isError } = useQuery<IZap>({
    queryKey: ['zapById'],
    queryFn: () => zapsQuery.getZapById(params.zapId),
  })

  const router = useRouter()
  console.log(data)
  if (data) {
    return (
      <div className="animate__animated animate__fadeIn ">
        <PageBasicTemplate
          titlePage={data.title}
          cardDescription={data.description}
        >
          <Button
            className="bg-green-400 w-full  p-6 hover:bg-green-500  active:scale-95 transition-all"
            onClick={() => router.push(`/zap/${params.zapId}/play`)}
          >
            <div className="contentButton flex">
              <PlayIcon />
            </div>
          </Button>

          <section className="contentDetails flex justify-between items-center pt-6  pb-2">
            <ul className=" flex flex-col sm:flex-row  gap-3  justify-between     text-sm text-slate-800 dark:text-slate-200">
              <li>Perguntas: {data.questions.length}</li>
              <li>Categoria: {data.category.title}</li>
              <li>Terminaram: 53</li>
              <li>Dificuldade: Média</li>
            </ul>

            <div className="border  w-[150px] sm:w-fit rounded-lg flex flex-col items-center justify-center sm:flex-row    gap-3 p-4 text-slate-800  transition-all hover:bg-slate-200 dark:hover:bg-slate-900 hover:cursor-pointer active:scale-95 ">
              <Avatar>
                <AvatarImage
                  src="https://api.minimalavatars.com/avatar/random/svg"
                  alt="Avatar Image"
                />
                <AvatarFallback>
                  <User2 />
                </AvatarFallback>
              </Avatar>

              <div className=" flex flex-col justify-center  text-center gap-3  max-w-[150px] p-5">
                <h3 className="text-sm text-muted-foreground  truncate">
                  {data.user.name}
                </h3>
                <p className="text-sm text-muted-foreground">14 Zaps</p>
              </div>
            </div>
          </section>
        </PageBasicTemplate>
      </div>
    )
  } else if (isFetching) {
    return (
      <PageBasicTemplate>
        <SkeletonCard />
        <SkeletonCard />
      </PageBasicTemplate>
    )
  } else if (isError) {
    return (
      <div className="animate__animated animate__fadeIn ">
        <PageBasicTemplate
          titlePage="Opss!!"
          cardTitle="Parece que não foi possível atualizar os dados..."
        >
          <p>Por favor, retorne ou tente recarregar a página</p>
        </PageBasicTemplate>
      </div>
    )
  }
}
