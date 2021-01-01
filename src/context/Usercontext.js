
import React, { useContext, useState } from 'react'

const UserProvider = React.createContext();
const SetUserAgeProvider = React.createContext()
export const useUser = () => {
  return useContext(UserProvider)
}
export const useSetUserAge = () => {
  return useContext(SetUserAgeProvider)
}

export const UserContext = ({ children }) => {
  const [user, setUser] = useState({ name: 'Matas', age: 20 })
  const setUserAge = (value) => {
    setUser(prevUser => {
      return { ...prevUser, age: value }
    })
  }
  return (
    <UserProvider.Provider value={user}>
      <SetUserAgeProvider.Provider value={setUserAge}>
        {children}
      </SetUserAgeProvider.Provider>
    </UserProvider.Provider>
  )
}