import axios, { type AxiosInstance } from 'axios'

/**
 * @description Axios instance configured for making API requests.
 * It includes a base URL and credentials support.
 *
 * @constant {AxiosInstance} fetcher - The Axios instance used for HTTP requests.
 */
export const fetcher: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // API base URL from environment variables
  withCredentials: true, // Enables sending cookies with requests for authentication
})
