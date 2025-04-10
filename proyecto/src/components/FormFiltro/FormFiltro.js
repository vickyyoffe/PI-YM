import React, {Component} from "react";

class FormFiltro extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"" //estado q guarda el valor del filtro
        }

    }
    evitarSubmit(evento){ //formulario no se recargue cada vez que cambio algo
        evento.preventDefault();
    }
    obtenerDatos(evento){
        this.setState({value: evento.target.value}, ()=> this.props.filtrar(this.state.value)) //target: cuando llega algo dentro de un formulario.
        //la funcion filtrar que viene de las proops de mi componente padre se ejecute con el valor dentro de mi formulario.
    }
    render(){
        return(
            <form onSubmit={(evento)=>this.evitarSubmit(evento)}>
                <input onChange={(evento) => this.obtenerDatos(evento)} type="text" value={(this.state.value)}/>
            </form>
        )
}
}

export default FormFiltro;
