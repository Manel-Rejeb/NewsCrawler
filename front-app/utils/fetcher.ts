import axios, { type AxiosInstance } from 'axios'

export const fetcher: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})
