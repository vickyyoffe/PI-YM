import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loader: true });
    }, 1500);
  }

  render() {
    let contenido;
    
    if (!this.state.loader) {
      contenido = (
        <img className="gif"
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm02YW1zcHZ2ZXUzMGxuaXBxN3QxYXYwaWVybHlkcWduc3RjcmNleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KG4PMQ0jyimywxNt8i/giphy.gif"
          alt="Cargando..."
          width={300}
/>

      );
    }


    return (
      <div className="loader-container">
        {contenido}
      </div>
    );
  }
}

export default Loader;
