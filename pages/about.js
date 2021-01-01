import React, { useEffect, useState } from 'react'
import { useUser } from '../src/context/Usercontext'

const About = () => {
  const [type, setType] = useState('posts')
  const [datas, setData] = useState([])
  const user = useUser()
  useEffect(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
    const data = await res.json()
    setData(data)
  }, [type])
  return (
    <div>
      {user.name}
      <button onClick={() => setType("posts")}>posts</button>
      <button onClick={() => setType("comments")}>comments</button>
      <button onClick={() => setType("albums")}>albums</button>
      {datas.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  )
}

export default About