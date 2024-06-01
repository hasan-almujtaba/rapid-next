import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from 'features/auth'
import { Layout } from 'types'

export const AuthLayout = ({ children }: Layout) => {
  const { user, isLoading } = useAuth()
  const { push } = useRouter()

  useEffect(() => {
    if (!isLoading && user) {
      push('/dashboard')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading])

  // Render loading indicator if user is authenticated but still loading
  if (isLoading) {
    return <p>loading...</p>
  }

  // Render the login page only if the user is not authenticated
  if (!user) {
    return <div>{children}</div>
  }

  // Redirect the user to the dashboard if authenticated
  return null
}
