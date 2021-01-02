import { UserContext } from '../context/Usercontext'

const IndexContext = ({ children }) => {
  return (
    <UserContext>
      {children}
    </UserContext>
  )
}


export default IndexContext