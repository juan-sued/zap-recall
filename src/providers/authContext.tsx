import authQuery from '@/services/auth'
import { ReactNode, createContext, useState } from 'react'
import { setCookie } from 'nookies'
import { IUser } from '@/interfaces/userInterfaces'
import { useRouter } from 'next/navigation'

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
  async function signIn({ email, password }: SignInData) {
    const { token, user } = await authQuery.signIn({ email, password })

    setCookie(undefined, 'next-auth-token', token, {
      maxAge: 60 * 60 * 100, // 100h
    })

    setUser(user)

    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
