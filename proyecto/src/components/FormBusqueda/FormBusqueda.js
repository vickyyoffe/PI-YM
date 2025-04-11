import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import "./busqueda.css"

class FormBusqueda extends Component {
  constructor(props){
    super(props)
    this.state = {
      input:''
    }
  }

  controlarForm(evento){
    evento.preventDefault()
    this.props.history.push('/resultados/' + this.state.input)
  }

  controlarInput(evento){
    this.setState({input: evento.target.value})
  }

  render() {
    return (
      <form onSubmit={(evento) => this.controlarForm(evento)} className='form-buscador'>
        <input 
          placeholder='Buscador' 
          value={this.state.input} 
          onChange={(evento) => this.controlarInput(evento)} 
        />
        <button type='submit'>Buscar</button>
      </form>
    );
  }
}

export default withRouter(FormBusqueda);
