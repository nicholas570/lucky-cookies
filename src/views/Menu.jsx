import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Lunch from '../containers/menu/Lunch';

function Menu(props) {
  const { main, address, menu, snacks, mainCourses } = props;
  return (
    <div>
      <Navbar main={main} />
      <Lunch menu={menu} snacks={snacks} mainCourses={mainCourses} />
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
};

export default Menu;
