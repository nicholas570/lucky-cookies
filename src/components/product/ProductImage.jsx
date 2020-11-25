import React from 'react';
import PropTypes from 'prop-types';

import { Col, Image } from 'react-bootstrap';

import style from '../../css/product/productImage.module.css';

function ProductImage({ product }) {
  return (
    <Col className="col-md-6 offset-md-1">
      <Image
        src={`/assets/images/shop/${product.image}`}
        alt={product.name}
        className="img-fluid"
        id={style.image}
      />
    </Col>
  );
}

ProductImage.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductImage;
