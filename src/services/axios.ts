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

  const PRODUCTION_URL = 'https://zap-recall-api-8o94.onrender.com/'
  const DEV_URL = 'http://localhost:4000/'

  const api = axios.create({
    baseURL: DEV_URL,
  })

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`

  return api
}
