import { Link} from "react-router-dom";
import './StrategiesItem.scss';
function StrategiesItem(item) {
    const {img,risk,strategy} = item
    const newTo = { 
        pathname: `/category/${strategy}`, 
        strategy: item 
      };
    return (

 

        <div className="product-card">
            <div className="product-image">
                <img src={img} alt="Card cap"/>
            </div>
            <div className="product-info">
                <div id="contenedor_grid">
                    <div id="column-1">
                        <h3 className="card-title">{strategy}</h3>
                        <p className="card-text">Strategy Risk: {risk}</p>
                    </div>
                    <div id="column-2">
                    <Link to={newTo} className="btn mx-2 btn-info ">+ Info</Link>
                    </div>
                </div>
            </div>
        </div>

    
    )
}


export default StrategiesItem

