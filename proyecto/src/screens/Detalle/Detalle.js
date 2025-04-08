import React from 'react';

function Detalle(props) {
  const idPeli = props.match.params.id
  return (
    <div>Detalle de la Pelicula {idPeli}</div>
  )
}

export default Detalle;