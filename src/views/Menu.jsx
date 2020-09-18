import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Lunch from '../containers/menu/Lunch';

function Menu({ main, address, menu, snacks, mainCourses, desserts, drinks }) {
  return (
    <div>
      <Navbar main={main} />
      <Lunch
        menu={menu}
        snacks={snacks}
        mainCourses={mainCourses}
        desserts={desserts}
        drinks={drinks}
      />
      <Footer main={main} address={address} />
    </div>
  );
}

Menu.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
  menu: PropTypes.shape.isRequired,
  snacks: PropTypes.shape.isRequired,
  mainCourses: PropTypes.shape.isRequired,
  desserts: PropTypes.shape.isRequired,
  drinks: PropTypes.shape.isRequired,
};

export default Menu;
