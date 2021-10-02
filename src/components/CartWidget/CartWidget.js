import React from 'react'
import Icon from '../Stateless/Icon/Icon'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss';

function CartWidget({items}) {
    // console.log(items)
    return (
        <span id="cart">
            <p>
                <Icon icon={faShoppingCart}/>
                {items}
            </p>
        </span>
    )
}


export default CartWidget

