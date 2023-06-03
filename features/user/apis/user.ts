import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from 'apis'

export const getUsers = async () => {
  try {
    const { data } = await axiosInstance.get('/users')

    return data
  } catch {
    throw new Error('Unexpected Error')
  }
}

export const useGetUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
