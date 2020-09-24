import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row } from 'react-bootstrap';

import ProductForm from '../../components/product/ProductForm';
import ProductDescription from '../../components/product/ProductDescription';

function Block({ product }) {
  return (
    <Container className="p-5">
      <Row className="d-flex flex-column flex-md-row">
        <ProductForm product={product} />
      </Row>
      <Row>
        <ProductDescription />
      </Row>
    </Container>
  );
}

Block.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Block;
