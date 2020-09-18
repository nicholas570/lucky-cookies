import React from 'react';
import PropTypes from 'prop-types';

function Partners({ partners }) {
  return (
    <div className="mb-5">
      {partners.map((partner) => {
        return (
          <a href={partner.mail} key={partner.id}>
            <p className="text-left font-italic">{partner.name}</p>
          </a>
        );
      })}
    </div>
  );
}

Partners.propTypes = {
  partners: PropTypes.shape.isRequired,
};

export default Partners;
