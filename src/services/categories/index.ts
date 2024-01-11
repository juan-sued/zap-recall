import { zapApiAxios } from '../axios'

export const getCategories = async () => {
  const response = await zapApiAxios.get('categories/')

  return response.data
}
