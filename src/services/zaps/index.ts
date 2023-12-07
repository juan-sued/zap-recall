import { axiosQuizzes } from '../axios'

export const getZaps = async () => {
  const response = await axiosQuizzes.get('/')
  return response.data
}
