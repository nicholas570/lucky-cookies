import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row } from 'react-bootstrap';
import { Table } from 'reactstrap';

import { fetchCart } from '../../redux';

import Loader from '../../components/home/Loader';
import CartItem from '../../components/cart/CartItem';
import TableHeader from '../../components/cart/TableHeader';

const id = 3;

function CartTable() {
  const dispatch = useDispatch();
  const { loading, data: items } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCart(id));
  }, []);

  return (
    <Container>
      <Table>
        <Row>
          <TableHeader />
        </Row>
        <hr />
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </Table>
    </Container>
  );
}

export default CartTable;
