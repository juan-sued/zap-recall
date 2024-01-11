import authQuery from '@/services/auth'
import { ReactNode, createContext, useState } from 'react'
import { setCookie } from 'nookies'
import { IUser } from '@/interfaces/userInterfaces'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from '@/components/ui/use-toast'

type SignInData = {
  email: string
  password: string
}

type AuthContextType = {
  user: IUser | null
  signIn: (data: SignInData) => Promise<void>
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()

  const [user, setUser] = useState<IUser | null>(null)
  const isAuthenticated = !!user

  const signInMutation = useMutation({
    mutationFn: authQuery.signIn,
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Opss! Não foi possível logar',
      })
    },
    onSuccess: (data) => {
      setCookie(undefined, 'next-auth-token', data.token, {
        maxAge: 60 * 60 * 100, // 100h
      })
      setUser(data.user)

      toast({
        variant: 'sucess',
        title: 'Login realizado!',
      })

      router.push('/')
    },
  })
  async function signIn({ email, password }: SignInData) {
    signInMutation.mutate({ email, password })
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
