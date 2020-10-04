import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import style from '../../css/shop/cardImage.module.css';

function Product({ product }) {
  return (
    <Col md={4} className="p-0 mb-3">
      <Card style={{ width: '100' }} className="border border-0 px-2">
        <Link to={`/product/${product.id}`}>
          <Card.Img
            variant="top"
            className={style.image}
            src={`/assets/images/shop/${product.pic}`}
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-left">{product.name}</Card.Title>
          <Card.Text className="text-left">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

Product.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default Product;
