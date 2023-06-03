import { useGetUsers } from 'features/user'

export const UserList = () => {
  const { isLoading, data } = useGetUsers()

  if (isLoading) return null

  return (
    <div>
      <h1>UserList</h1>
      {data.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  )
}
