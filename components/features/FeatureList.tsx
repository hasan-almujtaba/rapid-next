import { Box } from '@mantine/core'
import FeatureCard from './FeatureCard'

const FeatureList = () => {
  const features = [
    'Next JS configured out of the box',
    'Server state management with react query',
    'Client state management with zustand',
    'Create custom ui easily with mantine',
    'Multiple ready to use hooks from mantine',
    'Produce clean code with eslint and prettier',
    'Use any icon easily with react icons',
    'Handle http request with axios',
    'Safe typing with typescript',
  ]

  return (
    <Box>
      <h2 style={{ textAlign: 'center' }}>What is included in this starter?</h2>

      <Box
        sx={() => ({
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        })}
      >
        {features.map((text: string, id: number) => (
          <FeatureCard
            text={text}
            key={id}
          />
        ))}
      </Box>
    </Box>
  )
}

export default FeatureList
