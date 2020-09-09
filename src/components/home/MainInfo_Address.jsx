import React from 'react';
import PropTypes from 'prop-types';

function Address(props) {
  const { address } = props;

  return (
    <div className="mt-3 mt-md-0">
      <p className="font-weight-bold mb-3">Address</p>
      <p>{address.street}</p>
      <p>{`${address.zip} ${address.city}`}</p>
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.shape.isRequired,
};

export default Address;
