import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Rules from '../../components/shop/Rules';
import SalePoints from '../../components/shop/SalePoints';

function Header() {
  return (
    <Container className="mb-3">
      <Row className="d-flex flex-column flex-md-row">
        <Col md={8}>
          <Rules />
        </Col>
        <Col md={4}>
          <SalePoints />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
