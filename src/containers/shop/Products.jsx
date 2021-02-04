import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row } from 'react-bootstrap';

import Product from '../../components/shop/Product';
import Loader from '../../components/home/Loader';

import { fetchCookies } from '../../redux';

function Products() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.cookies.loading);
  const {
    cookies: { data },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCookies());
  }, []);

  return (
    <Container>
      <Row>
        {isLoading ? (
          <Loader />
        ) : (
          data.map((cookie) => {
            return <Product cookie={cookie} key={cookie.id} />;
          })
        )}
      </Row>
    </Container>
  );
}

export default Products;
