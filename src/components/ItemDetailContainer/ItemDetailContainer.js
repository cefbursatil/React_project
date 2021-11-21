import React, { useEffect, useState ,useContext } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Stateless/Spinner/Spinner'
import { useParams } from "react-router";
import { GeneralContext } from "../../context/GeneralContext";
import { getFirestore } from "../../Services/getFirestore";

function ItemDetailContainer() {
    const [DetailItem,setDetailItem] = useState(null);
    const {setLoading,loading} = useContext(GeneralContext)
    const {id} = useParams()

        const getItem = new Promise((resolve,reject) => {
            const db =getFirestore();
            db.collection('insiderstocks').where('id','==',id).get()
            .then(resp => resolve(resp.docs.map(it => ({img:"https://iflr.com/Media/images/iflr/1-abstract/stock%20exchange.jpeg",id2:it.id,...it.data()}))))
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
        },[DetailItem]);   
    return (
        
        <div>
            {loading && <Spinner/>}
            {DetailItem && DetailItem.map((DetailItem =>
                (
                    <ItemDetail 
                        {...DetailItem}
                    />
                )))}
        </div>
    )
}

export default ItemDetailContainer
