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
import CardZap from '../shared/Cards/CardZap'
import zapMocks from '@/Mock/ZapMocks'
import AddZapButton from '../shared/Buttons/AddZapButton'

export default function ListZaps() {
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
      // const response = await axiosAdvicesLip.get(`/${searchQuery}`)
      //    setListCardResponse(response.data)
      //  console.log(response.data)
    } catch (error) {
      console.error('Erro ao buscar resultados:', error)
    }
  }

  return (
    <>
      <section className="searchZaps w-full flex flex-col space-y-8 items-center justify-center mt-10">
        <div className="flex w-full justify-center items-center gap-2">
          <AddZapButton>Crie</AddZapButton>
          <h2>ou busque um Zap</h2>
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
                      <div className="w-0">
                        <Search
                          className="relative left-2"
                          onMouseEnter={() => setIsHovered(true)}
                        />
                      </div>

                      <Input
                        placeholder={'Buscar Zaps'}
                        {...field}
                        className={`w-1 pl-7 overflow-hidden rounded-full text-white placeholder:text-white shadow-lg shadow-red-900 border-none hover:w-80 hover:shadow-inner transition-all hover:duration-1000 active:w-80  bg-red-500 dark:bg-slate-900  dark:shadow-slate-950  hover:pl-10 ${
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
            {zapMocks.ZAP_BASIC.map((zap, index) => {
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
                  category={zap.category}
                  description={zap.description}
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
