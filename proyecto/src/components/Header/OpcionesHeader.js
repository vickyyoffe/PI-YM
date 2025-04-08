import React from "react";
import { Link } from 'react-router-dom'

function OpcionesHeader(props) {
    return(
        <ul className='main-nav'>
            {
                props.menu.map((elm, idx) => 
                <li key={`${elm.name}-${idx}`}> <Link to={elm.path} >{elm.name} </Link> </li>)
            }
        </ul>
    )
}

export default OpcionesHeader;