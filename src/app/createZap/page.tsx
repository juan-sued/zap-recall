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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'

import { CheckIcon, MoveVertical } from 'lucide-react'
import Link from 'next/link'

import { useFieldArray, useForm } from 'react-hook-form'

import { z } from 'zod'

const categories = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
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

  Descrição: z.string().max(160).min(4),

  category: z.string({
    required_error: 'Por favor selecione uma categoria.',
  }),
})

type ZapFormValues = z.infer<typeof zapFormSchema>

const defaultValues: Partial<ZapFormValues> = {
  Descrição: '',
}

export default function CreateZapPage() {
  const form = useForm<ZapFormValues>({
    resolver: zodResolver(zapFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  })

  function onSubmit(data: ZapFormValues) {
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
                        Este é o seu nome de exibição público. Pode ser o seu
                        verdadeiro nome ou pseudônimo. Você só pode alterar isso
                        uma vez a cada 30 dias.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Descrição"
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
                            <CommandInput placeholder="Search category..." />
                            <CommandEmpty>No category found.</CommandEmpty>
                            <CommandGroup>
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
                      control={form.control}
                      key={field.id}
                      name={`urls.${index}.value`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className={cn(index !== 0 && 'sr-only')}>
                            URLs
                          </FormLabel>
                          <FormDescription
                            className={cn(index !== 0 && 'sr-only')}
                          >
                            Adicione links para seu site, blog ou mídia social
                            perfis.
                          </FormDescription>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => append({ value: '' })}
                  >
                    Adicionar URL
                  </Button>
                </div>
                <Button type="submit">Atualizar perfil</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="text-muted-foreground  gap-4 px-14  flex flex-col justify-center  sm:flex-row sm:px-6 sm:gap-0 sm:justify-between">
            a
          </CardFooter>
        </Card>
      </section>
    </Main>
  )
}
