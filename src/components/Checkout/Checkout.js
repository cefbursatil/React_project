import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import MiniProduct from '../MiniProduct/MiniProduct'
import styles from './Cart.css'

const Checkout = () => {
  const {cartItems, total, price, clear, handleTotalPriceByItem} = useContext(CartContext)
  const {name,SetName,phone,setPhone,email,setEmail} = useContext(UserContext)
  const itemCarrito=total>0;
  return (
    <div className={styles.main}>
        {!itemCarrito && 
            <h2>🛒 Checkout</h2>
            &&
            <p> NO HAY ITEMS para comprar</p>
        }  
        {itemCarrito && 
            <div>
                <div className={styles.cart}>
                    <h2>🛒 Checkout</h2>
                    <b>PRODUCTOS: {total}</b>
                    <b>TOTAL: ${price}</b>
                </div>
                <div className={styles.items}>
                    {cartItems.map(element => <MiniProduct {...element}/>)}
                </div>
                <div>
                    <h3>Datos Formulario</h3>
                <Form>
                    <Form.Input
                        fluid
                        name="firstname" 
                        label='First Name'
                        placeholder='John'
                    />
                    <Form.Input 
                        fluid 
                        name='phone' 
                        label='Phone' 
                        placeholder='00000000000'
                    />
                    <Form.Input 
                        fluid 
                        name='email'
                        label='Email' 
                        placeholder='xyz@example.com'
                        type='email'  
                    />
                    <Button type='submit'>Submit</Button>
                </Form>
                </div>
            </div>

        }
    </div>
  )
}

export default Checkout