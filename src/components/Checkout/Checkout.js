import React, { useContext} from 'react'

import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import firebase from 'firebase/app'
import { getFirestore } from '../../Services/getFirestore'
import 'firebase/firestore'
import './Checkout.scss'

import { Button, Form } from 'semantic-ui-react'
const Checkout = () => {
  const {cartItems, total, price} = useContext(CartContext)
  const {name,setName,phone,setPhone,email,setEmail} = useContext(UserContext)
  const itemCarrito=total>0;

  const redirect = () => {
    window.location.href = '/'
 }
  const handleChangeName = (value) => {setName(value.target.value);}
  const handleChangeEmail = (value) => {setEmail(value.target.value);}
  const handleChangePhone = (value) => {setPhone(value.target.value);}

    const OrderCreate = () => {
        let order= {}
        if(isNaN(phone)){
            alert("Write a valid phone number");
            return;
        }
        const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!reEmail.test(String(email).toLowerCase())){
            alert("Write a valid email address");
            return;
        }
        
        //Add current time to object
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.user = {name:name, phone:phone, email:email}
        order.total = total;
        order.items = cartItems.map(cartItem => {
            const id = cartItem.item.id; 
            const name = cartItem.item.strategy;
            const price = cartItem.item.price;
            return {id,name,price}
        })
        
        //agrega la orden
        const dbQuery = getFirestore()
        const orderQuery = dbQuery.collection('orders')
        orderQuery.add(order)
        .then(result => {
            alert("Order succesful, you will be send to homepage");
            setTimeout(redirect, 1000);
        })
        .catch(error => alert("Error in order"))
        //actualizo el stock
        //NOTA: Se actualizaría el stock, lo dejamos para demostrar que esta hecho sin embargo no es necesario por las carácteristicas de los productos.
        // const itemsToUpdate = dbQuery.collection('insiderstocks').where(
        //     firebase.firestore.FieldPath.documentId(), 'in', cartItems.map(i=>i.item.id)
        // )
        
        // const batch = dbQuery.batch();
        // itemsToUpdate.get()
        // .then(collection=>{
        //     collection.docs.forEach(doc =>{
        //         batch.update(doc.ref, {
        //             stock: doc.data().stock - cartItems.find(item => item.item.id === doc.id).quantity
        //         })
        //     })
        //     batch.commit().then(res =>{
        //         console.log('resultado batch',res)
            
        //     })
        // })
    }
  return (
    <div>
        {!itemCarrito && 
            <h2>🛒 Checkout</h2>
            &&
            <p> NO HAY ITEMS para comprar</p>
        }  
        {itemCarrito && 
            <div>
                <div className="mt-4 text-center">
                    <div className=" m-3">
                        <h2>Checkout</h2>
                        <b>TOTAL MONTHS: {total} </b>
                        <b> / COST: ${price}</b>
                    </div>
                </div>
                <div className="mx-5 text-center">
                    <h3>Contact Information</h3>
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
                    <Button className="button_clever" onClick={()=>OrderCreate()}>Suscribe</Button>
                </Form>
                </div>
            </div>

        }
    </div>
  )
}

export default Checkout