import axios from 'axios'
import { toast } from 'react-hot-toast'

import { axiosInstance } from 'apis'
import { TLoginRequest } from 'features/auth'

export const loginRequest = async (data: TLoginRequest) => {
  try {
    await axiosInstance.post('/login', data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      toast.error(error.response?.data.message)
    } else {
      // Just a stock error
    }
  }
}
