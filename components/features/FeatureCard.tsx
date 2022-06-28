import { Box } from '@mantine/core'
import { Feature } from '../../types/feature'

const FeatureCard = ({ text }: Feature) => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: '4px',
        margin: 'auto',
        [theme.fn.largerThan('md')]: { width: '384px' },
        width: '100%',
        border: `1px solid ${
          theme.colorScheme === 'dark' ? '#8e9199' : '#74777f'
        }`,
        padding: '8px',
        textAlign: 'center',
      })}
    >
      {text}
    </Box>
  )
}

export default FeatureCard
