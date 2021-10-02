import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Banner from '../Banner/Banner'




function Main(props) {
    //defino un state para el carrito, definiendo variable de items agregados al carrito
    const [result,setResult] = useState(null);
    const [carts,setCarts] = useState(0)
    const [items,setItems] = useState(0)
    const addCart = () => {
        setCarts(carts+1)
    }
    //Se loguea cada vez que se realiza algun cambio en items
    useEffect(() => {
        console.log("Se agrego un Item")
    }, [items])

    // GET ITEMS
    const itemsobj = [
        {id:0, nombre:"TDI CLEVER",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:5},
        {id:1, nombre:"TDI CLEVER",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:20}
    ]
    const task = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(itemsobj)
    //acá indico que quiero que este setTimeout demore 3 segundos
    }, 3000);
    })
    useEffect(()=> {
        if(!result){
            task.then((res,err)=>{
                if(err) console.log(err)
                setResult(res)
            }).catch((error) =>{
                console.log(error)
            }).finally(() =>{
                console.log('finalizado')
            })
        }
        console.log(result)
    },[result])



    return (
        <main>
            <Navbar items={items}/>
            <Banner/>
            <ItemListContainer products ={result} setItems={setItems} items={items}/>
        </main>
    )
}





export default Main


