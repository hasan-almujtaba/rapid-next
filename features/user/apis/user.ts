import { useQuery } from '@tanstack/react-query'

import { axiosInstance } from 'apis'
import { TUser } from 'features/user'

export const getUsers = async () => {
  try {
    const { data } = await axiosInstance.get('/users')

    return data
  } catch {
    throw new Error('Unexpected Error')
  }
}

export const useGetUsers = () =>
  useQuery<TUser[]>({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  })
