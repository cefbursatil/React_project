
import Item from "../Item/Item"
function ItemListContainer({products,setItems,items}) {

    return (
        <div className="container p-3">
            {products && products.map((item =>
                (
                    <Item 
                        key={item.id}
                        title={item.nombre}
                        stock={item.stock}
                        text={item.description}
                        img={item.img}
                        setItems={setItems}
                        items={items}
                    />
                )))}
        </div>
    )
}

ItemListContainer.propTypes = {

}

export default ItemListContainer

