import React from 'react'
import { CartContextProvider } from '../../context/CartContext'
import { GeneralContextProvider } from '../../context/GeneralContext'
import { UserContextProvider } from '../../context/UserContext'
// Aca traeré todos los contextos que tenga el proyecto
const WrapperContext = ({children}) => {
  return (
    <GeneralContextProvider>
      <UserContextProvider>
        <CartContextProvider>
            {children}
        </CartContextProvider>
        </UserContextProvider>
    </GeneralContextProvider>  
  )
}

export default WrapperContext