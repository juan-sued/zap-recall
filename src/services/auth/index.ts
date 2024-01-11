import { SignInFormValues } from '@/app/sign-in/FormSignIn/types'
import { zapApiAxios } from '../axios'
import { SignUpFormValues } from '@/app/sign-up/FormSignUp/types'
import { IUser } from '@/interfaces/userInterfaces'
import { ISignInResponse } from '@/interfaces/authInterfaces'

async function signIn(data: SignInFormValues): Promise<ISignInResponse> {
  const response = await zapApiAxios.post('auth/sign-in', data)

  return response.data
}

async function recoverUserInformation(): Promise<IUser> {
  const response = await zapApiAxios.get('auth/recover-user-information')
  return response.data
}

async function signUp(data: SignUpFormValues): Promise<void> {
  const response = await zapApiAxios.post('auth/sign-up', data)

  return response.data
}

const authQuery = {
  signIn,
  signUp,
  recoverUserInformation,
}

export default authQuery
