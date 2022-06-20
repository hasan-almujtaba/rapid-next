import { NextPageWithLayout } from '../types/layout.type'
import DefaultLayout from '../components/layouts/default'
import { ReactElement, useEffect, useState } from 'react'
import useStore from '../store'
import { Button } from '@mantine/core'

const Home: NextPageWithLayout = () => {
  const countState = useStore((state) => state.count)
  const incrementCountState = useStore((state) => state.increment)

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(countState)
  }, [countState])

  return (
    <div>
      <div>{count}</div>
      <Button onClick={incrementCountState}>Increment</Button>
    </div>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
