import React, { useEffect, useState, useContext } from "react";
import StrategiesItem from "../StrategiesItem/StrategiesItem";
import Spinner from '../Stateless/Spinner/Spinner'
import { useParams } from "react-router";
import { GeneralContext } from "../../context/GeneralContext";
import { getFirestore } from "../../Services/getFirestore";
import './StrategiesList.scss';
export const StrategiesList = () => {
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
            db.collection('Strategies').get()
            .then(resp => resolve(resp.docs.map(it => ({id:it.id,price:100,stock:1000000,...it.data()}))))
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
    
    let filter = result && result.filter((p) => p.strategy.toLowerCase().includes(search.toLowerCase()));
    console.log("LOADING "+loading );
    return (
        <div className="products">
            {loading && <Spinner/>}
            {result && filter.map((item =>
                (
                    <StrategiesItem 
                        {...item}
                    />
                )))}
        </div>
    )
}
