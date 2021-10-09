import React from 'react'
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
function ItemDetail({Item,setItems,items}) {
    console.log("ITEM "+Item);
    return (
        <div>
            <h1>{Item.name}</h1>
            <img className="card-img-top" src={Item.img} alt="Card cap"/>
            <h2>{Item.description}</h2>
            <ItemCount setItems={setItems} items={items} stock={Item.stock} initial={Item.initial}/>
            <Link to="/" class="btn btn-primary">
                Return
            </Link>    
        </div>
    )
}

export default ItemDetail
