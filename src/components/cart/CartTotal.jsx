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
      setTotal(items.reduce((acc, current) => acc.price + current.price));
    }
  }, [items]);

  return (
    <Container>
      <Row className="d-flex justify-content-end p-sm-3">
        <p className="font-weight-bold">{`Subtotal ${total}€`}</p>
      </Row>
    </Container>
  );
}

export default CartTotal;
