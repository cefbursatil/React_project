
import { ItemList } from "../ItemList/ItemList"
function ItemListContainer({setItems,items}) {

    return (
        <div className="container p-3">
            <ItemList setItems={setItems} items={items}/>    
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer

