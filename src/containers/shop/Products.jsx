import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row } from 'react-bootstrap';

import Product from '../../components/shop/Product';

function Products({ goods }) {
  return (
    <Container>
      <Row>
        {goods.map((good) => {
          return <Product good={good} key={good.id} />;
        })}
      </Row>
    </Container>
  );
}

Products.propTypes = {
  goods: PropTypes.shape.isRequired,
};

export default Products;
