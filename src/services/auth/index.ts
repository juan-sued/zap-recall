import { SignInFormValues } from '@/app/(auth-routes)/sign-in/FormSignIn/types'
import { SignUpFormValues } from '@/app/(auth-routes)/sign-up/FormSignUp/types'
import { IUser } from '@/interfaces/userInterfaces'
import { ISignInResponse } from '@/interfaces/authInterfaces'
import { api } from '../api'

async function signIn(data: SignInFormValues): Promise<ISignInResponse> {
  const response = await api.post('auth/sign-in', data)

  return response.data
}

async function recoverUserInformation(): Promise<IUser> {
  const response = await api.get('auth/recover-user-information')
  return response.data
}

async function signUp(data: SignUpFormValues): Promise<void> {
  const response = await api.post('auth/sign-up', data)

  return response.data
}

const authQuery = {
  signIn,
  signUp,
  recoverUserInformation,
}

export default authQuery
