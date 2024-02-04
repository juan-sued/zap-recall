'use client'

import { Button } from '@/components/ui/button'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, CheckIcon, MoveVertical, Plus, Trash } from 'lucide-react'
import Link from 'next/link'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { zapFormSchema } from './schemas'
import { ZapFormValues } from './types'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { useQuiz } from '@/providers/useQuiz'
import { ICategory } from '@/interfaces/categories'
import { getCategories } from '@/services/categories'
import { useQuery } from '@tanstack/react-query'
const defaultValues: Partial<ZapFormValues> = {
  title: '',
  description: '',
  categoryId: null,
  newCategory: '',
  questions: [
    {
      question: '',
      response: '',
    },
  ],
}

export default function FormCreateZap() {
  const { createZap } = useQuiz()
  const { data } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
  const { toast } = useToast()

  const [isCheckedNewCategory, setIsCheckedNewCategory] = useState(false)

  const form = useForm<ZapFormValues>({
    resolver: zodResolver(zapFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions',
  })

  function onSubmit(data: ZapFormValues) {
    if (isCheckedNewCategory) {
      data.categoryId = null
    } else if (!isCheckedNewCategory) {
      data.newCategory = ''
    }
    if (data.categoryId === null && data.newCategory === '') {
      form.setError('categoryId', {
        message: 'Selecione ou crie uma categoria.',
      })
      return
    }
    if (data.questions.length === 0) {
      toast({
        variant: 'destructive',
        title: 'Deve ser criado ao menos uma pergunta.',
      })

      return
    }
    createZap(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="titleAndDescription flex flex-col gap-6 ">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Fisiologia Humana: Sistema Cardiovascular"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Este é título do seu Zap.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Explore o funcionamento do sistema circulatório humano, incluindo o coração, vasos sanguíneos e circulação sanguínea."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Uma breve descrição do Zap.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="sectionCategory flex flex-col  gap-10 justify-between items-start sm:flex-row ">
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col w-80">
                <FormLabel className="leading-5">Categoria</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        disabled={isCheckedNewCategory}
                        type="button"
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-[200px] justify-between',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value
                          ? data?.find(
                              (category) => category.id === Number(field.value),
                            )?.title
                          : 'Selecionar categoria'}
                        <MoveVertical className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Buscar categoria..." />
                      <CommandEmpty>Nenhuma categoria encontrada.</CommandEmpty>

                      <CommandGroup>
                        <ScrollArea className="h-60 ">
                          {data?.map((category) => (
                            <CommandItem
                              value={category.title}
                              key={category.id}
                              className="cursor-pointer"
                              onSelect={() => {
                                form.setValue('categoryId', category.id)
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  category.id === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                              {category.title}
                            </CommandItem>
                          ))}
                        </ScrollArea>
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Escolha a categoria do seu Zap
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            disabled={!isCheckedNewCategory}
            control={form.control}
            name="newCategory"
            render={({ field }) => (
              <FormItem className="w-full  pt-1">
                <div className="flex gap-2 justify-start items-center">
                  <Checkbox
                    onClick={() =>
                      setIsCheckedNewCategory(!isCheckedNewCategory)
                    }
                    checked={isCheckedNewCategory}
                  />
                  <FormLabel>Nova categoria</FormLabel>
                </div>

                <FormControl>
                  <Input placeholder="Biologia Molecular" {...field} />
                </FormControl>
                <FormDescription>Não encontrou? Crie uma!</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <div>
          {fields.map((field, index) => (
            <FormField
              name={`questions.${index}`}
              control={form.control}
              key={field.id}
              render={() => (
                <FormItem>
                  <div className="pb-6">
                    <FormLabel className={cn(index !== 0 && 'sr-only')}>
                      Perguntas
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && 'sr-only')}>
                      Agora vamos criar as perguntas e respostas.
                    </FormDescription>
                  </div>

                  <div className="w-full grid gap-7 bg-slate-100 border dark:bg-slate-950 rounded-lg transition-all  p-5  animate__animated  animate__fadeInLeft">
                    <div className="flex flex-col justify-between  gap-7 sm:flex-row ">
                      <div className=" w-full ">
                        <FormLabel>Pergunta {index + 1} </FormLabel>
                        <FormControl>
                          <Controller
                            render={({ field }) => <Textarea {...field} />}
                            name={`questions.${index}.question`}
                            control={form.control}
                          />
                        </FormControl>

                        <FormDescription>
                          Deve possuir ao menos 10 caracteres.
                        </FormDescription>
                      </div>
                      <div className="w-full">
                        <FormLabel>Resposta {index + 1}</FormLabel>
                        <FormControl>
                          <Controller
                            render={({ field }) => <Textarea {...field} />}
                            name={`questions.${index}.response`}
                            control={form.control}
                          />
                        </FormControl>
                        <FormDescription>
                          Deve possuir ao menos 1 caracter.
                        </FormDescription>
                      </div>
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-destructive hover:bg-red-600"
                      onClick={() => remove(index)}
                    >
                      <Trash />
                    </Button>
                  </div>
                </FormItem>
              )}
            />
          ))}
          <Link href="#down-page">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 flex gap-3 w-full text-muted-foreground"
              onClick={() => append({ question: '', response: '' })}
            >
              <Plus className="w-4" />
              Adicionar Pergunta
            </Button>
          </Link>
        </div>
        <Button
          className="bg-green-600 hover:bg-green-700 hover:scale-105  active:scale-95 flex gap-3"
          type="submit"
        >
          <Check className="w-7" />
          Confirmar
        </Button>
      </form>
    </Form>
  )
}
