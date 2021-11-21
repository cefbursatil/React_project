import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import MiniProduct from '../MiniProduct/MiniProduct'
import styles from './Cart.css'
import { Link} from "react-router-dom";

const Cart = () => {
  const {cartItems, total, price, clear, handleTotalPriceByItem} = useContext(CartContext)
  const itemCarrito=total>0;
  return (
    <div className={styles.main}>
        {!itemCarrito && 
            <div className="mt-4 text-center">
                <h2>🛒 Cart</h2>
                <p> NO ITEMS IN CART</p>
            </div>
        }  
        {itemCarrito && 
            <div className="mt-4 text-center">
                <div className=" m-3">
                    <h2>🛒 Carrito</h2>
                    <b>TOTAL MONTHS: {total} </b>
                    <b> / COST: ${price}</b>
                </div>
                <div>
                    <button onClick={clear}>CLEAR CART</button>
                </div>
                <div className={styles.items}>
                    {cartItems.map(element => <MiniProduct {...element}/>)}
                </div>
                <div className={styles.btns}>
                    <Link to="/checkout"><button>CHECKOUT</button></Link>
                </div>
            </div>
        }
    </div>
  )
}

export default Cart