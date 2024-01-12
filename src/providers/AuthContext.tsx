import authQuery from '@/services/auth'
import { ReactNode, createContext, useState } from 'react'
import { setCookie } from 'nookies'
import { IUser } from '@/interfaces/userInterfaces'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from '@/components/ui/use-toast'
import { api } from '@/services/api'

type SignInData = {
  email: string
  password: string
}

type SignUpData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

type AuthContextType = {
  user: IUser | null
  signIn: (data: SignInData) => Promise<void>
  signUp: (data: SignUpData) => Promise<void>
  refreshUserInformations: () => Promise<void>
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()

  const [user, setUser] = useState<IUser | null>(null)
  const isAuthenticated = !!user

  const signUpMutation = useMutation({
    mutationFn: authQuery.signUp,
    onError: (error) => {
      if (error.message.includes('422')) {
        toast({
          variant: 'destructive',
          title: `Opss!!! ${error.message}`,
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Lamento! Não foi possível logar',
        })
      }
    },
    onSuccess: () => {
      toast({
        variant: 'sucess',
        title: `Cadastrado com sucesso!`,
      })

      router.push('/')
    },
  })

  async function signUp({
    name,
    email,
    password,
    confirmPassword,
  }: SignUpData) {
    signUpMutation.mutate({ name, email, password, confirmPassword })
  }

  const signInMutation = useMutation({
    mutationFn: authQuery.signIn,
    onError: (error) => {
      if (error.message.includes('403')) {
        toast({
          variant: 'destructive',
          title: 'Opss! Email ou senha inválido.',
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Lamento! Não foi possível logar',
        })
      }
    },
    onSuccess: (data) => {
      setCookie(undefined, 'next-auth-token', data.token, {
        maxAge: 60 * 60 * 100, // 100h
      })
      api.defaults.headers.Authorization = `Bearer ${data.token}`
      setUser(data.user)
      const firstName = data.user.name.split(' ')[0]

      toast({
        variant: 'sucess',
        title: `Que bom te ver por aqui,  ${firstName}`,
      })

      router.push('/')
    },
  })

  async function signIn({ email, password }: SignInData) {
    signInMutation.mutate({ email, password })
  }

  async function refreshUserInformations() {
    authQuery.recoverUserInformation()
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, signIn, refreshUserInformations, signUp }}
    >
      {children}
    </AuthContext.Provider>
  )
}
