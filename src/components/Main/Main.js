import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Banner from '../Banner/Banner'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";



function Main(props) {
    //defino un state para el carrito, definiendo variable de items agregados al carrito

    
    const [items,setItems] = useState(0)
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

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
            <BrowserRouter>
                <Navbar items={items} setSearch={setSearch}/>
                <Banner/>
                <Switch>
                    
                    <Route exact path ="/">
                        <ItemListContainer setItems={setItems} items={items} search={search} setLoading={setLoading} loading={loading}/>
                    </Route>
                    <Route path ="/category/:idcat">
                        <ItemListContainer setItems={setItems} items={items} search={search} setLoading={setLoading} loading={loading}/>
                    </Route>
                    <Route path="/item/:id"> 
                        <ItemDetailContainer setItems={setItems} items={items} search={search} setLoading={setLoading} loading={loading}/>
                    </Route>
                    <Route path="*">
                        <h1>La pantalla de 404  !!!</h1>
                    </Route>
                </Switch>
            </BrowserRouter>
        </main>
    )
}





export default Main


