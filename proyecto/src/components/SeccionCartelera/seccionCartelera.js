import React from 'react'
import Cartelera from '../SeccionCartelera/cartelera'
import './styles.css'

function SeccionCartelera() {
    const cartelera = [
        {
            name: 'categoria 1',
        },
        {
            name: 'categoria 2',
        },
        {
            name: 'categoria 3',
        },
        {
            name: 'categoria 4',
        },
        {
            name: 'categoria 5',
        },
        {
            name: 'categoria 6',
        },
    ]
  return (
    <section className='general-data'>
        {
            categorias.map((elm, idx)=> <Categoria key={`${idx}-${elm.name}`} data={elm} />)
        }
    </section>
  )
}
