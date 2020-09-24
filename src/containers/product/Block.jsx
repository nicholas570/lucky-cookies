import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row } from 'react-bootstrap';

import ProductForm from '../../components/product/ProductForm';

function Block({ product }) {
  return (
    <Container fluid className="p-5">
      <Row className="d-flex flex-column flex-md-row">
        <ProductForm product={product} />
      </Row>
    </Container>
  );
}

Block.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Block;
