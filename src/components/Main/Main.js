import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Banner from '../Banner/Banner'




function Main(props) {
    //defino un state para el carrito, definiendo variable de items agregados al carrito

    const [carts,setCarts] = useState(0)
    const [items,setItems] = useState(0)
    const addCart = () => {
        setCarts(carts+1)
    }
    //Se loguea cada vez que se realiza algun cambio en items
    useEffect(() => {
        console.log("Se agrego un Item")
    }, [items])

    return (
        <main>
            <Navbar items={items}/>
            <Banner/>
            <ItemListContainer setItems={setItems} items={items}/>
        </main>
    )
}





export default Main


