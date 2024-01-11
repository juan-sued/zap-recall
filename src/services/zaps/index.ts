import { ZapFormValues } from '@/app/create-zap/FormCreateZap/types'
import { zapApiAxios } from '../axios'

export async function getZaps() {
  const response = await zapApiAxios.get('quizzes/')
  return response.data
}

export async function getZapById(id: number) {
  const response = await zapApiAxios.get(`quizzes/${id}`)
  return response.data
}

export async function createZap(zap: ZapFormValues) {
  const response = await zapApiAxios.post('quizzes/', zap)

  return response.data
}

const zapsQuery = {
  getZaps,
  getZapById,
  createZap,
}

export default zapsQuery
