import React from 'react';
import PropTypes from 'prop-types';

function Rules({ shop }) {
  return (
    <div className="mb-5">
      <p className="font-weight-bold text-left mb-3">
        Lucky Cookies est un coffee shop spécialiste des cookies.
      </p>
      <p className="text-left">{shop.description}</p>
    </div>
  );
}

Rules.propTypes = {
  shop: PropTypes.shape.isRequired,
};
export default Rules;
