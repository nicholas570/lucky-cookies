import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import style from '../../css/shop/cardImage.module.css';

function Product({ good }) {
  return (
    <Col md={4} className="p-0 mb-3">
      <Card style={{ width: '100' }} className="border border-0 px-2">
        <Link to={`/product/${good.id}`}>
          <Card.Img
            variant="top"
            className={style.image}
            src={`/assets/images/shop/${good.pic}`}
          />
        </Link>
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
