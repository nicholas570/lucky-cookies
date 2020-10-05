import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Row } from 'react-bootstrap';

import Product from '../../components/shop/Product';

function Products() {
  const { products } = useSelector((state) => state.data.shop);
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </Row>
    </Container>
  );
}

export default Products;
