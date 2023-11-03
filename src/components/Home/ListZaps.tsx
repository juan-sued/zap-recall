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
  difficulty: 'easy' | 'medium' | 'hard'
  percentEndings: number
  attempts: number
  creatAt: Date
  updatedAt: Date
}

export default function ListZaps() {
  const mockZaps: IZapBasic[] = [
    {
      id: 1,
      title: 'Zap 1',
      difficulty: 'easy',
      percentEndings: 90,
      attempts: 25,

      creatAt: new Date('2023-10-10'),
      updatedAt: new Date('2023-10-12'),
    },
    {
      id: 2,
      title: 'Zap 2',
      difficulty: 'medium',
      percentEndings: 60,
      attempts: 50,

      creatAt: new Date('2023-09-15'),
      updatedAt: new Date('2023-09-18'),
    },
    {
      id: 3,
      title: 'Zap 3',
      difficulty: 'hard',
      percentEndings: 30,
      attempts: 100,
      creatAt: new Date('2023-08-20'),
      updatedAt: new Date('2023-08-22'),
    },
    {
      id: 1,
      title: 'Zap 1',
      difficulty: 'easy',
      percentEndings: 90,
      attempts: 25,

      creatAt: new Date('2023-10-10'),
      updatedAt: new Date('2023-10-12'),
    },
    {
      id: 2,
      title: 'Zap 2',
      difficulty: 'medium',
      percentEndings: 60,
      attempts: 50,

      creatAt: new Date('2023-09-15'),
      updatedAt: new Date('2023-09-18'),
    },
    {
      id: 3,
      title: 'Zap 3',
      difficulty: 'hard',
      percentEndings: 30,
      attempts: 100,
      creatAt: new Date('2023-08-20'),
      updatedAt: new Date('2023-08-22'),
    },
    {
      id: 1,
      title: 'Zap 1',
      difficulty: 'easy',
      percentEndings: 90,
      attempts: 25,

      creatAt: new Date('2023-10-10'),
      updatedAt: new Date('2023-10-12'),
    },
    {
      id: 2,
      title: 'Zap 2',
      difficulty: 'medium',
      percentEndings: 60,
      attempts: 50,

      creatAt: new Date('2023-09-15'),
      updatedAt: new Date('2023-09-18'),
    },
    {
      id: 3,
      title: 'Zap 3',
      difficulty: 'hard',
      percentEndings: 30,
      attempts: 100,
      creatAt: new Date('2023-08-20'),
      updatedAt: new Date('2023-08-22'),
    },
    // Adicione mais mocks conforme necessário
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
        <div className="listCardZaps  w-full h-full p-20 ">
          <div className=" h-full grid grid-cols-1  gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  place-items-center	">
            {mockZaps.map((zap, index) => (
              <CardZap
                key={index}
                id={zap.id}
                title={zap.title}
                difficulty={zap.difficulty}
                percentEndings={zap.percentEndings}
                updatedAt={zap.updatedAt}
                creatAt={zap.creatAt}
                attempts={zap.attempts}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
