import { useMutation, useQuery } from '@tanstack/react-query'

import { axiosInstance } from 'apis'

import { getUserRequest } from '../api/get-user'
import { loginRequest } from '../api/login'

const csrf = () => axiosInstance.get('/sanctum/csrf-cookie')

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserRequest(),
    retry: false,
  })

  const { mutate: loginMutate } = useMutation({
    mutationFn: (data) => loginRequest(data),
    onSuccess: () => refetch(),
  })

  const login = async (data: any) => {
    await csrf()

    loginMutate(data)
  }

  return { csrf, login, user, isLoading }
}
