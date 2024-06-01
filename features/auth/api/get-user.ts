import axios from 'axios'

import { axiosInstance } from 'apis'

export const getUserRequest = async () => {
  try {
    const { data } = await axiosInstance.get('/api/user')

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Access to config, request, and response

      throw new Error('Unxpected')
    }
  }
}
