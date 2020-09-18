import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';

function Shop({ main, address }) {
  return (
    <div>
      <Navbar main={main} />
      <h1>Working on it, come back later :)</h1>
      <Footer main={main} address={address} />
    </div>
  );
}

Shop.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
};

export default Shop;
