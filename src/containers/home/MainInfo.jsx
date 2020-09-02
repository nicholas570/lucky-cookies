import React from 'react';
import PropTypes from 'prop-types';

import Offers from '../../components/home/Offers';
import Address from '../../components/home/Address';

function MainInfo(props) {
  const { offers, address } = props;

  return (
    <div>
      <Address address={address} />
      <Offers offers={offers} />
    </div>
  );
}

MainInfo.propTypes = {
  address: PropTypes.shape.isRequired,
  offers: PropTypes.shape.isRequired,
};

export default MainInfo;
