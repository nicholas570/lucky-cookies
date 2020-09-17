import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Jobs from '../containers/careers/Jobs';

function Careers(props) {
  const { main, address, jobs } = props;
  return (
    <>
      <Navbar main={main} />
      <Jobs jobs={jobs} />
      <Footer main={main} address={address} />
    </>
  );
}

Careers.propTypes = {
  main: PropTypes.shape.isRequired,
  address: PropTypes.shape.isRequired,
  jobs: PropTypes.shape.isRequired,
};

export default Careers;
