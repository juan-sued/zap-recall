import { axiosCategories } from '../axios'

export const getCategories = async () => {
  const response = await axiosCategories.get('/')

  return response.data
}
