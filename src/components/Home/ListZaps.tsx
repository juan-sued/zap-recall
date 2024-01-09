'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ICategory } from '@/interfaces/categories'
import { IZapBasic } from '@/interfaces/zapInterfaces'
import { getCategories } from '@/services/categories'
import zapsQuery, { getZaps } from '@/services/zaps'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import AddZapButton from '../shared/Buttons/AddZapButton'
import { ListCardsZaps } from './ListCardZaps'

export default function ListZaps() {
  const [isHovered, setIsHovered] = useState(false)

  const categoriesQuery = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  const { data, isFetching, isError } = useQuery<IZapBasic[]>({
    queryKey: ['zaps'],
    queryFn: zapsQuery.getZaps,
  })

  const [filteredListSearch, setFilteredListSearch] = useState<
    IZapBasic[] | undefined
  >(undefined)

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase()

    const filteredZaps = data?.filter((zap) =>
      zap.title.toLowerCase().includes(searchQuery),
    )

    if (filteredZaps) setFilteredListSearch(filteredZaps)
  }

  const formSchema = z.object({
    search: z.string().min(2, {
      message: 'É necessário mais de dois caracteres',
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
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
        <ListCardsZaps
          listZaps={data && !filteredListSearch ? data : filteredListSearch}
          isFetching={isFetching}
          isError={isError}
        />
      </section>
    </>
  )
}
