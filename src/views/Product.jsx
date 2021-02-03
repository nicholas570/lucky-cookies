import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Block from '../containers/product/Block';

function Product() {
  const { id } = useParams();
  const {
    cookies: { data },
  } = useSelector((state) => state);

  return (
    <div>
      <Block product={data[id - 1]} />
    </div>
  );
}

export default Product;
