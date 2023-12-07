'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function CardWithFloatButton({
  className,
}: {
  className: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div
        className={`${cn(
          className,
        )} group flex flex-col justify-start items-start gap-2 w-full h-[280px] duration-500 relative rounded-lg p-4 bg-white dark:bg-transparent dark:border-slate-70000 dark:border hover:-translate-y-2 hover:shadow-xl shadow-gray-400 hover:h-[460px]
        animate__animated animate__fadeIn
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 rounded-lg bg-slate-100 p-5">
          <div className="space-y-3">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/92616927?v=4"
                alt="Avatar Image"
              />
              <AvatarFallback>FB</AvatarFallback>
            </Avatar>

            <p className="text-muted-foreground"> Criado por Juan Sued</p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-700 drop-shadow-sm dark:text-slate-50">
            Deuterostomados
          </h2>

          <div className="text-muted-foreground flex justify-between flex-wrap">
            <div className="flex gap-1">
              <p>Dificuldade: </p>
              <p className="text-red-600 font-bold">Difícil</p>
            </div>
            <div className="flex gap-1">
              <p>Tentativas: </p>
              <p className="text-slate-600 font-bold">241</p>
            </div>

            <div className="flex gap-1">
              <p>Atualizado em: </p>
              <p className="text-slate-600 font-bold">21/10/2023</p>
            </div>

            <div className="flex gap-1">
              <p>Perguntas: </p>
              <p className="text-slate-700 font-bold">9</p>
            </div>
            <div className="flex gap-1">
              <p>Tempo médio: </p>
              <p className="text-slate-600 font-bold">43min</p>
            </div>

            <div className="flex gap-1">
              <p>Acharam relevante: </p>
              <p className="text-green-600 font-bold">82%</p>
            </div>
          </div>

          <p
            id="descriptionZapDinamic"
            className={`${cn(
              isHovered
                ? 'transition-all duration-700 animate__animated animate__fadeIn line-clamp-[10]'
                : 'line-clamp-3 ',
            )} text-black  text-justify`}
          >
            aborda um grupo diversificado de animais que compartilham um
            processo de desenvolvimento embrionário específico, denominado
            deuterostomia. Estes organismos incluem cordados (como vertebrados),
            equinodermos (como estrelas-do-mar) e outros grupos relacionados. O
            questionário pode exp aborda um grupo diversificado de animais que
            compartilham um processo de desenvolvimento embrionário específico,
            denominado deuterostomia. Estes organismos incluem cordados (como
            vertebrados), equinodermos (como estrelas-do-mar) e outros grupos
            relacionados. O questionário pode explorar lorar características
            anatômicas, fisiológicas e comportamentais dos deuterostomados, bem
            como seus habitats, importância ecológica e eventual relevância para
            a pesquisa científica. A compreensão desses aspectos contribui para
            a apreciação da biodiversidade e das complexidades evolutivas
            associadas a esse grupo animal.
          </p>
        </div>
        <button className="hover:bg-green-400 bg-green-500 text-white mt-6 rounded p-2 px-6 ">
          Vamos la!
        </button>
      </div>
    </>
  )
}
