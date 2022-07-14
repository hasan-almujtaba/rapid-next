import { usePosts } from '@/hooks/post'
import PostCard from '@/components/PostCard/PostCard'
import { Post } from '@/types/post'
import useStyles from './PostList.styles'

const PostList = () => {
  const { classes } = useStyles()

  /**
   * Use reusable react query
   */
  const { data } = usePosts()

  return (
    <div className={classes.container}>
      {data.map((post: Post) => (
        <PostCard
          key={post.id}
          {...post}
        ></PostCard>
      ))}
    </div>
  )
}

export default PostList
