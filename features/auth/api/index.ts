import axios from 'axios'
import toast from 'react-hot-toast'

import { axiosInstance } from 'apis'
import { TRegisterRequest } from 'features/auth'

export * from './get-user'
export * from './login'
export * from './logout'

export const registerRequest = async (data: TRegisterRequest) => {
  try {
    await axiosInstance.post('/register', data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      toast.error(error.response?.data.message)
    } else {
      // Just a stock error
    }
  }
}
