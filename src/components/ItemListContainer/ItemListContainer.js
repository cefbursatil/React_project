
import { ItemList } from "../ItemList/ItemList"

function ItemListContainer({setItems,items,loading,search,setLoading}) {
    return (
        <div className="container p-3">
            <ItemList setItems={setItems} items={items} loading={loading} search={search} setLoading={setLoading}/>    
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer

