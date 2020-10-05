import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Block from '../containers/product/Block';

function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.data.shop.products[id]);

  return (
    <div>
      <Block product={product} />
    </div>
  );
}

export default Product;
