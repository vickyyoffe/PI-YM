import React, { Component } from 'react';
import './busqueda.css';

class FormBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      resultados: []
    };
  }

  evitarCambios = (eventos) => {
    this.setState({
      query: eventos.target.value
    });
  };

  evitarsubmit = (eventos) => {
    eventos.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=3c3e8a434106d2ff26f310897cce73fa&language=es-ES`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Resultados:', data.results);
        this.setState({ resultados: data.results });
      })
      .catch(error => console.error('Error en la búsqueda:', error));
  };

  render() {
    return (
      <div>
        <form className="form-buscador" onSubmit={this.evitarsubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.evitarCambios}
            placeholder="Buscar..."
          />
          <button type="submit">Buscar</button>
        </form>

        <div className="resultados-busqueda">
          {this.state.resultados.length > 0 ? (
            this.state.resultados.map((pelicula) => (
              <div key={pelicula.id} className="pelicula-buscada">
                <h3>{pelicula.title}</h3>
                {pelicula.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}
                    alt={pelicula.title}
                  />
                ) : (
                  <p>No hay imagen</p>
                )}
              </div>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      </div>
    );
  }
}

export default FormBusqueda;
