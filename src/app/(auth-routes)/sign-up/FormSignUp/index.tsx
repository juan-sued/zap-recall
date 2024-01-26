'use client'

import { Button } from '@/components/ui/button'

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

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { SignUpFormValues } from './types'
import Link from 'next/link'
import { signUpFormSchema } from './schemas'
import { useAuth } from '@/providers/useAuth'

const defaultValues: Partial<SignUpFormValues> = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function FormSignUp() {
  const { signUp } = useAuth()

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit(data: SignUpFormValues) {
    await signUp(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="titleAndDescription flex flex-col gap-6 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Zap Recall Da Conceição Cunha"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Seu nome completo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="zapreacall@gmail.com" {...field} />
                </FormControl>
                <FormDescription>Seu melhor email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="senhaSecreta123"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Uma mega senha.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Confirmação de senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="senhaSecreta123"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Mesma senha que a anterior.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-7">
          <Button
            className="bg-green-600 transition-all hover:bg-green-700   active:scale-95 flex gap-3 w-full"
            type="submit"
          >
            Cadastrar
          </Button>
          <h1>Ou</h1>
          <Button
            asChild
            variant="link"
            className=" w-full transition-all  hover:scale-105  active:scale-95 flex gap-3"
            type="submit"
          >
            <Link href="/sign-in">Voltar</Link>
          </Button>
        </section>
      </form>
    </Form>
  )
}
