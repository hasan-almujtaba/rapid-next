import { Card, Text } from '@mantine/core'
import { Post } from '../../types/example'

const PostCard = ({ title, body }: Post) => {
  return (
    <Card
      sx={() => ({
        borderRadius: '8px',
        width: '300px',
        flexGrow: 1,
      })}
    >
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
