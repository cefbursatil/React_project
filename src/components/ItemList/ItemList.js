import React, { useEffect, useState, useContext } from "react";
import Item from "../Item/Item"
import Spinner from '../Stateless/Spinner/Spinner'
import { useParams } from "react-router";
import { GeneralContext } from "../../context/GeneralContext";
import DATA from "../../mocks/data";
export const ItemList = () => {
    const [result,setResult] = useState(null);
    const {setLoading,loading,search} = useContext(GeneralContext)
    const {idcat,id} = useParams();
     // GET ITEMS

    const task = new Promise((resolve,reject) => {
        
        setTimeout(() => {
            if(id===undefined&&idcat===undefined){
                
                resolve(DATA)
            }
            else if(idcat!==undefined){
                resolve(DATA.filter((i) => i.category == idcat));

            }
            else if(id!==undefined){
                resolve(DATA.filter(item => item.id== id).map(filteredItem => setResult(filteredItem)));
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
    
    let filter = result && result.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    console.log("LOADING "+loading );
    return (
        <div className="container-fluid d-flex justify-content-center">
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
