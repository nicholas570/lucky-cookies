import React from 'react';
import ProductForm from '../../components/product/ProductForm';
import ProductImage from '../../components/product/ProductImage';
import ProductDescription from '../../components/product/ProductDescription';

function Block() {
  return (
    <div>
      <ProductForm />
      <ProductImage />
      <ProductDescription />
    </div>
  );
}

export default Block;
