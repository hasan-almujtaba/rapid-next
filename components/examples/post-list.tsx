import { Box } from '@mantine/core'
import { usePosts } from '../../apis/example'
import PostCard from './post-card'
import { Post } from '../../types/example'

const PostList = () => {
  /**
   * Use reusable react query
   */
  const { data } = usePosts()

  return (
    <Box
      sx={() => ({
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '10px',
      })}
    >
      {data.map((post: Post) => (
        <PostCard
          key={post.id}
          {...post}
        ></PostCard>
      ))}
    </Box>
  )
}

export default PostList
