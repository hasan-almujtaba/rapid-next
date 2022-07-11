import { useQuery } from 'react-query'
import { fetchPosts } from '@/apis/post'

/**
 * Reusable react query custom hook
 */
export const usePosts = () => {
  return useQuery('posts', () => fetchPosts())
}
