
import { Link} from "react-router-dom";
import "./Item.scss"
function Item(item) {
    const {id,companyName,ActualPrice,IssuerTicker,FiltroTotal,img,stock,CashDebt,Industries,NextReport,POWER,Position,nonDerivative,percentBuy} = item
    return (

                <div className="contenedor_grid">
                    <div className="column-1">
                        <h5>{`${companyName} (${IssuerTicker}) `}</h5>
                        <p>{Industries}</p>
                    </div>
                    <div className="column-2">
                        <h5>Last Price</h5>
                        <p>{(ActualPrice).toLocaleString(undefined,{ minimumFractionDigits: 2 })}</p>
                    </div>
                    <div className="column-3">
                        <h5> Fund. Rank (1-16) </h5>
                        <p>{FiltroTotal}</p>
                    </div>
                    <div className="column-4">
                        <Link to={`/item/${id}`} className="btn mx-2 btn-info ">+ Info</Link>
                    </div>
                        
                </div>
  
    
    )
}


export default Item

