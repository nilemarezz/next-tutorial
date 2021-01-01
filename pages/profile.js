import { useUser, useSetUserAge } from '../src/context/Usercontext'

const Profile = () => {
  const user = useUser()
  const setUserAge = useSetUserAge()
  return (
    <>
      <input onChange={(e) => setUserAge(e.target.value)} type="number" />
      <h1>{user.name} ,  {user.age}</h1>
    </>
  )
}

export default Profile