import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Navegacion from './components/Navegacion/Navegacion';
import Home from './screens/Home/Home';
import Favoritos from './screens/Favoritos/Favoritos';
import Footer from './components/Footer/Footer';


function App() {
  return (
  <>
    <Navegacion />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritos'} component={Favoritos} />
      </Switch>
      <Footer />
  </>
  );
}

export default App;
