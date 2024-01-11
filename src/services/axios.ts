import axios from 'axios'
import { parseCookies } from 'nookies'

const { 'next-auth-token': token } = parseCookies()

const BASE_URL = 'http://localhost:4000/'

const zapApiAxios = axios.create({
  baseURL: BASE_URL,
})

if (token) zapApiAxios.defaults.headers.Authorization = `Bearer ${token}`

export { zapApiAxios }
