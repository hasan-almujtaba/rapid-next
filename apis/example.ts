import axios from 'axios'
import { useQuery } from 'react-query'

/**
 * Create new axios instance and expose it for some use case
 */
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

/**
 * Fetch from api
 */
export const fetchPosts = async () => {
  const { data } = await instance.get('/posts')

  return data
}

/**
 * Reusable react query custom hook
 */
export const usePosts = () => {
  return useQuery('posts', () => fetchPosts())
}
