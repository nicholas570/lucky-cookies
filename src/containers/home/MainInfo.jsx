import React from 'react';
import PropTypes from 'prop-types';

import Offers from '../../components/home/Offers';

function MainInfo(props) {
  const { offers } = props;
  return (
    <div>
      <Offers offers={offers} />
    </div>
  );
}

MainInfo.propTypes = {
  offers: PropTypes.shape.isRequired,
};

export default MainInfo;
