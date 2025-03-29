import React from 'react'
import { Link } from 'react-router-dom'

function OpcionesHeader(props) {
    return(
        <ul className='main-nav'>
            {
                props.opciones.map((elm, idx) => 
                <li key={`${elm.name}-${idx}`}>
                 <Link to={elm.name} >
                 </Link>
                 </li>)
            }
        </ul>
    )
}

export default OpcionesHeader;