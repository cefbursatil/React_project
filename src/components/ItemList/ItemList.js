import React, { useEffect, useState, useContext } from "react";
import Item from "../Item/Item"
import Spinner from '../Stateless/Spinner/Spinner'
import { useParams } from "react-router";
import { GeneralContext } from "../../context/GeneralContext";
import DATA from "../../mocks/data";
import { getFirestore } from "../../Services/getFirestore";
export const ItemList = () => {
    const [result,setResult] = useState(null);
    const {setLoading,loading,search} = useContext(GeneralContext)
    const {namecat} = useParams();
     // GET ITEMS
    /* const db =getFirestore();
     console.log("db");
     db.collection('Items').doc('1rNJM0DKuIbjP9fcna9z').get()
     .then(resp => console.log(resp.data()))
     console.log(db);
     */
    const task = new Promise((resolve,reject) => {
        
            const db =getFirestore();


            if(namecat===undefined){  
                db.collection('insiderstocks').get()
                .then(resp => resolve(resp.docs.map(it => ({img:"https://iflr.com/Media/images/iflr/1-abstract/stock%20exchange.jpeg",id2:it.id,...it.data()}))))
            }
            else if(namecat!==undefined){
                db.collection('insiderstocks').where('Sectors','==',namecat).get()
                .then(resp => resolve(resp.docs.map(it => ({img:"https://iflr.com/Media/images/iflr/1-abstract/stock%20exchange.jpeg",id2:it.id,...it.data()}))))
            }
        //acá indico que quiero que este setTimeout demore 3 segundos
    })
    
    useEffect(()=> {
        
        if(!result){
            setLoading(true)
            task.then((res,err)=>{
                if(err) console.log(err)
                setResult(res)
                setLoading(false);
                console.log("RESULTADO")
                console.log(res)
            }).catch((error) =>{
                console.log(error)
            }).finally(() =>{
                console.log('finalizado')
            })
        }
    },[result]);
    
    // aca estoy filtrando los productos
    
    let filter = result && result.filter((p) => p.IssuerTicker.toLowerCase().includes(search.toLowerCase()));
    console.log("LOADING "+loading );
    return (
        <div className="container d-flex justify-content-center mt-50 mb-50" style={{display: 'flex', flexDirection: 'column'}}>
            {loading && <Spinner/>}
            {result && filter.map((item =>
                (
                    <Item 
                        {...item}
                    />
                )))}
        </div>
    )
}
