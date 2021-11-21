import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const MiniProduct = ({item, count}) => {
  const {img,strategy, price} = item
  const {removeItem, removeOneItem,addOneItem} = useContext(CartContext)
  const totalvalue=price * count
  return (
    <div className="m-5 ">
      <p>{strategy} | {count} months. x ${price} = ${totalvalue}  
      
      <button className="mx-3" onClick={() => removeOneItem(item)}>Reduce 1 month</button> / 
      <button className="mx-3" onClick={() => addOneItem(item)}>Add 1 month</button> -
      <button className="mx-4" onClick={() => removeItem(item)}>Eliminate of cart</button>  
      </p>   
      
      
    </div>
  )
}

export default MiniProduct