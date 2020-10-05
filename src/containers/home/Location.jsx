import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Content from '../../components/home/Location_Content';
import Info from '../../components/home/Location_Info';

function Location() {
  return (
    <Container className="mt-5 p-5">
      <Row>
        <Col sm="12" md="3">
          <Info />
        </Col>
        <Col md="3" />
        <Col sm="12" md="6">
          <Content />
        </Col>
      </Row>
    </Container>
  );
}

export default Location;
