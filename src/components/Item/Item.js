
import {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
function Item(item) {
    const {id,ActualPrice,IssuerTicker,FiltroTotal,img,stock,CashDebt,Industries,NextReport,POWER,Position,nonDerivative,percentBuy} = item
    const {addItem,cartItems} = useContext(CartContext)
    const handleOnAdd = count => addItem(item, count)
    const cartElement = cartItems.find(element => element.item.id === item.id)
    const alreadyCart = cartElement ? cartElement.count : 0;
    return (

        <div>
            <div >
                <div className="card">
                    <img className="card-img-top" src={img} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{IssuerTicker}</h5>
                        <p className="card-text">Actual Price: {ActualPrice}</p>
                        <p className="card-text">Buys Insiders: {nonDerivative}</p>
                        <p className="card-text">Percent Buy: {percentBuy}</p>
                        <ItemCount stock={stock-alreadyCart} initial={1} onAdd={handleOnAdd}/>
                        <Link to={`/item/${id}`} className="btn mx-2 btn-info ">+ Info</Link>
                    </div>
                </div>
            </div>
        </div>  
    
    )
}


export default Item

