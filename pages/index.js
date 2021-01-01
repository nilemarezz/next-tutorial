
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Card from '../src/components/Card'
import { useUser } from '../src/context/Usercontext'

export const getServerSideProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await res.json()
  return { props: { users: users } }
}

export default function Home({ users }) {
  const [num, setNum] = useState(1)
  const [click, setClick] = useState(1)
  const user = useUser()
  const addNum = () => {
    setNum(prevNum => prevNum + 1)
    setNum(prevNum => prevNum + 1)
  }
  return (
    <div className={styles.container}>
      <h1>{num}</h1>
      <button onClick={addNum}>Add Num</button>
      <h1>{user.name}</h1>
      {users.map(user => {
        return <Card user={user} />
      })}
    </div>
  )
}
