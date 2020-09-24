import React from 'react';
import PropTypes from 'prop-types';

function SalePoints({ shop }) {
  return (
    <>
      <p className="text-left font-weight-bold text-danger mb-3">
        Points de vente
      </p>
      <p className="text-left mb-3">{shop.partnersText}</p>
      <p className="text-left">
        Vous pouvez consulter
        {'  '}
        <a href={shop.partnersMap} target="_blank" rel="noopener noreferrer">
          la carte des Amis de Lucky Cookies ici.
        </a>
      </p>
    </>
  );
}

SalePoints.propTypes = {
  shop: PropTypes.shape.isRequired,
};
export default SalePoints;
