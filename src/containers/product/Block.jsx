import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row } from 'react-bootstrap';

import ProductForm from '../../components/product/ProductForm';
import ProductIngredients from '../../components/product/ProductIngredients';

function Block({ product }) {
  return (
    <Container fluid className="p-5">
      <Row className="d-flex flex-column flex-md-row">
        <ProductForm product={product} />
      </Row>
      <Row>
        <ProductIngredients />
      </Row>
    </Container>
  );
}

Block.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Block;
