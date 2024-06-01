import axios from 'axios'
import { toast } from 'react-hot-toast'

import { axiosInstance } from 'apis'

export const logoutRequest = async () => {
  try {
    await axiosInstance.post('/logout')
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response
      toast.error(error.response?.data.message)
    } else {
      // Just a stock error
    }
  }
}
