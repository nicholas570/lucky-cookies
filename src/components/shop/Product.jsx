import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import style from '../../css/shop/cardImage.module.css';

function Product({ cookie }) {
  return (
    <Col md={4} className="p-0 mb-3">
      <Card style={{ width: '100' }} className="border border-0 px-2">
        <Link to={`/product/${cookie.id}`}>
          <Card.Img
            variant="top"
            className={style.image}
            src={`/assets/images/shop/${cookie.image}`}
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-left">{cookie.name}</Card.Title>
          <Card.Text className="text-left">{`${cookie.price} €`}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

Product.propTypes = {
  cookie: PropTypes.shape.isRequired,
};

export default Product;
