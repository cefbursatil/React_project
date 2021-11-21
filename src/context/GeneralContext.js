import React, { useState, createContext} from "react"

export const GeneralContext = createContext({})

export const GeneralContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

  return (
    <GeneralContext.Provider
      value={{
        loading,
        setLoading,
        search,
        setSearch
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}