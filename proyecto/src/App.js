import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import Detalle from './screens/Detalle/Detalle';
import Loader from './components/Loader/Loader';
import VerTodas from './screens/VerTodas/VerTodas';
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
        <Route path={'/detalle/:id'} component={Detalle} />
        <Route path={'/busqueda/:resultado'} component={Busqueda} />
        <Route path={'/vertodas'} component={VerTodas} />
        <Route path={''} component={NotFound} />
      </Switch>
      <Footer />
  </>
  );
}

export default App;
