import React from "react";
import OpcionesHeader from "./OpcionesHeader";
import "./style.css";

function Header (){
     let opciones =  [
        {
            name: "Home",
            path: "/"
        }, 
        {
            name: "Favoritos",
            path: "/favoritos"
        }, {
            name: "Ver todas",
            path: "/vertodas"
        }, 
     ]

    return(
        <header>
            <div className="logo-container">
            <img src="/img/logo.jpg" alt="Logo de la app" className="logo" />
            <h1 className= "titulo">CineFlex</h1>
            </div>
           <OpcionesHeader menu={opciones} />
        </header>
    )
}

export default Header;