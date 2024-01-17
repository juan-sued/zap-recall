import { ZapFormValues } from '@/app/(privates-routes)/create-zap/FormCreateZap/types'
import { api } from '../api'
import { IObjRegisterAnswer } from '@/app/zap/[zapId]/play/page'

async function getZaps() {
  const response = await api.get('quizzes/')
  return response.data
}

async function getZapById(id: number) {
  const response = await api.get(`quizzes/${id}`)
  return response.data
}

async function createZap(zap: ZapFormValues) {
  const response = await api.post('quizzes/', zap)

  return response.data
}

async function registerAnswer(data: IObjRegisterAnswer) {
  const response = await api.post('quizzes/answers', data)

  return response.data
}

const zapsQuery = {
  getZaps,
  getZapById,
  createZap,
  registerAnswer,
}

export default zapsQuery
