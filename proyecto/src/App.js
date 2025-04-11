import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Favoritos from './screens/Favoritos/Favoritos';
import Populares from './screens/Populares/Populares';
import Cartelera from './screens/Cartelera/Cartelera';
import Home from './screens/Home/Home';
import Buscador from './screens/Buscador/Buscador';
import Resultados from './screens/Resultados/Resultados';
import Detalle from './screens/Detalle/Detalle';
import Footer from './components/Footer/Footer';
import NotFound from './screens/NotFound/NotFound';



function App() {
  return (
  <>
  
    <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritos'} exact={true} component={Favoritos} />
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path={'/populares'} component={Populares} />
        <Route path={'/cartelera'} component={Cartelera} />
        <Route path={'/buscador'} component={Buscador} />
        <Route path={"/resultados/:busqueda"} component={Resultados} />
        <Route path={''} component={NotFound} />
      </Switch>
      <Footer />
  </>
  );
}

export default App;
