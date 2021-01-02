

import { useFetch, UseFetch } from '../src/context/FetchContext'
const CustomFetch = () => {
  // const { data, loading, setUrl } = useFetch()
  return (
    <div>
      <h1>Hello</h1>
      <UseFetch><Item /></UseFetch>
    </div>
  )
}

const Item = () => {
  const fetch = useFetch()
  return (
    <>
      <button onClick={() => fetch.setUrl('users')}>users</button>
      <button onClick={() => fetch.setUrl('todos')}>todos</button>
      <button onClick={() => fetch.setUrl('albums')}>albums</button>
      {fetch.data.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}
export default CustomFetch