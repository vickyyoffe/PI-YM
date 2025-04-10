import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Favoritos from './screens/Favoritos/Favoritos';
import Populares from './screens/Populares/Populares';
import Cartelera from './screens/Cartelera/Cartelera';
import Home from './screens/Home/Home';
import Detalle from './screens/Detalle/Detalle';
import Loader from './components/Loader/Loader';
import Busqueda from './screens/Busqueda/Busqueda';
import Footer from './components/Footer/Footer';
import NotFound from './screens/NotFound/NotFound';



function App() {
  return (
  <>
  
    <Header />
    <Loader />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritos'} exact={true} component={Favoritos} />
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path={'/busqueda'} component={Busqueda} />
        <Route path={'/populares'} component={Populares} />
        <Route path={'/cartelera'} component={Cartelera} />
        <Route path={''} component={NotFound} />
      </Switch>
      <Footer />
  </>
  );
}

export default App;
