import React, { Component } from 'react';
import './resultados.css'; // Acordate de crear este archivo CSS
import Loader from '../../components/Loader/Loader';
import PeliCartelera from '../../components/PeliCartelera/peliCartelera';

export default class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: props.match.params.busqueda,
      resultados: []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=3c3e8a434106d2ff26f310897cce73fa`)
      .then(resp => resp.json())
      .then(data => this.setState({ resultados: data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <React.Fragment>
            <Loader />
            <h1 className="titulo-peliculas">Resultados de {this.state.busqueda} </h1>

            <section className="peliculas-container">
                {this.state.resultados.map((unaPeli, idx) => (
                    <PeliCartelera key={unaPeli.name + idx} dataPeliPop={unaPeli} />
                ))}
            </section>
        </React.Fragment>
    )
    
  }
}

