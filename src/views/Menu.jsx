import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';

function Menu(props) {
  const { main, address } = props;
  return (
    <div>
      <Navbar main={main} />
      <h1>Working on it, come back later :)</h1>
      <Footer main={main} address={address} />
    </div>
  );
}

Menu.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
};

export default Menu;
