import React from 'react';

import { Button, Col, Form } from 'react-bootstrap/';

import style from '../../css/cart/cartItem.module.css';

function CartItem() {
  return (
    <>
      <Col className="col-6 d-flex justify-content-start align-items-center">
        <Button className="bg-transparent text-muted border-0">x</Button>
        <div
          className={style.img}
          style={{
            backgroundImage: `url("/assets/images/shop/noix.jpg")`,
          }}
        />
        <p className="text-left ml-3">item name</p>
      </Col>
      <Col className="col-3 d-flex justify-content-start align-items-center">
        <Form.Control as="select" className="w-75 ">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Col>
      <Col className="col-3 d-flex justify-content-end align-items-center">
        <p>PRICE €</p>
      </Col>
    </>
  );
}

export default CartItem;
