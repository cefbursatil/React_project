import React, { useState, createContext, useEffect } from "react"

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
  // cartItems son los items formateados dentro de mi carrito.
  const [cartItems, setCartItems] = useState([])
  // total es el total de items de mi carrito.
  const [total, setTotal] = useState(0)
  // price es el precio total de todos los productos de mi carrito.
  const [price, setPrice] = useState(0)
      
  // hook para calcular los totales cada vez que cartItems cambia.
  useEffect(() => {
    setTotal(handleTotal())
    setPrice(handleTotalPrice())
  }, [cartItems])

  // * Agrego un item al carrito.
  const addItem = (item, count) => {
    // 1. Guardo mi producto en un objeto.
    let cartElement = {item, count}
    console.log(`cartElement`, cartElement)
    // 2. Creo un carrito auxiliar.
    let cartAux = []
    // 3. Consulto si el producto esta en el carrito.
    if (isInCart(item)) {
      console.log(`Esta en el 🛒`)
      // 3.a. Busco el producto por el id.
      cartElement = cartItems.find(element => element.item.id === item.id)
      // 3.b. Actualizo el contador del item filtrado.
      cartElement.count = cartElement.count + count
      // 3.c. retorno el carrito tal como estaba.
      cartAux = [...cartItems]
    } else {
      console.log(`NO esta en el 🛒`)
      // 3.a. Agrego el item al carrito
      cartAux = [cartElement, ...cartItems]
    }
    setCartItems(cartAux)
  }

  // * Quito el elemento del carrito
  const removeItem = (item) => {
    if (isInCart(item)) {
      // 1. FILTRO mi carrito para obtener el resto de los items.
      const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
      // 2. actualizo el carrito, si solo tenia un elemento lo inicializo como []
      setCartItems([...cartElements])
    } 
  }

  // * Limpio el carrito
  const clear = () => {
    // Inicializo el carrito como un array vacio
    return setCartItems([])
  }

  // * Reviso si el item esta en el carrito.
  const isInCart = (item) => {
    // BUSCO si encuentro al menos 1 elemento que cumpla con la condicion.
    return cartItems && cartItems.some(element => element.item.id === item.id)
  }

  // !!! Bonus Section 🎉🎉🎉

  // * BONUS: Quito solo 1 elemento del carrito
  const removeOneItem = item => {
    if (isInCart(item)) {
      // 1. BUSCO el producto por el id.
      let cartElement = cartItems.find(element => element.item.id === item.id)
      if (cartElement.count === 1) {
        // 1.a. Si solo tengo un elemento lo remuevo con la funcion removeItem()
        removeItem(item)
      } else {
        // 1.a. Creo una copia de mi carrito
        let cart = cartItems
        // 1.b. Mapeo el carrito
        cart.map(element => {
          // 1.c. Resto 1 al contador
          if (element.item.id === item.id) {
            element.count = element.count - 1
          }
          return element
        })
        // 1.d. actualizo el carrito.
        setCartItems([...cart])
      }
    } 
  }

  //  Mapeo carrito obtengo precio total de los items
  const handleTotalPriceByItem = () => {
    // 1. Creo una copia del carrito donde trabajar
    let newCartItems = cartItems
    // 2. Mapeo mi array y lo actualizo
    const test = newCartItems.map(element => {
      // 3. Retorno un objeto con el elemento + el total de ese producto
      return {
        ...element,
        price: element.item.price * element.count
      }
    })    
    console.log(`test`, test)
    return test
  }

  //  Obtengo el total de elementos del carrito
  const handleTotal = () => {  
    // 1. Inicializo el reduce
    const initialValue = 0
    return (
      cartItems &&
      cartItems.reduce(
        (accumulator, currentValue) => {          
          // 2. Acumulo el total
          return accumulator + currentValue.count                              
        },
        initialValue
      )    
    )
  }

  //  Obtengo el precio total del carrito
  const handleTotalPrice = () => {
    // 1. Creo un carrito auxiliar con el precio total por producto.
    const cartAux = handleTotalPriceByItem()
    // 2. Inicializo el reduce
    const initialValue = 0
    return (
      cartAux &&
      cartAux.reduce(
        (accumulator, currentValue) => {          
          // 3. Acumulo el total
          return accumulator + currentValue.price                              
        },
        initialValue
      )    
    )
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        removeOneItem,
        cartItems,
        total,
        price,
        handleTotalPriceByItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}