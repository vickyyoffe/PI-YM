import React, {Component} from "react";
// con estado: cuando tengo info que cambia.
import { Link } from 'react-router-dom';
import "./style.css";

class PeliCartelera extends Component{
    constructor(props){ //ahora si props porq nos llega de un padre la info de las pelis.
        super(props)
            this.state = {
                descripcion: "ocultar",
                texto_descripcion: "ver descripción",
            }; //lo de article lo saco de props porque el estado acá está vacío. la info la traigo del componente padre, por eso uso props.
        
    };   
    mostrarDescripcion(){
        if (this.state.descripcion === "ocultar"){
            this.setState({descripcion: "mostrar",
                texto_descripcion: "ocultar descripción"
            })
        } else {
            this.setState({descripcion: "ocultar",
                texto_descripcion: "ver descripción"
            })
        }
    };
    render() {
        return( 
            <article> 
              <img src= {`https://image.tmdb.org/t/p/w342${this.props.dataPeliPop.poster_path}`} />
              <h2>{this.props.dataPeliPop.title}</h2>
              <div>
                <p className={this.state.descripcion}>{this.props.dataPeliPop.overview}</p>
                <button onClick={() => this.mostrarDescripcion()}>{this.state.texto_descripcion}
                </button>
              </div>
              <Link to= {`/detalle/${this.props.dataPeliPop.id}`}>
               <button>Ir a detalle</button>
              </Link>
            </article>
        )
    }}

export default PeliCartelera;


