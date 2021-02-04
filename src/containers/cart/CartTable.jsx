import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Row } from 'react-bootstrap';
import { Table } from 'reactstrap';

import CartItem from '../../components/cart/CartItem';
import TableHeader from '../../components/cart/TableHeader';

function CartTable() {
  const { data: items } = useSelector((state) => state.cart);

  return (
    <Container>
      <Table>
        <Row>
          <TableHeader />
        </Row>
        <hr />
        {items && items.length ? (
          items.map((item) => {
            return (
              <div key={item.cookieId}>
                <Row>
                  <CartItem {...item} />
                </Row>
                <hr />
              </div>
            );
          })
        ) : (
          <p>No items yet :(</p>
        )}
      </Table>
    </Container>
  );
}

export default CartTable;
