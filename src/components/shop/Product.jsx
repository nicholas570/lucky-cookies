import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Product({ good }) {
  return (
    <Col md={4} className="p-0">
      <Card style={{ width: '100' }} className="border border-0 px-2">
        <Card.Img
          variant="top"
          className="d-block w-100 h-75"
          src={`/assets/images/shop/${good.pic}`}
        />
        <Card.Body>
          <Card.Title className="text-left">{good.name}</Card.Title>
          <Card.Text className="text-left">{good.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

Product.propTypes = {
  good: PropTypes.shape.isRequired,
};

export default Product;
