import { useState } from "react"
import useNumHook from '../src/NumHook'
const CustomHook = () => {
  const { calNum, num } = useNumHook()
  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => calNum(2)}>+</button>
      <button onClick={() => calNum(-2)}>-</button>
    </>
  )
}

export default CustomHook