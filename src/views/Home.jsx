import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Carousel from '../components/home/Carousel';
import MainInfo from '../containers/home/MainInfo';

function Home(props) {
  const { main, pics, offers, address, contacts } = props;

  return (
    <>
      <Navbar main={main} />
      <Carousel pics={pics} />
      <MainInfo address={address} offers={offers} contacts={contacts} />
    </>
  );
}

Home.propTypes = {
  main: PropTypes.shape.isRequired,
  pics: PropTypes.shape.isRequired,
  offers: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
  contacts: PropTypes.shape.isRequired,
};

export default Home;
