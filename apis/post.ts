import axios from 'axios'
import { useQuery } from 'react-query'

export const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return data
}

export const usePosts = () => {
  return useQuery('posts', () => fetchPosts())
}
