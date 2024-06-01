import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from 'features/auth'
import { Layout } from 'types'

export const DashboardLayout = ({ children }: Layout) => {
  const { user, isLoading } = useAuth()

  const { push } = useRouter()

  useEffect(() => {
    if (!user && !isLoading) {
      push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading])

  if (!user || isLoading) {
    return <p>loading...</p>
  }

  return <div>{children}</div>
}
