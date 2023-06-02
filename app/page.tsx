import { Metadata } from 'next'
import React from 'react'

import { FeatureList } from 'features/information'
import { NextPageWithLayout } from 'types/layout'

export const metadata: Metadata = {
  title: 'Home',
}

const Home: NextPageWithLayout = () => {
  return <FeatureList />
}

export default Home
