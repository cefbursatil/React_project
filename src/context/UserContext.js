import React, { useState, createContext} from "react"

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail
      }}
    >
      {children}
    </UserContext.Provider>
  )
}