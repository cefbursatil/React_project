import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Banner from '../Banner/Banner'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import WrapperContext from "../Wrapper/WrapperContext";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";


function Main(props) {
    //defino un state para el carrito, definiendo variable de items agregados al carrito

    
    //const [items,setItems] = useState(0)


    /*const [carts,setCarts] = useState(0)
    const addCart = () => {
        setCarts(carts+1)
    }*/
    //Se loguea cada vez que se realiza algun cambio en items
    /*useEffect(() => {
        console.log("Se agrego un Item")
    }, [items])*/
     //Ponemos key a los router para obligarlo a actualizar debido a que el componente es el mismo   
    return (
        <main>
            <WrapperContext>    
            <BrowserRouter>
                <Navbar/>
                    <Banner/>
                    <Switch>
                        
                        <Route exact path ="/">
                            <ItemListContainer/>
                        </Route>
                        <Route path ="/category/:namecat">
                            <ItemListContainer/>
                        </Route>
                        <Route path="/item/:id"> 
                            <ItemDetailContainer/>
                        </Route>
                        <Route path="/cart"> 
                            <Cart/>
                        </Route>
                        <Route path="/checkout"> 
                            <Checkout/>
                        </Route>
                        <Route path="*">
                            <h1>La pantalla de 404  !!!</h1>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </WrapperContext>    
        </main>
    )
}





export default Main


