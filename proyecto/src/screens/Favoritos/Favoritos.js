import React, { Component } from 'react';
import Favorito from "../../components/Favorito/Favorito";
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
    const storageFav = localStorage.getItem('Favorito');
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

  filtrarFavorito(id) {
    const personajesFavoritos = this.state.PelisFav.filter(
      elm => elm.id !== id
    );
    this.setState({ PelisFav: personajesFavoritos });
  }

  render() {
    return (
      <div>
        {
          this.state.PelisFav.length > 0
            ?
            this.state.PelisFav.map((elm, idx) =>
              <Favorito
                data={elm}
                key={idx + elm.title}
                borrarFav={(id) => this.filtrarFavorito(id)}
              />)
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
