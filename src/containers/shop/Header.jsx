import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Rules from '../../components/shop/Rules';
import SalePoints from '../../components/shop/SalePoints';

function Header({ shop, goods }) {
  return (
    <Container className="border border-danger">
      <Row className="d-flex flex-column flex-md-row border border-primary">
        <Col md={8}>
          <Rules shop={shop} goods={goods} />
        </Col>
        <Col md={4}>
          <SalePoints shop={shop} />
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {
  shop: PropTypes.shape.isRequired,
  goods: PropTypes.shape.isRequired,
};

export default Header;
