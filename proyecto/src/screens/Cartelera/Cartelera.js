import React, {Component} from 'react';
import PeliCartelera from '../../components/PeliCartelera/peliCartelera';
import FormFiltro from '../../components/FormFiltro/FormFiltro';
import Loader from '../../components/Loader/Loader';
const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US&page=1';


class Cartelera extends Component{
    constructor(props){
        super(props);
        {
            this.state = {
                peliculasCartelera: [], //aca voy a guardar las pelis q esten en el inciio 
                peliculasCartelera2: [], //aca las que se pondran cuando se aprete cargar más
                nextPage: "" //es un string proq va a ir adentro de la url
               //paquete de datos con datos mas chiquitos, por eso el array
            }
        }
    }
    componentDidMount(){
        // Para peliculasCartelera
        fetch(url) 
        .then(res => res.json())
        .then(data => this.setState({peliculasCartelera: data.results}))
         //results es lo que está en la API
        .catch(err => console.error(err));
    }
    cargarMas(){
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US&page=${this.state.nextPage + 1}`
        fetch(url) // la guardo aca porq on la puedo cambiar arriba y +1 porque quiero la sigueinte pagina
        .then(res => res.json())
        .then(data => this.setState({peliculasCartelera: this.state.peliculasCartelera.concat(data.results), peliculasCartelera2: this.state.peliculasCartelera.concat(data.results), nextPage:data.page +1}, //concat: concatenar las pelis de la pag 2 a la pagina 1
        // netx page +1 porq sabemos q si estamos en la 2, tenemos q ir a la 3 y así. 
        ))
         //results es lo que está en la API
         // page es lo que me interesa modifciar que está en la API
        .catch(err => console.error(err));
    }
    filtrar(Filtro){
        let pelisFiltradas = this.state.peliculasCartelera.filter( peli => peli.title.toLowerCase().includes(Filtro.toLowerCase()) ) //comparo titulo de la peli con el filtro que me llegó, y transformo a los dos en minúscula.
        this.setState({peliculasCartelera2: pelisFiltradas}) 
    }
    render(){
        return (
            <React.Fragment>
                <Loader />
                <h1 className="titulo-peliculas">Peliculas en cartelera</h1>
        
                <div className="acciones-container">
                <div className="barra-filtro">
                <p className="filtro-texto">Filtrar</p>
                <FormFiltro filtrar={(Filtro) => this.filtrar(Filtro)} />
                </div>
    
                    <div className="cargar-mas-container">
                        <button onClick={() => this.cargarMas()}>
                            Cargar más
                        </button>
                    </div>
                </div>
    
                <section className="peliculas-container">
                    {this.state.peliculasCartelera.map((unaPeli, idx) => (
                        <PeliCartelera key={unaPeli.name + idx} dataPeliPop={unaPeli} />
                    ))}
                </section>
            </React.Fragment>
        )
    }
    
}

export default Cartelera;