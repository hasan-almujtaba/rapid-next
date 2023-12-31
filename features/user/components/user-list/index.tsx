import { useGetUsers, TUser } from 'features/user'

export const UserList = () => {
  const { isLoading, isError, data } = useGetUsers()

  if (isLoading && isError) return null

  return (
    <div>
      <h1>UserList</h1>
      {data?.map((item: TUser) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}
