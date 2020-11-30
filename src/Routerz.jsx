import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import LayoutedView from './layout/Layout';
import Home from './views/Home';
import Shop from './views/Shop';
import Menu from './views/Menu';
import Careers from './views/Careers';
import Product from './views/Product';

function LayoutedRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

function Routerz() {
  return (
    <div>
      <Router>
        <Switch>
          <LayoutedRoute
            exact
            path="/"
            component={Home}
            layout={LayoutedView}
          />
          <LayoutedRoute path="/menu" component={Menu} layout={LayoutedView} />
          <LayoutedRoute path="/shop" component={Shop} layout={LayoutedView} />
          <LayoutedRoute
            path="/product/:id"
            component={Product}
            layout={LayoutedView}
          />
          <LayoutedRoute
            path="/careers"
            component={Careers}
            layout={LayoutedView}
          />
        </Switch>
      </Router>
    </div>
  );
}

LayoutedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.node.isRequired,
};

export default Routerz;
