import React, {Component} from "react";
import PeliPopulares from "../peliPopulares/peliPopulares";
import PeliCartelera from "../PeliCartelera/peliCartelera";
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US&page=1';
const url2 = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US&page=1';



//despues de la api key poner &
const options = {method: 'GET', headers: {accept: 'application/json'}};

class Peliculas extends Component{
    constructor(){ //Este es el componente padre sino props
        super()
        this.state = {
            peliculasPopulares: [],
            peliculasCartelera: []
        }
    }
    componentDidMount(){
        // Para peliculasPopulares
        fetch(url, options) //Pegamos lo de la api key 
        .then(res => res.json())
        .then(data => this.setState({peliculasPopulares: data.results},
         () => {console.log('Películas Populares:', this.state.peliculasPopulares);}
        ))
         //results es lo que está en la API
        .catch(err => console.error(err));

        // Para peliculasCartelera
        fetch(url2, options) 
        .then(res => res.json())
        .then(data => this.setState({peliculasCartelera: data.results}))
         //results es lo que está en la API
        .catch(err => console.error(err));
    }
    
    render(){
        return(
            <React.Fragment>
                <h1 className="titulo-peliculas">Peliculas populares</h1>
                <section className="peliculas-container">
                    {this.state.peliculasPopulares.map((unaPeli, idx) => <PeliPopulares key= {unaPeli.name + idx} dataPeliPop = {unaPeli}/>)}
                </section>
                <h1 className="titulo-peliculas">Peliculas en cartelera</h1>
                <section className="peliculas-container">
                {this.state.peliculasCartelera.map((unaPeli, idx) => <PeliCartelera key= {unaPeli.name + idx} dataPeliPop = {unaPeli}/>)}
                </section>
            </React.Fragment>
        )
    }
}

export default Peliculas;