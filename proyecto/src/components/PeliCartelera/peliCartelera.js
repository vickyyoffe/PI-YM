import React from 'react'
import Cartelera from '../SeccionCartelera/cartelera'
import './styles.css'

  return (
    <section className='general-data'>
        {
            categorias.map((elm, idx)=> <Categoria key={`${idx}-${elm.name}`} data={elm} />)
        }
    </section>
  )

