import React from 'react'
import Peliculas from '../../components/Peliculas/Peliculas';
import FormBusqueda from '../../components/FormBusqueda/FormBusqueda';

function Home(){
    return(
    <React.Fragment>
    <FormBusqueda />
    <Peliculas />
    </React.Fragment>
    )
}

export default Home;