import { useLocation } from "react-router";
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router";
import { CartContext } from "../../context/CartContext";
import React, {useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer() {
    const param = useParams();
    const Location = useLocation();
    const {addItem,cartItems} = useContext(CartContext)
    const handleOnAdd = count => addItem(Location.strategy, count)
    //const cartElement = cartItems.find(element => element.item.id === Location.strategy.id)
    //const alreadyCart = cartElement ? cartElement.count : 0;
    console.log("item")
    console.log(cartItems)
    //Añadimos key de location para que obligue a actualizar cada vez que cambie la localización
    return (
        <div className="container p-3">
            <h2 className="text-center">{`${param.namecat} - Active Stocks`}</h2>
            <ItemCount price={Location.strategy.price} stock={Location.strategy.stock} initial={1} onAdd={handleOnAdd}/>
            <ItemList  key={Location.pathname}/>    
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer

