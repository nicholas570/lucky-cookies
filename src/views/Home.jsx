import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Carousel from '../components/home/Carousel';
import MainInfo from '../containers/home/MainInfo';
import Pics from '../containers/home/Pics';
import Content from '../containers/home/Content';
import NewsLetter from '../containers/home/NewsLetter';
import Location from '../containers/home/Location';
import Iframe from '../containers/home/Iframe';
import FindUs from '../containers/home/FindUs';
import Footer from '../containers/general/Footer';

function Home(props) {
  const {
    main,
    content,
    pics,
    offers,
    address,
    contacts,
    newsLetter,
    partners,
    openings,
  } = props;

  return (
    <>
      <Navbar main={main} />
      <Carousel pics={pics} />
      <MainInfo address={address} offers={offers} contacts={contacts} />
      <Pics />
      <Content content={content} />
      <NewsLetter newsLetter={newsLetter} />
      <Location
        content={content}
        address={address}
        contacts={contacts}
        openings={openings}
      />
      <Iframe />
      <FindUs content={content} partners={partners} />
      <Footer main={main} address={address} />
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
  newsLetter: PropTypes.shape.isRequired,
  partners: PropTypes.shape.isRequired,
  openings: PropTypes.shape.isRequired,
};

export default Home;
