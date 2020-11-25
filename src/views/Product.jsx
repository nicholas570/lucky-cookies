import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Block from '../containers/product/Block';

function Product() {
  const { id } = useParams();
  const { cookies } = useSelector((state) => state.data);

  return (
    <div>
      <Block product={cookies[id - 1]} />
    </div>
  );
}

export default Product;
