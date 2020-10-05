import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Contents from '../../components/menu/Contents';

function Lunch() {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col>
          <Contents />
        </Col>
      </Row>
    </Container>
  );
}

export default Lunch;
