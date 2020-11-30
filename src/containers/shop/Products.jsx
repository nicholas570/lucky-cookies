import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Row } from 'react-bootstrap';

import Product from '../../components/shop/Product';

function Products() {
  const { cookies } = useSelector((state) => state.infos.data);
  return (
    <Container>
      <Row>
        {cookies.map((cookie) => {
          return <Product cookie={cookie} key={cookie.id} />;
        })}
      </Row>
    </Container>
  );
}

export default Products;
