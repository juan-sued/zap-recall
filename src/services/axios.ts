import axios from 'axios'
import { NextApiRequest, NextPageContext } from 'next'
import { parseCookies } from 'nookies'

export function getAPICLient(
  ctx?:
    | Pick<NextPageContext, 'req'>
    | {
        req: NextApiRequest
      }
    | {
        req: Request
      }
    | null
    | undefined,
) {
  const { 'next-auth-token': token } = parseCookies(ctx)

  const BASE_URL = 'https://zap-recall-api-8o94.onrender.com/'

  const api = axios.create({
    baseURL: BASE_URL,
  })

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`

  return api
}
