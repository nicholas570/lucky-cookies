import React from 'react';
import CartTotal from '../components/cart/CartTotal';

import Title from '../components/cart/Title';
import CartTable from '../containers/cart/CartTable';

function Cart() {
  return (
    <>
      <Title />
      <CartTable />
      <CartTotal />
    </>
  );
}

export default Cart;
