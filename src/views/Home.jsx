import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Carousel from '../components/home/Carousel';
import MainInfo from '../containers/home/MainInfo';
import Pics from '../containers/home/Pics';
import Content from '../containers/home/Content';

function Home(props) {
  const { main, content, pics, offers, address, contacts } = props;

  return (
    <>
      <Navbar main={main} />
      <Carousel pics={pics} />
      <MainInfo address={address} offers={offers} contacts={contacts} />
      <Pics />
      <Content content={content} />
    </>
  );
}

Home.propTypes = {
  main: PropTypes.shape.isRequired,
  pics: PropTypes.shape.isRequired,
  offers: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
  contacts: PropTypes.shape.isRequired,
  content: PropTypes.shape.isRequired,
};

export default Home;
