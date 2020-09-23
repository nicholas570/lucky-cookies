import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Block from '../containers/product/Block';

function Product({ main, address }) {
  return (
    <div>
      <Navbar main={main} />
      <Block />
      <Footer main={main} address={address} />
    </div>
  );
}

Product.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
};

export default Product;
