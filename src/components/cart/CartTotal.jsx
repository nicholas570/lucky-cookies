import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Row } from 'react-bootstrap';

function CartTotal() {
  const {
    cart: { data: items },
  } = useSelector((state) => state);
  const [total, setTotal] = useState();

  useEffect(() => {
    if (items.length) {
      setTotal(
        items
          .reduce((acc, current) => {
            return acc + current.price * current.quantity;
          }, 0)
          .toFixed(2)
      );
    }
  }, [items]);

  return (
    <Container>
      <Row className="d-flex justify-content-end p-sm-3">
        <p className="font-weight-bold">
          {items.length && `Subtotal ${total}€`}
        </p>
      </Row>
    </Container>
  );
}

export default CartTotal;
