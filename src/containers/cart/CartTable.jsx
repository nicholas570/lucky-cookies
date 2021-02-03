import React from 'react';

import { Container, Row } from 'react-bootstrap';
import { Table } from 'reactstrap';

import CartItem from '../../components/cart/CartItem';
import TableHeader from '../../components/cart/TableHeader';

const arr = [1, 2, 3];

function CartTable() {
  return (
    <Container>
      <Table>
        <Row>
          <TableHeader />
        </Row>
        <hr />
        {arr.map((el) => {
          return (
            <div key={el}>
              <Row>
                <CartItem />
              </Row>
              <hr />
            </div>
          );
        })}
      </Table>
    </Container>
  );
}

export default CartTable;
