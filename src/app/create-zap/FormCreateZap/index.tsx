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
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, CheckIcon, MoveVertical, Plus, Trash } from 'lucide-react'
import Link from 'next/link'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { zapFormSchema } from './schemas'
import { useToast } from '@/components/ui/use-toast'
import { ZapFormValues } from './types'

const categories = [
  { label: 'Matemática', value: 'matematica' },
  { label: 'Português', value: 'portugues' },
  { label: 'História', value: 'historia' },
  { label: 'Geografia', value: 'geografia' },
  { label: 'Ciências', value: 'ciencias' },
  { label: 'Inglês', value: 'ingles' },
  { label: 'Educação Física', value: 'educacao_fisica' },
  { label: 'Artes', value: 'artes' },
  { label: 'Biologia', value: 'biologia' },
  { label: 'Física', value: 'fisica' },
  { label: 'Química', value: 'quimica' },
  { label: 'Filosofia', value: 'filosofia' },
  { label: 'Sociologia', value: 'sociologia' },
  { label: 'Espanhol', value: 'espanhol' },
  { label: 'Francês', value: 'frances' },
  { label: 'Alemão', value: 'alemao' },
  { label: 'Italiano', value: 'italiano' },
  { label: 'Música', value: 'musica' },
  { label: 'Teatro', value: 'teatro' },
] as const

const defaultValues: Partial<ZapFormValues> = {
  title: '',
  description: '',
  category: '',
  newCategory: '',
  questions: [
    {
      question: '',
      response: '',
    },
  ],
}

export default function FormCreateZap() {
  const form = useForm<ZapFormValues>({
    resolver: zodResolver(zapFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'questions',
  })

  const { toast } = useToast()

  function onSubmit(data: ZapFormValues) {
    // validate categories
    if (data.category === '' && data.newCategory === '') {
      form.setError('category', {
        message: 'Uma categoria ou uma nova categoria deve ser selecionada',
      })

      return
    }
    toast({
      variant: 'sucess',
      title: 'Você enviou os seguintes valores:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
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
            name="category"
            render={({ field }) => (
              <FormItem className="flex flex-col w-80">
                <FormLabel className="leading-5">Categoria</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        role="combobox"
                        className={cn(
                          'w-[200px] justify-between',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value
                          ? categories.find(
                              (category) => category.value === field.value,
                            )?.label
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
                          {categories.map((category) => (
                            <CommandItem
                              value={category.label}
                              key={category.value}
                              className="cursor-pointer"
                              onSelect={() => {
                                form.setValue('category', category.value)
                              }}
                            >
                              <CheckIcon
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  category.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                              {category.label}
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
            control={form.control}
            name="newCategory"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nova categoria</FormLabel>
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
