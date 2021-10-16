
import {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";
function Item(item) {
    const {id,text,title,img,stock,initial} = item
    const {addItem,cartItems} = useContext(CartContext)
    const handleOnAdd = count => addItem(item, count)
    const cartElement = cartItems.find(element => element.item.id === item.id)
    const alreadyCart = cartElement ? cartElement.count : 0;
    return (

        <div className="row my-5">
            <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                <div className="card">
                    <img className="card-img-top" src={img} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <ItemCount stock={stock-alreadyCart} initial={initial} onAdd={handleOnAdd}/>
                        <Link to={`/item/${id}`} className="btn mx-2 btn-info ">+ Info</Link>
                    </div>
                </div>
            </div>
        </div>  
    
    )
}


export default Item

