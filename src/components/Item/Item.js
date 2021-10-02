import React, { useEffect, useState } from "react";


function Item({text,title,img,setItems,items,stock}) {
    const [cartItem,setCartItem] = useState(0)
    const [cantidad,setCantidad] = useState(1)
    
    const addItem = () => {
        if((cartItem+cantidad)<stock){
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

        <div className="row my-5">
            <div className="col-sm-12 col-xs-12 col-md-8 col-lg-5 col-xl-4">
                <div className="card">
                    <img className="card-img-top" src={img} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <div className="w-100 d-flex">
                        <button onClick={removeCant} className="btn col-xs-6 btn-primary mx-auto">-</button>
                            <span>Cantidad:{cantidad}</span>
                            <button onClick={addCant} className="btn col-xs-6 btn-primary mx-auto">+</button>
                        </div>
                        <div className="row">
                            <button onClick={()=>addItem()} className="btn btn-primary my-3">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    
    )
}


export default Item

