import React, { useEffect, useState ,useContext } from "react";
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from '../Stateless/Spinner/Spinner'
import { useParams } from "react-router";
import DATA from "../../mocks/data";
import { GeneralContext } from "../../context/GeneralContext";

function ItemDetailContainer() {
    const [DetailItem,setDetailItem] = useState(null);
    const {setLoading,loading} = useContext(GeneralContext)
    const {id} = useParams()

        const getItem = new Promise((resolve,reject) => {
            
            setTimeout(() => {
            resolve(DATA.filter(item => item.id == id).map(filteredItem => setDetailItem(filteredItem)))

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
                {...DetailItem}
                />
            }
        </div>
    )
}

export default ItemDetailContainer
