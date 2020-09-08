import React from 'react';
import PropTypes from 'prop-types';

function Contacts(props) {
  const { contacts } = props;

  return (
    <div className="mt-5">
      <p className="font-weight-bold">Contacts</p>
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
