import React, { Component } from 'react';

export default class Favorito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPelicula: props.data,
      favorito: false
    };
  }

  componentDidMount() {
    let storage = localStorage.getItem('Favorito');
    if (storage !== null) {
      let storageParseado = JSON.parse(storage);
      let estaMiId = storageParseado.includes(this.state.dataPelicula.id);

      if (estaMiId) {
        this.setState({ favorito: true });
      }
    }
  }

  agregarAFav(id) {
    let storage = localStorage.getItem('Favorito');
    let arrParseado = storage ? JSON.parse(storage) : [];
  
    if (!arrParseado.includes(id)) {
      arrParseado.push(id);
      localStorage.setItem('Favorito', JSON.stringify(arrParseado));
    }
  
    this.setState({ favorito: true });
  }
  sacarDeFav(id) {
    const storage = localStorage.getItem('Favorito');
    const storageParseado = JSON.parse(storage);
    const filtrado = storageParseado.filter((elm) => elm !== id);
    localStorage.setItem('Favorito', JSON.stringify(filtrado));
    this.setState({ favorito: false });

    if (this.props.borrarFav !== undefined) {
      this.props.borrarFav(id);
    }
  }

  render() {
    const { dataPelicula } = this.state;

    return (
      <div>
        <h1>{dataPelicula.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w300${dataPelicula.poster_path}`} alt={dataPelicula.title} />

        {
          this.state.favorito
            ?
            <button onClick={() => this.sacarDeFav(dataPelicula.id)}>❌ Sacar de favoritos</button>
            :
            <button onClick={() => this.agregarAFav(dataPelicula.id)}>💖 Agregar a favoritos</button>
        }
      </div>
    );
  }
}
