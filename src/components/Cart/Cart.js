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
            <h2>🛒 Carrito</h2>
            &&
            <p> NO HAY ITEMS EN EL CARRITO</p>
        }  
        {itemCarrito && 
            <div>
                <div className={styles.cart}>
                    <h2>🛒 Carrito</h2>
                    <b>PRODUCTOS: {total}</b>
                    <b>TOTAL: ${price}</b>
                </div>
                <div className={styles.btns}>
                    <button onClick={clear}>Limpiar carrito</button>
                    <button onClick={handleTotalPriceByItem}>carrito con total</button>
                </div>
                <div className={styles.items}>
                    {cartItems.map(element => <MiniProduct {...element}/>)}
                </div>
                <div className={styles.btns}>
                    <Link to="/checkout"><button>CHEKOUT</button></Link>
                </div>
            </div>
        }
    </div>
  )
}

export default Cart