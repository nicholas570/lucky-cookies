import React from 'react';
import PropTypes from 'prop-types';

import ProductForm from '../../components/product/ProductForm';
import ProductImage from '../../components/product/ProductImage';
import ProductDescription from '../../components/product/ProductDescription';

function Block({ product }) {
  return (
    <div>
      <ProductForm />
      <ProductImage product={product} />
      <ProductDescription />
    </div>
  );
}

Block.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Block;
