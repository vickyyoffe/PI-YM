import React from 'react'

function Cartelera(props) {
  return (
    <article className="card">
        <p>{props.data.name}</p>
    </article>
  )
}

export default Cartelera;