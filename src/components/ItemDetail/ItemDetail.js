import React ,{useContext} from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
function ItemDetail(item) {
    const {id,text,title,img,stock,initial} = item
    const {addItem,cartItems} = useContext(CartContext)
    const handleOnAdd = count => addItem(item, count)
    const cartElement = cartItems.find(element => element.item.id === id)
    const alreadyCart = cartElement ? cartElement.count : 0;
    return (
        <div>
            <h1>{title}</h1>
            <img className="card-img-top" src={img} alt="Card cap"/>
            <h2>{text}</h2>
            <ItemCount stock={stock-alreadyCart} initial={initial} onAdd={handleOnAdd}/>
            <Link to="/" class="btn btn-primary">
                Return
            </Link>
        </div>
    )
}

export default ItemDetail
