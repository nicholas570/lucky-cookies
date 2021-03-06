import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Col, Form, Button } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

import { addItem } from '../../redux';

import style from '../../css/product/productForm.module.css';
import ProductIngredients from './ProductIngredients';

function ProductForm({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [success, setSuccess] = useState(false);
  const {
    cart: { err, data },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;

    setQuantity(value);
  };

  const isAlreadyInCart =
    data.length >= 1
      ? data.map((item) => item.cookieId).includes(product.id)
      : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    if (form.checkValidity()) {
      dispatch(addItem({ cookieId: product.id, cartId: 3, quantity }));
      if (!err) setSuccess(true);
    }
  };

  return (
    <Col className="text-left col-md-4 offset-md-1 mb-3">
      <h1 className="font-weight-bold mb-3">{product.name}</h1>
      <p className="mb-3">{`${product.price} €`}</p>
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
          disabled={isAlreadyInCart}
        >
          {success ? 'ADDED' : 'ADD'}
        </Button>
      </Form>

      {isAlreadyInCart && <p>Cookie already selected</p>}

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
