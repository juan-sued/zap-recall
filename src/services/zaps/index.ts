import { axiosQuizzes } from '../axios'

export async function getZaps() {
  const response = await axiosQuizzes.get('/')
  return response.data
}

export async function getZapById(id: number) {
  const response = await axiosQuizzes.get(`/${id}`)
  return response.data
}
const zapsQuery = {
  getZaps,
  getZapById,
}

export default zapsQuery
