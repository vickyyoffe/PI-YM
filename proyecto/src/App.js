import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Navegacion from './components/Navegacion/Navegacion';
import Home from './screens/Home/Home';
import Favoritos from './screens/Favoritos/Favoritos';
import Detalle from './screens/Detalle/Detalle';
import VerTodas from './screens/VerTodas/VerTodas';
import Busqueda from './screens/Busqueda/Busqueda';
import Footer from './components/Footer/Footer';


function App() {
  return (
  <>
    <Navegacion />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path={'/busqueda/:resultado'} component={Busqueda} />
        <Route path={'/vertodas'} component={VerTodas} />
        
      </Switch>
      <Footer />
  </>
  );
}

export default App;
