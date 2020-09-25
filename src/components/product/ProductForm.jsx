import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Col, Form, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

import style from '../../css/product/productForm.module.css';
import ProductIngredients from './ProductIngredients';

function ProductForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    setQuantity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      setSuccess(true);
    }
  };

  return (
    <Col className="text-left col-md-4 offset-md-1 mb-3">
      <h1 className="font-weight-bold mb-3">{product.name}</h1>
      <p className="mb-3">{product.price}</p>
      <p className="mb-3">{product.description}</p>

      <ProductIngredients product={product} />
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label className="text-dark font-weight-bold">
            Quantity
          </Form.Label>
          <Col md={2} className="p-0">
            <Form.Control
              id={style.quantity}
              type="number"
              value={quantity}
              onChange={handleChange}
              name="quantity"
              min="1"
            />
          </Col>
        </Form.Group>

        <Button
          variant="light"
          size="lg"
          className="btn btn-outline-danger"
          id={style.add}
          type="submit"
        >
          {success ? 'ADDED' : 'ADD'}
        </Button>
      </Form>

      <Link to="/shop">
        <ArrowLeft />
      </Link>
    </Col>
  );
}

ProductForm.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductForm;
