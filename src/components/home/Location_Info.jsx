import React from 'react';
import PropTypes from 'prop-types';

function Info(props) {
  const { address, openings, contacts } = props;
  return (
    <div className="text-left mb-5">
      <p className="font-weight-bold">Address</p>
      <br />
      <p>{address.place}</p>
      <p>{address.street}</p>
      <p>{`${address.zip} ${address.city}`}</p>
      <br />
      <p>{openings.days}</p>
      <p>{openings.hours}</p>
      <br />
      <p>{contacts.phone}</p>
      <p>{contacts.mail}</p>
    </div>
  );
}

Info.propTypes = {
  address: PropTypes.shape.isRequired,
  contacts: PropTypes.shape.isRequired,
  openings: PropTypes.shape.isRequired,
};

export default Info;
