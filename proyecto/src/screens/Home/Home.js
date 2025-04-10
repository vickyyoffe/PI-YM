import React from 'react'
import Peliculas from '../../components/Peliculas/Peliculas';
import FormBusqueda from '../../components/FormBusqueda/FormBusqueda';
import Loader from '../../components/Loader/Loader';

function Home(){
    return(
    <React.Fragment>
    <Loader />
    <FormBusqueda />
    <Peliculas />
    </React.Fragment>
    )
}

export default Home;