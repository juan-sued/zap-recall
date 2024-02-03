import { ZapFormValues } from '@/app/(privates-routes)/create-zap/FormCreateZap/types'
import { api } from '../api'
import { IObjRegisterAnswer } from '@/app/zap/[zapId]/play/page'
import { id } from 'date-fns/locale'

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
  const response = await api.post('quizzes/historic/', data)

  return response.data
}
async function incrementAttempt(data: Omit<IObjRegisterAnswer, 'isLiked'>) {
  const response = await api.post(`quizzes/attempts/`, data)

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
