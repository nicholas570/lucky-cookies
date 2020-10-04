import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Shop from './views/Shop';
import Menu from './views/Menu';
import Careers from './views/Careers';
import Product from './views/Product';

function Routerz() {
  const isLoading = useSelector((state) => state.loading);

  return (
    <div>
      {!isLoading && (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id" component={Product} />
            <Route path="/careers" component={Careers} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default Routerz;
