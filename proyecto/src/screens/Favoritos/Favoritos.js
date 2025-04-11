import React, { Component } from 'react';
import PeliPopulares from '../../components/peliPopulares/peliPopulares';
import '../Favoritos/Favoritos.css';
const ApiKey = '3c3e8a434106d2ff26f310897cce73fa';

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PelisFav: [],
      hayElementosEnFav: false
    };
  }

  componentDidMount() {
    const storageFav = localStorage.getItem('favoritos');
    if (storageFav !== null) {
      let FavParseado = JSON.parse(storageFav);
      if (FavParseado.length > 0) {
        Promise.all(
          FavParseado.map((elm) =>
            fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=${ApiKey}`)
              .then((resp) => resp.json())
              .catch(e => console.log(e))
          )
        )
          .then((data) => this.setState({
            PelisFav: data,
            hayElementosEnFav: true
          }))
          .catch(e => console.log(e));
      }
    }
  }
  actualizarFavoritos() {
    const storageFav = localStorage.getItem('favoritos');
    if (storageFav !== null) {
      let FavParseado = JSON.parse(storageFav);
      Promise.all(
        FavParseado.map((elm) =>
          fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=${ApiKey}`)
            .then((resp) => resp.json())
            .catch(e => console.log(e))
        )
      )
        .then((data) => this.setState({
          PelisFav: data,
          hayElementosEnFav: true
        }))
        .catch(e => console.log(e));
    }
  }
  filtrarFavorito(id) {
    const peliFiltrada = this.state.PelisFav.filter(
      elm => elm.id !== id
    );
    this.setState({ PelisFav: peliFiltrada });
  }

  render() {
    return (
      <div className='peliculas-container'>
        {
          this.state.PelisFav.length > 0
            ?
            this.state.PelisFav.map((elm, idx) =>
            <PeliPopulares
              dataPeliPop={elm}
              key={idx + elm.title}
              borrarFav={(id) => this.filtrarFavorito(id)}/>)
            :
            this.state.hayElementosEnFav === false ?
              <h1>Favoritos está vacío 🥲</h1>
              :
              <h1>Cargando Favoritos ❤️ </h1>
        }
      </div>
    );
  }
}

export default Favoritos;
