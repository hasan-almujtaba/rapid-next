import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axiosInstance.defaults.withCredentials = true
// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(axiosInstance.defaults as any).withXSRFToken = true
