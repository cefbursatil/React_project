import React, { useEffect, useState } from "react";
import Item from "../Item/Item"
import Spinner from '../Stateless/Spinner/Spinner'
import { useParams } from "react-router";
export const ItemList = ({setItems,items,loading,search,setLoading}) => {
    const [result,setResult] = useState(null);
    const {idcat,id} = useParams();
     // GET ITEMS
     const itemsobj = [
        {id:0,category:0, nombre:"TDI CLEVER",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:5,initial:1},
        {id:1,category:0, nombre:"TDI CLEVER 2",description:"YEAH", img: "https://clevertrading.club/wp-content/uploads/2020/08/Logo-TDI-300x300.png",stock:20,initial:1}
    ]
    const task = new Promise((resolve,reject) => {
        
        setTimeout(() => {
            if(id===undefined&&idcat===undefined){
                
                resolve(itemsobj)
            }
            else if(idcat!==undefined){
                resolve(itemsobj.filter(item => item.category == idcat).map(filteredItem => setResult(filteredItem)));

            }
            else if(id!==undefined){
                resolve(itemsobj.filter(item => item.id== id).map(filteredItem => setResult(filteredItem)));
            }
        //acá indico que quiero que este setTimeout demore 3 segundos
        }, 2000);
    })
    
    useEffect(()=> {
        
        if(!result){
            setLoading(true)
            task.then((res,err)=>{
                if(err) console.log(err)
                setResult(res)
                setLoading(false);
            }).catch((error) =>{
                console.log(error)
            }).finally(() =>{
                console.log('finalizado')
            })
        }
    },[result]);
    
    // aca estoy filtrando los productos
    let filter = result && result.filter((p) => p.nombre.toLowerCase().includes(search.toLowerCase()));
    console.log("LOADING "+loading );
    return (
        <div className="container-fluid d-flex justify-content-center">
            {loading && <Spinner/>}
            {result && filter.map((item =>
                (
                    <Item 
                        key={item.id}
                        id={item.id}
                        title={item.nombre}
                        stock={item.stock}
                        text={item.description}
                        img={item.img}
                        setItems={setItems}
                        items={items}
                        initial={item.initial}
                    />
                )))}
        </div>
    )
}
