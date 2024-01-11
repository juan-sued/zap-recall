import { SignInFormValues } from '@/app/sign-in/FormSignIn/types'
import { axiosAuth } from '../axios'
import { SignUpFormValues } from '@/app/sign-up/FormSignUp/types'

async function signIn(data: SignInFormValues) {
  const response = await axiosAuth.post('/sign-in', data)

  return response.data
}

async function signUp(data: SignUpFormValues) {
  const response = await axiosAuth.post('/sign-up', data)

  return response.data
}

const authQuery = {
  signIn,
  signUp,
}

export default authQuery
