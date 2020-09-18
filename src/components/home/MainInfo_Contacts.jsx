import React from 'react';
import PropTypes from 'prop-types';

function Contacts({ contacts }) {
  return (
    <div className="mt-3 mt-md-0">
      <p className="font-weight-bold mb-3">Contacts</p>
      <p>{contacts.phone}</p>
      <p>{contacts.mail}</p>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.shape.isRequired,
  mail: PropTypes.shape.isRequired,
  phone: PropTypes.shape.isRequired,
};

export default Contacts;
