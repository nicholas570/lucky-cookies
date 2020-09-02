import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';

function Routerz() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Navbar} />
      </Switch>
    </Router>
  );
}

export default Routerz;
