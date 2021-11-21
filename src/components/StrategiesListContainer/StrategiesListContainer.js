import { useLocation } from "react-router";
import { StrategiesList } from "../StrategiesList/StrategiesList";


function StrategiesListContainer() {

    const Location = useLocation();
    //Añadimos key de location para que obligue a actualizar cada vez que cambie la localización
    return (
        <div className="container p-3">
            <h2 className="text-justify">Strategies</h2>
            <StrategiesList key={Location.pathname}/>    
        </div>
    )
}

StrategiesList.propTypes = {

}

export default StrategiesListContainer

