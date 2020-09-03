import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';

function Routerz(props) {
  const { main, content, shop, goods, pics, offers, address, contacts } = props;

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
            offers={offers}
            address={address}
            contacts={contacts}
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
  offers: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
  contacts: PropTypes.shape.isRequired,
};

export default Routerz;
