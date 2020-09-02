import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/Navbar';
import Carousel from '../components/home/Carousel';

function Home(props) {
  const { main, pics } = props;

  return (
    <>
      <Navbar main={main} />
      <Carousel pics={pics} />
    </>
  );
}

Home.propTypes = {
  main: PropTypes.shape.isRequired,
  pics: PropTypes.shape.isRequired,
};

export default Home;
