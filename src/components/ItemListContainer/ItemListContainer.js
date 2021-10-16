import { useLocation } from "react-router";
import { ItemList } from "../ItemList/ItemList"


function ItemListContainer() {
    
    const Location = useLocation();
    //Añadimos key de location para que obligue a actualizar cada vez que cambie la localización
    return (
        <div className="container p-3">
            <ItemList  key={Location.pathname}/>    
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer

