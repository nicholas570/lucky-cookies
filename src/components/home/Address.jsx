import React from 'react';
import PropTypes from 'prop-types';

function Address(props) {
  const { address } = props;

  return (
    <div>
      <p className="font-weight-bold">Address</p>
      <p>{address.street}</p>
      <p>
        {address.zip}
        {address.city}
      </p>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.shape.isRequired,
};

export default Address;
