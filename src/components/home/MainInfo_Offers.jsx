import React from 'react';
import PropTypes from 'prop-types';

function Offers(props) {
  const { offers } = props;

  return (
    <div className="mt-5">
      {offers.map((offer) => {
        return (
          <p className="font-weight-bold m-0" key={offer.id}>
            {offer.name}
          </p>
        );
      })}
    </div>
  );
}

Offers.propTypes = {
  offers: PropTypes.shape.isRequired,
};

export default Offers;
