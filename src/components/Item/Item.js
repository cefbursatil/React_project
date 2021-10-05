
import ItemCount from "../ItemCount/ItemCount";

function Item({text,title,img,setItems,items,stock,initial}) {

    return (

        <div className="row my-5">
            <div className="col-sm-12 col-xs-12 col-md-8 col-lg-5 col-xl-4">
                <div className="card">
                    <img className="card-img-top" src={img} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <ItemCount setItems={setItems} items={items} stock={stock} initial={initial}/>
                    </div>
                </div>
            </div>
        </div>  
    
    )
}


export default Item

