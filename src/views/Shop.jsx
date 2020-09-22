import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Header from '../containers/shop/Header';

function Shop({ main, address, shop, goods }) {
  return (
    <div>
      <Navbar main={main} />
      <Header shop={shop} goods={goods} />
      <Footer main={main} address={address} />
    </div>
  );
}

Shop.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
  shop: PropTypes.shape.isRequired,
  goods: PropTypes.shape.isRequired,
};

export default Shop;
