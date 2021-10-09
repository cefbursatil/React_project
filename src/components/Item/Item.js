
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
function Item({id,text,title,img,setItems,items,stock,initial}) {

    return (

        <div className="row my-5">
            <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                <div className="card">
                    <img className="card-img-top" src={img} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <ItemCount setItems={setItems} items={items} stock={stock} initial={initial}/>
                        <Link to={`/item/${id}`} className="btn mx-2 btn-info ">+ Info</Link>
                    </div>
                </div>
            </div>
        </div>  
    
    )
}


export default Item

