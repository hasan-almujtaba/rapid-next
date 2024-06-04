import { useMutation, useQuery } from '@tanstack/react-query'

import { axiosInstance } from 'apis'
import {
  TLoginRequest,
  TRegisterRequest,
  TUser,
  getUserRequest,
  loginRequest,
  logoutRequest,
  registerRequest,
} from 'features/auth'

const csrf = () => axiosInstance.get('/sanctum/csrf-cookie')

export const useAuth = () => {
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery<TUser>({
    queryKey: ['user'],
    queryFn: () => getUserRequest(),
    retry: false,
  })

  const { mutate: loginMutate } = useMutation({
    mutationFn: (data: TLoginRequest) => loginRequest(data),
    onSuccess: () => refetch(),
  })

  const login = async (data: TLoginRequest) => {
    await csrf()

    loginMutate(data)
  }

  const { mutate: logoutMutate } = useMutation({
    mutationFn: () => logoutRequest(),
    onSuccess: () => refetch(),
  })

  const logout = async () => {
    await csrf()

    logoutMutate()
  }

  const { mutate: registerMutate } = useMutation({
    mutationFn: (data: TRegisterRequest) => registerRequest(data),
    onSuccess: () => refetch(),
  })

  const register = async (data: TRegisterRequest) => {
    await csrf()

    registerMutate(data)
  }

  return { csrf, login, user, isLoading, logout, register }
}
