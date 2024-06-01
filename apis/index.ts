import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
} as any)

axiosInstance.defaults.withCredentials = true
;(axiosInstance.defaults as any).withXSRFToken = true
