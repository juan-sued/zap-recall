'use client'

import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { PlayIcon, User2 } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function ZapView() {
  const params = useParams()
  console.log(params.zapId)
  return (
    <PageBasicTemplate
      titlePage="Deuterostomados"
      cardDescription="Um quiz sobre Deuterostomados"
    >
      <div className="containerContent flex flex-col gap-5">
        <Button className="bg-green-400 w-24 p-6 hover:bg-green-500 hover:scale-105 active:scale-95 transition-all">
          <div className="contentButton flex">
            <PlayIcon />
          </div>
        </Button>

        <ul className="block sm:flex  gap-3 text-sm text-slate-800 dark:text-slate-200">
          <li>Perguntas: 10</li>
          <li>Tentativas: 123</li>
          <li>Terminaram: 53</li>
          <li>Dificuldade: Média</li>
        </ul>

        <div className="border w-fit rounded-lg flex gap-3 p-4 text-slate-800 transition-all hover:bg-slate-200 hover:cursor-pointer active:scale-95 ">
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
            <h3 className="text-sm">Juan Sued</h3>
            <p className="text-sm">14 Zaps</p>
          </div>
        </div>
      </div>
    </PageBasicTemplate>
  )
}
