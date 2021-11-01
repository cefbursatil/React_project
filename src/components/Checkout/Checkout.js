import React, { useContext,useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import MiniProduct from '../MiniProduct/MiniProduct'
import firebase from 'firebase/app'
import { getFirestore } from '../../Services/getFirestore'
import 'firebase/firestore'
import styles from './Checkout.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'
const Checkout = () => {
  const {cartItems, total, price, clear, handleTotalPriceByItem} = useContext(CartContext)
  const {name,setName,phone,setPhone,email,setEmail} = useContext(UserContext)
  const itemCarrito=total>0;

  const handleChangeName = (value) => {setName(value.target.value);}
  const handleChangeEmail = (value) => {setEmail(value.target.value);}
  const handleChangePhone = (value) => {setPhone(value.target.value);}

    const OrderCreate = () => {
        let order= {}
        //Add current time to object
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.user = {name:name, phone:phone, email:email}
        order.total = total;
        order.items = cartItems.map(cartItem => {
            const id = cartItem.item.id2; 
            const name = cartItem.item.IssuerTicker;
            const price = cartItem.item.ActualPrice;
            return {id,name,price}
        })
        
        //agrega la orden
        const dbQuery = getFirestore()
        const orderQuery = dbQuery.collection('orders')
        orderQuery.add(order)
        .then(result => alert("Order added"))
        .catch(error => console.log(error))
        //actualizo el stock
        const itemsToUpdate = dbQuery.collection('insiderstocks').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartItems.map(i=>i.item.id)
        )
        const batch = dbQuery.batch();
        itemsToUpdate.get()
        .then(collection=>{
            collection.docs.forEach(doc =>{
                batch.update(doc.ref, {
                    stock: doc.data().stock - cartItems.find(item => item.item.id === doc.id).quantity
                })
            })
            batch.commit().then(res =>{
                console.log('resultado batch',res)
            
            })
        })
    }
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
                        name="name" 
                        label='Complete Name'
                        placeholder='John'
                        value={name}
                        onChange = {handleChangeName}
                    />
                    <Form.Input 
                        fluid 
                        name='phone' 
                        label='Phone' 
                        placeholder='00000000000'
                        value={phone}
                        onChange = {handleChangePhone}
                    />
                    <Form.Input 
                        fluid 
                        name='email'
                        label='Email' 
                        placeholder='xyz@example.com'
                        type='email'  
                        value={email}
                        onChange = {handleChangeEmail}
                    />
                    <Button onClick={()=>OrderCreate()}>Buy Stocks</Button>
                </Form>
                </div>
            </div>

        }
    </div>
  )
}

export default Checkout