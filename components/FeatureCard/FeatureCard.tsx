import { Feature } from '@/types/feature'
import useStyles from './FeatureCard.styles'

const FeatureCard = ({ text }: Feature) => {
  const { classes } = useStyles()

  return <div className={classes.container}>{text}</div>
}

export default FeatureCard
