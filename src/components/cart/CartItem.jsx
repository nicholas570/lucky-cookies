import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Button, Col, Form } from 'react-bootstrap/';

import { removeItem } from '../../redux';

import style from '../../css/cart/cartItem.module.css';

function CartItem({ image, name, price, quantity, cookieId }) {
  const dispatch = useDispatch();

  return (
    <>
      <Col className="col-6 d-flex justify-content-start align-items-center">
        <Button
          className="bg-transparent text-muted border-0"
          onClick={() => dispatch(removeItem({ cartId: 3, cookieId }))}
        >
          x
        </Button>
        <div
          className={style.img}
          style={{
            backgroundImage: `url(/assets/images/shop/${image})`,
          }}
        />
        <p className="text-left ml-3">{name}</p>
      </Col>
      <Col className="col-3 d-flex justify-content-start align-items-center">
        <Form.Control
          as="select"
          className="w-100"
          value={quantity}
          onChange={() => {}}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Col>
      <Col className="col-3 d-flex justify-content-end align-items-center">
        <p>{`${price} €`}</p>
      </Col>
    </>
  );
}

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  cookieId: PropTypes.number.isRequired,
};

export default CartItem;
