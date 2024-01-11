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
import { useToast } from '@/components/ui/use-toast'
import { SignInFormValues } from './types'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import authQuery from '@/services/auth'
import { useRouter } from 'next/navigation'

const defaultValues: Partial<SignInFormValues> = {
  email: '',
  password: '',
}

export default function FormSignIn() {
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { mutate } = useMutation({
    mutationFn: authQuery.signIn,
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Opss! Não foi possível logar',
      })
    },
    onSuccess: () => {
      toast({
        variant: 'sucess',
        title: 'Login realizado!',
      })

      router.push('/')
    },
  })
  function onSubmit(data: SignInFormValues) {
    mutate(data)
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
                  <Input placeholder="senhaSecreta123" {...field} />
                </FormControl>
                <FormDescription>Digite sua senha.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </section>

        <section className="w-full flex flex-col justify-center items-center gap-7">
          <Button
            className="bg-green-600 transition-all hover:bg-green-700 hover:scale-105  active:scale-95 flex gap-3 w-full"
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
