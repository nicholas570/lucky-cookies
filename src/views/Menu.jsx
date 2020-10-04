import React from 'react';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Lunch from '../containers/menu/Lunch';

function Menu() {
  return (
    <div>
      <Navbar />
      <Lunch />
      <Footer />
    </div>
  );
}

export default Menu;
