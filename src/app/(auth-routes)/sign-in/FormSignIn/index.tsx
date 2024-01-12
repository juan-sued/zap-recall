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
import { signInFormSchema } from './schemas'
import { SignInFormValues } from './types'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/providers/AuthContext'

const defaultValues: Partial<SignInFormValues> = {
  email: '',
  password: '',
}

export default function FormSignIn() {
  const { signIn } = useContext(AuthContext)
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  async function onSubmit(data: SignInFormValues) {
    await signIn(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="titleAndDescription flex flex-col gap-6 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="zapreacall@gmail.com" {...field} />
                </FormControl>
                <FormDescription>Digite seu email.</FormDescription>
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
                <FormDescription>Digite sua senha.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-7">
          <Button
            className="bg-green-600 transition-all hover:bg-green-700 active:scale-95 flex gap-3 w-full"
            type="submit"
          >
            Login
          </Button>
          <h1>Ou</h1>
          <Button
            asChild
            variant="link"
            className=" w-full transition-all  hover:scale-105  active:scale-95 flex gap-3"
            type="submit"
          >
            <Link href="/sign-up">Cadastrar</Link>
          </Button>
        </section>
      </form>
    </Form>
  )
}
