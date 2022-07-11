import { Card, Text } from '@mantine/core'
import { Post } from '@/types/example'
import useStyles from './PostCard.styles'

const PostCard = ({ title, body }: Post) => {
  const { classes } = useStyles()

  return (
    <Card className={classes.card}>
      <Text
        weight={500}
        size="lg"
        transform="capitalize"
      >
        {title}
      </Text>

      <Text>{body}</Text>
    </Card>
  )
}

export default PostCard
