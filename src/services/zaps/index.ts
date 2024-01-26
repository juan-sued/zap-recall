import { ZapFormValues } from '@/app/(privates-routes)/create-zap/FormCreateZap/types'
import { api } from '../api'
import { IObjRegisterAnswer } from '@/app/zap/[zapId]/play/page'

async function getZaps() {
  const response = await api.get('quizzes/')
  return response.data
}

async function getZapById(id: number | string | string[]) {
  const response = await api.get(`quizzes/quiz/${id}`)
  return response.data
}

async function createZap(zap: ZapFormValues) {
  const response = await api.post('quizzes/', zap)

  return response.data
}

async function registerAnswer(data: IObjRegisterAnswer) {
  console.log('aqui: ', data)
  const response = await api.post('quizzes/historic/', data)

  return response.data
}
async function incrementAttempt(id: number) {
  const response = await api.post(`quizzes/attempts/${id}`, {})

  return response.data
}

const zapsQuery = {
  getZaps,
  getZapById,
  createZap,
  registerAnswer,
  incrementAttempt,
}

export default zapsQuery
