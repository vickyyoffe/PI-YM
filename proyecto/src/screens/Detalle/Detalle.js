import React, {Component} from 'react';
class Detalle extends Component {
  constructor(props){
  super (props)
    this.state = { //el id esta en la ruta parametrizada
      id: props.match.params.id,  //match es una variable que esta dentro de las props para ahcer refernecia a los parametros que guardo en la ruta
      pelicula: {}, //es con llave porque el array era un conjunto de obj literales, ahora el bj literal que queiro llenar es una sola pelicula
      generos: [], //porque esta asi en la base de datos
    } 
}

componentDidMount(){
fetch (`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US`) //este id esta guardado en el estado --> por eso .state
.then(res => res.json())
.then(data => this.setState({pelicula: data, generos:data.genres}, //aca defino data, es la informacion de la pelicula -->.genres es como se ve en la base de datos
))
 //results es lo que está en la API
.catch(err => console.error(err)); 
}
render () {
  return(
    <React.Fragment>
      <div>
        <h2>
          {this.state.pelicula.title}
        </h2>
        <img 
                    src={`https://image.tmdb.org/t/p/w342${this.state.pelicula.poster_path}`} 
                    alt={this.state.pelicula.title}
                    style={{ cursor: "pointer" }} // Esto es opcional
                  />
      </div>
    </React.Fragment>


  )
}
}

export default Detalle;