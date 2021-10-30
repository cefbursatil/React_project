import React, { useState, createContext, useEffect } from "react"

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [name, SetName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
  return (
    <UserContext.Provider
      value={{
        name,
        SetName,
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