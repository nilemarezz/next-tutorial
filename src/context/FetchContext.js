import React, { useState, useEffect, useContext } from 'react'

const FetchProvider = React.createContext()
export const useFetch = () => {
  return useContext(FetchProvider)
}
export const UseFetch = ({ children }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('users')
  useEffect(async () => {
    setLoading(true)
    const res = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
    const resData = await res.json()
    setData(resData)
    setLoading(false)
  }, [url])

  return (
    <FetchProvider.Provider value={{ data: data, loading, setUrl: setUrl }}>
      {children}
    </FetchProvider.Provider>
  )
  // return { data, loading, setUrl }
}