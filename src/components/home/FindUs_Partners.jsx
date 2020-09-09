import React from 'react';
import PropTypes from 'prop-types';

function Partners(props) {
  const { partners } = props;

  return (
    <div>
      {partners.map((partner) => {
        return (
          <a href={partner.mail} key={partner.id}>
            <p className="text-left text-dark font-italic">{partner.name}</p>
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
