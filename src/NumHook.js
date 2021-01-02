import { useState, useEffect } from 'react'

const useNumHook = () => {
  const [num, setNum] = useState(1)
  useEffect(() => {
    setNum(prevNum => prevNum + 5)
  }, [])
  const calNum = (num) => {
    setNum(prevNum => prevNum + num)
  }

  return { num, calNum }
}

export default useNumHook