import React from 'react'
import Icon from '../Stateless/Icon/Icon'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.scss';

function CartWidget() {
    return (
        <span id="cart">
            <Icon icon={faShoppingCart}/>
        </span>
    )
}

CartWidget.propTypes = {

}

export default CartWidget

