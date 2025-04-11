import React, { Component } from 'react';
import './Detalle.css';
import Loader from '../../components/Loader/Loader';

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      pelicula: {},
      generos: [],
      fav: false,
      descripcion: "ocultar",
      texto_descripcion: "ver descripción"
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US`)
      .then(res => res.json())
      .then(data => {
        let favoritos = localStorage.getItem("favoritos");
        let esFavorito = false;
        if (favoritos) {
          let favParse = JSON.parse(favoritos);
          esFavorito = favParse.includes(data.id);
        }
        this.setState({ pelicula: data, generos: data.genres, fav: esFavorito });
      })
      .catch(err => console.error(err));
  }

  agregarFavoritos(id) {
    let storage = localStorage.getItem("favoritos");
    let favArray = storage ? JSON.parse(storage) : [];
    if (!favArray.includes(id)) {
      favArray.push(id);
      localStorage.setItem("favoritos", JSON.stringify(favArray));
    }
    this.setState({ fav: true });
  }

  sacarFavoritos(id) {
    let storage = localStorage.getItem("favoritos");
    if (storage) {
      let favArray = JSON.parse(storage);
      let nuevoArray = favArray.filter(elm => elm !== id);
      localStorage.setItem("favoritos", JSON.stringify(nuevoArray));
    }
    this.setState({ fav: false });
  }

  render() {
    const { pelicula, generos, descripcion, texto_descripcion, fav } = this.state;
    return (
      <>
      <Loader/>
      <div className="detalle-container">
        <h2 className="detalle-title">{pelicula.title}</h2>

        <img
          className="detalle-img"
          src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
          alt={pelicula.title}
        />

      <div className="detalle-info">
        <p><strong>Calificación:</strong> {pelicula.vote_average}</p>
        <p><strong>Sinopsis:</strong> {pelicula.overview}</p>
        <p><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
        <p><strong>Duración:</strong> {pelicula.runtime} min</p>
      </div>


        <ul className="detalle-generos">
          {generos.map((genero, idx) => (
            <li key={genero.name + idx}>{genero.name}</li>
          ))}
        </ul>

        <div className="descripcion-contenedor">
          {fav ? (
            <button onClick={() => this.sacarFavoritos(pelicula.id)}>
              Sacar de favoritos 💔
            </button>
          ) : (
            <button onClick={() => this.agregarFavoritos(pelicula.id)}>
              Agregar a favoritos ❤️
            </button>
          )}
        </div>
      </div>
      </>
    );
  }
}

export default Detalle;
