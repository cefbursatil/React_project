import React, { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Stateless/Spinner/Spinner'
import { useParams } from "react-router";

function ItemDetailContainer({setItems,items,loading,setLoading}) {
    const [DetailItem,setDetailItem] = useState(null);
    const {id} = useParams()
    const itemsobj = [
        {id:0,category:0, nombre:"TDI CLEVER",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:5,initial:1},
        {id:1,category:0, nombre:"MACD CLEVER",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:20,initial:1},
        {id:3,category:1, nombre:"RSI CLEVER",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:20,initial:1},
        {id:4,category:1, nombre:"SCALPER CLEVER",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:20,initial:1}
    ]
        const getItem = new Promise((resolve,reject) => {
            
            setTimeout(() => {
            resolve(itemsobj.filter(item => item.id == id).map(filteredItem => setDetailItem(filteredItem)))

            //acá indico que quiero que este setTimeout demore 2 segundos
            }, 2000);
            })    
        useEffect(()=> {
            if(!DetailItem){
                setLoading(true);
                getItem.then((res,err)=>{
                    if(err) console.log(err)
                    setDetailItem(res)
                    setLoading(false)
                }).catch((error) =>{
                    console.log(error)
                }).finally(() =>{
                    console.log('finalizado DetailItem')
                })
            }
            //console.log(DetailItem)
        },[DetailItem]);   
    return (
        
        <div>
            {loading && <Spinner/>}
            {DetailItem &&
                <ItemDetail 
                Item={DetailItem}
                setItems={setItems}
                items={items}
                />
            }
        </div>
    )
}

export default ItemDetailContainer
