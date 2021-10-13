import { useLocation } from "react-router";
import { ItemList } from "../ItemList/ItemList"


function ItemListContainer({setItems,items,loading,search,setLoading}) {
    const Location = useLocation();
    //Añadimos key de location para que obligue a actualizar cada vez que cambie la localización
    return (
        <div className="container p-3">
            <ItemList  key={Location.pathname} setItems={setItems} items={items} loading={loading} search={search} setLoading={setLoading}/>    
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer

