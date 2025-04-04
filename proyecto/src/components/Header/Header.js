import React from "react";
import OpcionesHeader from "./OpcionesHeader";

function Header (){
     let opciones =  [
        {
            name: "Home",
            path: "/"
        }, 
        {
            name: "Favoritos",
            path: "/favoritos"
        }
     ]

    return(
        <header>
           <OpcionesHeader menu={opciones} />
        </header>
    )
}

export default Header;