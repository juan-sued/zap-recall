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
import Link from 'next/link'

import { useFieldArray, useForm } from 'react-hook-form'

import { z } from 'zod'

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(30, {
      message: 'Username must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'Please enter a valid URL.' }),
      }),
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: 'I own a computer.',
  urls: [
    { value: 'https://shadcn.com' },
    { value: 'http://twitter.com/shadcn' },
  ],
}

export default function SignUpPage() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  })

  function onSubmit(data: ProfileFormValues) {
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Science man" {...field} />
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um e-mail verificado para exibir" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">
                            m@example.com
                          </SelectItem>
                          <SelectItem value="m@google.com">
                            m@google.com
                          </SelectItem>
                          <SelectItem value="m@support.com">
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Você pode gerenciar endereços de e-mail verificados em
                        seu
                        <Button asChild variant="link" className="pl-1 pr-0">
                          <Link href="/examples/forms">
                            configurações de e-mail
                          </Link>
                        </Button>
                        .
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos um pouco sobre você"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Você pode <span>@mencionar</span> outros usuários e
                        organizações para se vincularem a eles.
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
