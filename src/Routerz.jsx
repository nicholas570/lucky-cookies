import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Shop from './views/Shop';
import Menu from './views/Menu';

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
    menu,
    snacks,
    mainCourses,
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
        <Route path="/menu">
          <Menu
            main={main}
            address={address}
            menu={menu}
            snacks={snacks}
            mainCourses={mainCourses}
          />
        </Route>
        <Route path="/shop">
          <Shop main={main} address={address} />
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
  newsLetter: PropTypes.shape.isRequired,
  partners: PropTypes.shape.isRequired,
  openings: PropTypes.shape.isRequired,
  menu: PropTypes.shape.isRequired,
  snacks: PropTypes.shape.isRequired,
  mainCourses: PropTypes.shape.isRequired,
};

export default Routerz;
