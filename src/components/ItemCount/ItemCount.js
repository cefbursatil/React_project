import React, { useState } from "react";


function ItemCount({setItems,items,stock,initial}) {
    const [cartItem,setCartItem] = useState(0)
    const [cantidad,setCantidad] = useState(initial)
    
    const addItem = () => {
        if((cartItem+cantidad)<=stock){
            setCartItem(cartItem+cantidad)
            setItems(items+cantidad)
        } 
        else{
            alert("NO MORE STOCK")
        }
    }
    const addCant = () => {
        if((cartItem+cantidad)<stock)setCantidad(cantidad+1)
    }
    const removeCant = () => {
        if((cantidad>1))setCantidad(cantidad-1)
    }
    return (


        <div>

            <div className="w-100 d-flex">
            <button onClick={removeCant} className="btn col-xs-6 btn-primary mx-auto">-</button>
                <span>Cantidad:{cantidad}</span>
                <button onClick={addCant} className="btn col-xs-6 btn-primary mx-auto">+</button>
            </div>
            <div className="row">
                <button onClick={()=>addItem()} className="btn btn-primary my-3" disabled= {cartItem>=stock ? true : null}>Add to Cart</button>
            </div>
        </div>

    
    )
}


export default ItemCount

