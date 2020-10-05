import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
