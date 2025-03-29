import React from 'react'
import OpcionesHeader from '../Header/OpcionesHeader'


function Navegacion (){
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
       <nav>
          <OpcionesHeader menu={opciones} />
       </nav>
   )
}

export default Navegacion;