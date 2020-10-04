import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from '../containers/general/Navbar';
import Footer from '../containers/general/Footer';
import Block from '../containers/product/Block';

function Product() {
  const { id } = useParams();
  const { product } = useSelector((state) => state.data.shop.products[id]);

  return (
    <div>
      <Navbar />
      <Block product={product} />
      <Footer />
    </div>
  );
}

export default Product;
