import React from "react";
import Navbar from '../Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import StrategiesListContainer from "../StrategiesListContainer/StrategiesListContainer";
import Banner from '../Banner/Banner'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import WrapperContext from "../Wrapper/WrapperContext";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";


function Main(props) {

    return (
        <main>
            <WrapperContext>    
            <BrowserRouter>
                <Navbar/>
                    <Banner/>
                    <Switch>
                        
                        <Route exact path ="/" key={Location.pathname}>
                            <StrategiesListContainer/>
                        </Route>
                        <Route path ="/category/:namecat" key={Location.pathname}>
                            <ItemListContainer/>
                        </Route>
                        <Route path="/item/:id" key={Location.pathname}> 
                            <ItemDetailContainer/>
                        </Route>
                        <Route path="/cart" key={Location.pathname}> 
                            <Cart/>
                        </Route>
                        <Route path="/checkout" key={Location.pathname}> 
                            <Checkout/>
                        </Route>
                        <Route path="*" key={Location.pathname}>
                            <h1>La pantalla de 404  !!!</h1>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </WrapperContext>    
        </main>
    )
}





export default Main


