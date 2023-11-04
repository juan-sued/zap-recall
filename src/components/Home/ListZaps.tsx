'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { axiosAdvicesLip } from '@/services/axios'
import CardZap from '../shared/Cards/CardZap'

export interface IZapBasic {
  id: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  percentEndings: number
  attempts: number
  creatAt: string
  updatedAt: string
}

export default function ListZaps() {
  const mockZaps: IZapBasic[] = [
    {
      id: 1,
      title: 'Ciclo Celular e Divisão Celular',
      description:
        'Este questionário explora os diferentes estágios do ciclo celular e o processo de divisão celular.',
      difficulty: 'easy',
      percentEndings: 90,
      attempts: 25,
      creatAt: '10/10/2023',
      updatedAt: '12/10/2023',
    },
    {
      id: 2,
      title: 'Genética Mendeliana',
      description:
        'Analise os princípios básicos da genética descobertos por Gregor Mendel e como eles se aplicam a diferentes organismos.',
      difficulty: 'medium',
      percentEndings: 60,
      attempts: 50,
      creatAt: '15/09/2023',
      updatedAt: '18/09/2023',
    },
    {
      id: 3,
      title: 'Fisiologia Humana: Sistema Cardiovascular',
      description:
        'Explore o funcionamento do sistema circulatório humano, incluindo o coração, vasos sanguíneos e circulação sanguínea.',
      difficulty: 'hard',
      percentEndings: 30,
      attempts: 100,
      creatAt: '20/08/2023',
      updatedAt: '22/08/2023',
    },
    {
      id: 4,
      title: 'Ecossistemas Aquáticos',
      description:
        'Estude os diferentes tipos de ecossistemas aquáticos, incluindo oceanos, rios, lagos e pântanos.',
      difficulty: 'medium',
      percentEndings: 70,
      attempts: 40,
      creatAt: '05/11/2023',
      updatedAt: '07/11/2023',
    },
    {
      id: 5,
      title: 'Metabolismo Celular',
      description:
        'Aprofunde-se no processo de metabolismo celular, incluindo catabolismo e anabolismo de diferentes nutrientes.',
      difficulty: 'hard',
      percentEndings: 20,
      attempts: 80,
      creatAt: '08/11/2023',
      updatedAt: '10/11/2023',
    },
    {
      id: 6,
      title: 'Genética Molecular',
      description:
        'Estude os aspectos moleculares da genética, incluindo estrutura do DNA, replicação e expressão gênica.',
      difficulty: 'medium',
      percentEndings: 50,
      attempts: 60,
      creatAt: '12/11/2023',
      updatedAt: '15/11/2023',
    },
    {
      id: 7,
      title: 'Sistema Nervoso: Anatomia e Fisiologia',
      description:
        'Conheça a anatomia e fisiologia do sistema nervoso, incluindo o cérebro, medula espinhal e nervos periféricos.',
      difficulty: 'hard',
      percentEndings: 30,
      attempts: 100,
      creatAt: '18/11/2023',
      updatedAt: '20/11/2023',
    },
    {
      id: 8,
      title: 'Evolução das Espécies',
      description:
        'Explore os mecanismos e evidências da evolução biológica e a diversidade de vida na Terra.',
      difficulty: 'easy',
      percentEndings: 90,
      attempts: 20,
      creatAt: '22/11/2023',
      updatedAt: '25/11/2023',
    },
    {
      id: 9,
      title: 'Microbiologia Básica',
      description:
        'Estude os microrganismos, incluindo bactérias, vírus e fungos, e seu papel em diferentes ambientes e processos biológicos.',
      difficulty: 'medium',
      percentEndings: 70,
      attempts: 35,
      creatAt: '30/11/2023',
      updatedAt: '02/12/2023',
    },
    {
      id: 10,
      title: 'Imunologia: Sistema Imune',
      description:
        'Aprofunde-se no sistema imunológico, incluindo células imunes, resposta imune e imunização.',
      difficulty: 'hard',
      percentEndings: 40,
      attempts: 90,
      creatAt: '05/12/2023',
      updatedAt: '07/12/2023',
    },
  ]

  const formSchema = z.object({
    search: z.string().min(2, {
      message: 'É necessário mais de dois caracteres',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const [isHovered, setIsHovered] = useState(false)

  const [listCardResponse, setListCardResponse] = useState()
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value

    try {
      const response = await axiosAdvicesLip.get(`/${searchQuery}`)
      setListCardResponse(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao buscar resultados:', error)
    }
  }

  return (
    <>
      <section className="searchZaps w-full flex flex-col space-y-8 items-center justify-center mt-10">
        <div className="titleSection  pl-6">
          <h2 className="">Busque um Zap</h2>
        </div>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex justify-center items-center cursor-pointer ">
                      <Search
                        className="relative left-8"
                        onMouseEnter={() => setIsHovered(true)}
                      />
                      <Input
                        placeholder={'Buscar Zaps'}
                        {...field}
                        className={`w-1 pl-7 overflow-hidden rounded-full text-white placeholder:text-white shadow-lg shadow-red-900 border-none hover:w-80 hover:shadow-inner transition-all hover:duration-1000 active:w-80  bg-red-500 hover:pl-10 ${
                          isHovered
                            ? 'duration-1000 w-80 pl-10 shadow-inner'
                            : ''
                        }`}
                        onChange={handleSearch} // Adiciona o evento onChange aqui
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="listCardZaps  w-full h-full p-8 sm:p-20 ">
          <div className=" h-full grid grid-cols-1  gap-4  min-[890px]:grid-cols-2 min-[1270px]:grid-cols-3 min-[1580px]:grid-cols-4  place-items-center">
            {mockZaps.map((zap, index) => {
              let bgColor = 'bg-black'

              switch (zap.difficulty) {
                case 'easy':
                  bgColor = 'text-green-500'
                  break
                case 'medium':
                  bgColor = 'text-yellow-500'
                  break
                case 'hard':
                  bgColor = 'text-red-500'
                  break
              }

              return (
                <CardZap
                  key={index}
                  id={zap.id}
                  title={zap.title}
                  description={zap.description}
                  difficulty={zap.difficulty}
                  percentEndings={zap.percentEndings}
                  updatedAt={zap.updatedAt}
                  creatAt={zap.creatAt}
                  attempts={zap.attempts}
                  className={bgColor}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
