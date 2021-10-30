import React ,{useContext} from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
function ItemDetail(item) {
    const {id,ActualPrice,IssuerTicker,FiltroTotal,img,stock,CashDebt,Industries,NextReport,POWER,Position,nonDerivative,percentBuy} = item
    const {addItem,cartItems} = useContext(CartContext)
    const handleOnAdd = count => addItem(item, count)
    const cartElement = cartItems.find(element => element.item.id === id)
    const alreadyCart = cartElement ? cartElement.count : 0;
    console.log("id "+id+" ActualPrice "+ActualPrice)
    console.log(item)
    return (
        <div>
            <h1>{IssuerTicker}</h1>
            <img className="card-img-top" src={img} alt="Card cap"/>
            <p className="card-text">Actual Price: {ActualPrice}</p>
            <p className="card-text">Fundamental Rank (1-14): {FiltroTotal}</p>
            <p className="card-text">Cash/Debt: {CashDebt}</p>
            <p className="card-text">Industries: {Industries}</p>
            <p className="card-text">Next Report: {NextReport}</p>
            <p className="card-text">Trend: {POWER}</p>
            <p className="card-text">Position: {Position}</p>
            <p className="card-text">Buys Insiders: {nonDerivative}</p>
            <p className="card-text">Percent Buy: {percentBuy}</p>
            <ItemCount stock={stock-alreadyCart} initial={1} onAdd={handleOnAdd}/>
            <Link to="/" class="btn btn-primary">
                Return
            </Link>
        </div>
    )
}

export default ItemDetail
