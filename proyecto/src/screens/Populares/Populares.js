import React, {Component} from 'react';
import PeliPopulares from '../../components/peliPopulares/peliPopulares';
import FormFiltro from '../../components/FormFiltro/FormFiltro';
import Loader from '../../components/Loader/Loader';
import "./populares.css";
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US&page=1';


class Populares extends Component{
    constructor(props){
        super(props);
        {
            this.state = {
                peliculasPopulares: [], //aca voy a guardar las pelis q esten en el inciio 
                peliculasPopulares2: [], //aca las que se pondran cuando se aprete cargar más
                nextPage: "" //es un string proq va a ir adentro de la url
               //paquete de datos con datos mas chiquitos, por eso el array
            }
        }
    }
    componentDidMount(){
        // Para peliculasPopulares
        fetch(url) //Pegamos lo de la api key 
        .then(res => res.json())
        .then(data => this.setState({peliculasPopulares: data.results, peliculasPopulares2:data.results, nextPage:data.page},
        ))
         //results es lo que está en la API
         // page es lo que me interesa modifciar que está en la API
        .catch(err => console.error(err));
    }
    cargarMas(){
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=3c3e8a434106d2ff26f310897cce73fa&language=en-US&page=${this.state.nextPage + 1}"
        fetch(url) // la guardo aca porq on la puedo cambiar arriba y +1 porque quiero la sigueinte pagina
        .then(res => res.json())
        .then(data => this.setState({peliculasPopulares: this.state.peliculasPopulares.concat(data.results), peliculasPopulares2: this.state.peliculasPopulares.concat(data.results), nextPage:data.page +1}, //concat: concatenar las pelis de la pag 2 a la pagina 1
        // netx page +1 porq sabemos q si estamos en la 2, tenemos q ir a la 3 y así. 
        ))
         //results es lo que está en la API
         // page es lo que me interesa modifciar que está en la API
        .catch(err => console.error(err));
    }
    filtrar(Filtro){
        let pelisFiltradas = this.state.peliculasPopulares.filter( peli => peli.title.toLowerCase().includes(Filtro.toLowerCase()) ) //comparo titulo de la peli con el filtro que me llegó, y transformo a los dos en minúscula.
        this.setState({peliculasPopulares2: pelisFiltradas}) 
    }
    render(){
            return (
                <React.Fragment>
                    <Loader />
                    <h1 className="titulo-peliculas">Peliculas populares</h1>
        
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
                        {this.state.peliculasPopulares2.map((unaPeli, idx) => (
                            <PeliPopulares key={unaPeli.name + idx} dataPeliPop={unaPeli} />
                        ))}
                    </section>
                </React.Fragment>
            )
        }
    }
    

export default Populares;