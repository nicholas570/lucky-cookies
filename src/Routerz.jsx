import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

function Routerz(props) {
  const { main, content, shop, goods, pics } = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            main={main}
            content={content}
            shop={shop}
            goods={goods}
            pics={pics}
          />
        </Route>
      </Switch>
    </Router>
  );
}

Routerz.propTypes = {
  main: PropTypes.shape.isRequired,
  content: PropTypes.shape.isRequired,
  shop: PropTypes.shape.isRequired,
  goods: PropTypes.shape.isRequired,
  pics: PropTypes.shape.isRequired,
};

export default Routerz;
