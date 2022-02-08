import axios from 'axios'

export const service = axios.create({
  timeout: 10000,
  baseURL: process.env.VUE_APP_BASE_API
})
