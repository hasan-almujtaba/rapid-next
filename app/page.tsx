import { Metadata } from 'next'
import React from 'react'

import { FeatureList } from 'features/information'

export const metadata: Metadata = {
  title: 'Home',
}

const Home = () => {
  return <FeatureList />
}

export default Home
