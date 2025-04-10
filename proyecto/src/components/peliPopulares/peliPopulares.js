import React, {Component} from "react";
// con estado: cuando tengo info que cambia.
import { Link } from 'react-router-dom';
import './populares.css';

class PeliPopulares extends Component{
    constructor(props){ //ahora si props porq nos llega de un padre la info de las pelis.
        super(props)
            this.state = {
                descripcion: "ocultar",
                texto_descripcion: "Ver descripción",
                fav: false
            }; //lo de article lo saco de props porque el estado acá está vacío. la info la traigo del componente padre, por eso uso props.
        
    };   
    mostrarDescripcion() {
      if (this.state.descripcion === "ocultar") {
        this.setState({
          descripcion: "mostrar",
          texto_descripcion: "Ocultar descripción"
        });
      } else {
        this.setState({
          descripcion: "ocultar",
          texto_descripcion: "Ver descripción"
        });
      }
    }

    agregarFavoritos(id) {
      let storage = localStorage.getItem("favoritos");
      if (storage != null){
        let favParse = JSON.parse(storage)
        favParse.push(id)
        let arrStringificado = JSON.stringify(favParse)
        localStorage.setItem("favoritos", arrStringificado)
      } else {
        let primerID = [id]
        let arrStringificado = JSON.stringify(primerID)
        localStorage.setItem("favoritos", arrStringificado)
      }

      this.setState({
        fav: true

      })
    }

    sacarFavoritos(id){
      let storage = localStorage.getItem("favoritos");
      let storageParseado = JSON.parse(storage)
      let filtrarStorage = storageParseado.filter((elm) => elm !== id) 
      let storageSignificado = JSON.stringify(filtrarStorage)
      localStorage.setItem("favoritos", storageSignificado)
      this.setState({
        fav: false
    })
    }
     render() {
            return ( 
              <article className="pelicula"> 
                <Link to={`/detalle/${this.props.dataPeliPop.id}`}> {/* Puse las imagenes dentro de un link para que al clickearlas, te lleve a detalle*/}
                  <img 
                    src={`https://image.tmdb.org/t/p/w342${this.props.dataPeliPop.poster_path}`} 
                    alt={this.props.dataPeliPop.title}
                    style={{ cursor: "pointer" }} // Esto es opcional
                  />
                </Link>
          
                <h2>{this.props.dataPeliPop.title}</h2>
          
                <div className="descripcion-contenedor">
                  <p className={this.state.descripcion}>
                    {this.props.dataPeliPop.overview}
                  </p>
                  <button onClick={() => this.mostrarDescripcion()}>
                    {this.state.texto_descripcion}
                  </button>
                  {
                    this.state.fav ?
                    <button onClick={() => this.sacarFavoritos(this.props.dataPeliPop.id)}>
                    Sacar de favoritos 💔
                    </button>
                    :
                    <button onClick={() => this.agregarFavoritos(this.props.dataPeliPop.id)} >
                    Agregar a favoritos ❤️
                    </button>
                  }
                  
                </div>
          
              </article>
            );
          }
        }

export default PeliPopulares;