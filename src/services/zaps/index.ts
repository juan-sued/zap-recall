import { ZapFormValues } from '@/app/(privates-routes)/create-zap/FormCreateZap/types'
import { api } from '../api'

export async function getZaps() {
  const response = await api.get('quizzes/')
  return response.data
}

export async function getZapById(id: number) {
  const response = await api.get(`quizzes/${id}`)
  return response.data
}

export async function createZap(zap: ZapFormValues) {
  const response = await api.post('quizzes/', zap)

  return response.data
}

const zapsQuery = {
  getZaps,
  getZapById,
  createZap,
}

export default zapsQuery
