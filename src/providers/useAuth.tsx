import authQuery from '@/services/auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { setCookie, destroyCookie, parseCookies } from 'nookies'
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
  logout: () => void
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
      router.push('/sign-in')
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
      } else if (error.message.includes('404')) {
        toast({
          variant: 'destructive',
          title: `Opss!!! Parece que este usuário não existe.`,
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
    },
  })

  async function signIn({ email, password }: SignInData) {
    signInMutation.mutate({ email, password })
  }

  async function refreshUserInformations() {
    return await authQuery
      .recoverUserInformation()
      .then((data) => {
        setUser(data)
      })
      .catch(() => {
        toast({
          variant: 'destructive',
          title: 'Lamento! Não foi possível validar o login',
        })
      })
  }

  function logout(): void {
    destroyCookie(undefined, 'next-auth-token')
    setUser(null)
    const firstName = user?.name.split(' ')[0]

    toast({
      variant: 'sucess',
      title: `Esperamos que volte em breve,  ${firstName}`,
    })
    router.replace('/sign-in')
  }

  useEffect(() => {
    const { 'next-auth-token': token } = parseCookies()

    if (token) {
      refreshUserInformations()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        refreshUserInformations,
        signUp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export function useAuth(): AuthContextType {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }

  return authContext
}
