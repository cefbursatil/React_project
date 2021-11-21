import React,{useContext} from 'react'
import Icon from '../Stateless/Icon/Icon'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss';
import { CartContext } from '../../context/CartContext';
function CartWidget() {
    const {total} = useContext(CartContext);

    return (
        <span id="cart">
            <p>
                <Icon icon={faShoppingCart}/>
                {total}
            </p>
        </span>
    )
}


export default CartWidget

