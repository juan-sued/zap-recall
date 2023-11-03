import axios from 'axios'

const axiosI = axios.create({
  baseURL: 'https://',
})
const axiosAdvicesLip = axios.create({
  baseURL: 'https://api.adviceslip.com/advice/search/',
})

export { axiosI, axiosAdvicesLip }
