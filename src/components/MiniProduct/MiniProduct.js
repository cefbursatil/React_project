import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import {styles} from "./MiniProduct.css"

const MiniProduct = ({item, count}) => {
  const {img,title, price, color} = item
  const {removeItem, removeOneItem} = useContext(CartContext)
  return (
    <div style={{backgroundColor: color}}>
      <img src={img} alt="Card cap"/>
      <p>{title} | {count}u. x ${price}</p>   
      <button onClick={() => removeItem(item)}>Quitar del carrito</button>   
      <button onClick={() => removeOneItem(item)}>Quitar 1</button>
    </div>
  )
}

export default MiniProduct