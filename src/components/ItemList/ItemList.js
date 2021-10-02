import React, { useEffect, useState } from "react";
import Item from "../Item/Item"
export const ItemList = ({setItems,items}) => {
    const [result,setResult] = useState(null);
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
        <div className="container p-3">
            {result && result.map((item =>
                (
                    <Item 
                        key={item.id}
                        title={item.nombre}
                        stock={item.stock}
                        text={item.description}
                        img={item.img}
                        setItems={setItems}
                        items={items}
                    />
                )))}
        </div>
    )
}
