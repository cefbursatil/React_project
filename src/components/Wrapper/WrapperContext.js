import React from 'react'
import { CartContextProvider } from '../../context/CartContext'
import { GeneralContextProvider } from '../../context/GeneralContext'
// Aca traeré todos los contextos que tenga el proyecto
const WrapperContext = ({children}) => {
  return (
    <GeneralContextProvider>
        <CartContextProvider>
            {children}
        </CartContextProvider>
    </GeneralContextProvider>  
  )
}

export default WrapperContext