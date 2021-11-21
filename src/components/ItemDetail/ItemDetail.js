import React ,{useContext,useEffect} from 'react'
import { Link } from "react-router-dom";
import Chart from '../Chart/Chart';
function ItemDetail(item) {
    const {id,companyName,ActualPrice,IssuerTicker,FiltroTotal,img,stock,CashDebt,Industries,NextReport,POWER,Position,nonDerivative,percentBuy} = item


    return (
        <div className="mt-4">
            <h1 className="text-center">{companyName}</h1>
            <div className="mx-4">
                <h2 className="text-center">Chart</h2>
                <Chart symbol={IssuerTicker}/>
            </div>
            <div className="mt-5 text-center mt-1">
                <h2 className="text-center">Key Company Info</h2>
                <p className="card-text"><b>Actual Price: </b>{ActualPrice}</p>
                <p className="card-text"><b>Fundamental Rank (1-14): </b>{FiltroTotal}</p>
                <p className="card-text"><b>Cash/Debt: </b>{CashDebt}</p>
                <p className="card-text"><b>Industries: </b>{Industries}</p>
                <p className="card-text"><b>Next Report: </b>{NextReport}</p>
                <p className="card-text"><b>Trend: </b>{POWER}</p>
                <p className="card-text"><b>Position: </b>{Position}</p>
                <p className="card-text"><b>Buys Insiders: </b>{nonDerivative}</p>
                <p className="card-text"><b>Percent Buy: </b>{percentBuy}</p>
                <Link to="/" class="btn btn-primary mt-2">
                Back
                </Link>
            </div>

        </div>
    )
}

export default ItemDetail
