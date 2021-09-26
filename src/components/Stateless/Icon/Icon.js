import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function icon({icon}) {
    return (
        <span className="icon">
            <FontAwesomeIcon icon={icon}/>
        </span>
    )
}

icon.propTypes = {

}

export default icon

