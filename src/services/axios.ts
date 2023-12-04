import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const axiosI = axios.create({
  baseURL: 'https://',
})
const axiosQuizzes = axios.create({
  baseURL: BASE_URL + '/quizzes',
})

export { axiosI, axiosQuizzes }
