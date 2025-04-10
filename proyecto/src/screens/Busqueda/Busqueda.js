import React from 'react'
import FormBusqueda from '../../components/FormBusqueda/FormBusqueda';
import Loader from '../../components/Loader/Loader';

function Busqueda(){
    return(
    <React.Fragment>
    <Loader />
    <FormBusqueda />
    </React.Fragment>
    )
}

export default Busqueda;