import React from 'react';
import PropTypes from 'prop-types';

function ProductImage({ product }) {
  return (
    <div>
      <img src={`/assets/images/shop/${product.pic}`} alt={product.name} />
    </div>
  );
}

ProductImage.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductImage;
