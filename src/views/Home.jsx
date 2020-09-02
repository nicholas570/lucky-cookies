import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/Navbar';

function Home(props) {
  const { main } = props;

  return (
    <>
      <Navbar main={main} />
    </>
  );
}

Home.propTypes = {
  main: PropTypes.shape.isRequired,
};

export default Home;
