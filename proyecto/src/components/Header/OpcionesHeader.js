import React from "react";

function OpcionesHeader (props) {
    return(
        <ul>
            {
                props.menu.map((elm, idx) => <li key={idx + "-" + elm.name}>{elm.name}</li>)
            }
        </ul>
    )
}

export default OpcionesHeader;