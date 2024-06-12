import { useMutation, useQuery } from '@tanstack/react-query'
import { UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

import { axiosInstance } from 'apis'
import {
  TChangePasswordRequest,
  TLoginRequest,
  TRegisterRequest,
  TUser,
  changePasswordRequest,
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

  const { mutate: changePasswordMutate } = useMutation({
    mutationFn: (data: TChangePasswordRequest) => changePasswordRequest(data),
  })

  const changePassword = (
    data: TChangePasswordRequest,
    reset: UseFormReset<TChangePasswordRequest>
  ) => {
    changePasswordMutate(data, {
      onSuccess: (data) => {
        reset()
        toast.success(data.message)
      },
    })
  }

  return { csrf, login, user, isLoading, logout, register, changePassword }
}
