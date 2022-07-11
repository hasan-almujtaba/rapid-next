import FeatureCard from '@/components/FeatureCard/FeatureCard'
import useStyles from './FeatureList.styles'

const FeatureList = () => {
  const { classes } = useStyles()

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
    <div>
      <h2 className={classes.title}>What is included in this starter?</h2>

      <div className={classes.contentContainer}>
        {features.map((text: string, id: number) => (
          <FeatureCard
            text={text}
            key={id}
          />
        ))}
      </div>
    </div>
  )
}

export default FeatureList
