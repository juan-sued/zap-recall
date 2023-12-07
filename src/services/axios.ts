import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const axiosQuizzes = axios.create({
  baseURL: BASE_URL + '/quizzes',
})

const axiosCategories = axios.create({
  baseURL: BASE_URL + '/categories',
})

export { axiosCategories, axiosQuizzes }
