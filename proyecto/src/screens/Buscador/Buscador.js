import React from 'react';
import FormBusqueda from '../../components/FormBusqueda/FormBusqueda';

function Buscador(props) {
  return (
    <div>
      <h1>Buscador</h1>
      <FormBusqueda history={props.history} />
    </div>
  );
}

export default Buscador;
