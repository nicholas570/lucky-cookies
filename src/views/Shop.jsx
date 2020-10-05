import React from 'react';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Header from '../containers/shop/Header';
import Products from '../containers/shop/Products';

function Shop() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default Shop;
