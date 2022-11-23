"use client"
import { createContext, useState, useMemo } from "react"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    name: "",
    email: "",
    avatar: "",
    bio: "",
    website: "",
    createdAt: "",
    token: ""
  })
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  )
}