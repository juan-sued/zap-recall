'use client'

import Main from '@/components/layout/Main'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card'
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
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'

import { Check, CheckIcon, MoveVertical, Plus, Trash } from 'lucide-react'
import Link from 'next/link'

import { Controller, useFieldArray, useForm } from 'react-hook-form'

import { z } from 'zod'

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

const zapFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'O título deve conter mais de 2 caracteres.',
    })
    .max(30, {
      message: 'O título deve conter menos de 30 caracteres.',
    }),

  description: z
    .string()
    .min(10, {
      message: 'A descrição deve conter mais de 10 caracteres.',
    })
    .max(100, {
      message: 'A descrição deve conter menos de 100 caracteres.',
    }),

  category: z.string({
    required_error: 'Por favor selecione uma categoria.',
  }),

  questions: z
    .array(
      z.object({
        pergunta: z
          .string()
          .min(10, {
            message: 'A descrição deve conter mais de 10 caracteres.',
          })
          .max(100, {
            message: 'A descrição deve conter menos de 100 caracteres.',
          }),
        resposta: z
          .string()
          .min(10, {
            message: 'A descrição deve conter mais de 10 caracteres.',
          })
          .max(100, {
            message: 'A descrição deve conter menos de 100 caracteres.',
          }),
      }),
    )
    .optional(),
})

type ZapFormValues = z.infer<typeof zapFormSchema>

const defaultValues: Partial<ZapFormValues> = {
  title: '',
  description: '',
  category: '',
  questions: [
    {
      pergunta: '',
      resposta: '',
    },
  ],
}

export default function CreateZapPage() {
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
    console.log(data)
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Main className="animate__animated animate__fadeIn">
      <section className="titleCreateZap ">
        <h1 className="drop-shadow text-5xl">Criar Zap</h1>
      </section>
      <section className="sectionFormCreateZap h-full w-full p-16 px-56">
        <Card className="w-full  h-full grid content-between shadow-md  shadow-[rgba(0,0,0,0.2)] transition-all  hover:cursor-pointer hover:shadow-lg sm:min-w-fit">
          <CardHeader>
            <CardTitle>Rápido e Fácil</CardTitle>
            <CardDescription>
              Em apenas alguns passos, você ajuda pessoas a se divertir e
              estudar!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Fisiologia Humana: Sistema Cardiovascular"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Este é título do seu Zap.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Explore o funcionamento do sistema circulatório humano, incluindo o coração, vasos sanguíneos e circulação sanguínea."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Uma breve descrição do Zap.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Categoria</FormLabel>
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
                                    (category) =>
                                      category.value === field.value,
                                  )?.label
                                : 'Selecionar categoria'}
                              <MoveVertical className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Buscar categoria..." />
                            <CommandEmpty>
                              Nenhuma categoria encontrada.
                            </CommandEmpty>

                            <CommandGroup>
                              <ScrollArea className="h-60">
                                {categories.map((category) => (
                                  <CommandItem
                                    value={category.label}
                                    key={category.value}
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

                <div>
                  {fields.map((field, index) => (
                    <FormField
                      name={`questions.${index}`}
                      control={form.control}
                      key={field.id}
                      render={() => (
                        <FormItem>
                          <div className="pb-8">
                            <FormLabel className={cn(index !== 0 && 'sr-only')}>
                              Perguntas
                            </FormLabel>
                            <FormDescription
                              className={cn(index !== 0 && 'sr-only')}
                            >
                              Agora vamos criar as perguntas e respostas.
                            </FormDescription>
                          </div>

                          <div className="w-full grid gap-7 bg-slate-100 border dark:bg-slate-950 rounded-lg transition-all  p-5  animate__animated  animate__fadeInLeft">
                            <div className="flex justify-between gap-7">
                              <div className=" w-full ">
                                <FormLabel>Pergunta {index + 1}</FormLabel>
                                <FormControl>
                                  <Controller
                                    render={({ field }) => (
                                      <Textarea {...field} />
                                    )}
                                    name={`questions.${index}.pergunta`}
                                    control={form.control}
                                  />
                                </FormControl>
                              </div>
                              <div className="w-full">
                                <FormLabel>Resposta {index + 1}</FormLabel>
                                <FormControl>
                                  <Controller
                                    render={({ field }) => (
                                      <Textarea {...field} />
                                    )}
                                    name={`questions.${index}.resposta`}
                                    control={form.control}
                                  />
                                </FormControl>
                              </div>
                            </div>
                            <FormMessage />
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
                      onClick={() => append({ pergunta: '', resposta: '' })}
                    >
                      <Plus className="w-4" />
                      Adicionar pergunta
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
          </CardContent>
          <CardFooter className="text-muted-foreground  justify-center">
            &quot;O aprendizado é a única coisa que a mente nunca se cansa,
            nunca tem medo e nunca se arrepende&#46;&quot;
            <br /> &#45; Leonardo da Vinci
          </CardFooter>
        </Card>
      </section>
      <div id="down-page" className="anchor"></div>
    </Main>
  )
}
