import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Shop from './views/Shop';
import About from './views/About';

function Routerz(props) {
  const {
    main,
    content,
    shop,
    goods,
    pics,
    offers,
    address,
    contacts,
    newsLetter,
    partners,
    openings,
  } = props;

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
            newsLetter={newsLetter}
            partners={partners}
            openings={openings}
          />
        </Route>
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
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
  newsLetter: PropTypes.shape.isRequired,
  partners: PropTypes.shape.isRequired,
  openings: PropTypes.shape.isRequired,
};

export default Routerz;
